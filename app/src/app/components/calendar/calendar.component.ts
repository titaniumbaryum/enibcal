import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SwipeService } from "../../services/swipe.service"

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  animations: [
    trigger('flyInOut', [
      state('left', style({transform: 'translateX(0)',opacity:1})),
      state('right', style({transform: 'translateX(0)',opacity:1})),
      transition('void => left', [
        style({transform: 'translateX(-100%)',opacity:0}),
        animate(100)
      ]),
      transition('left => void', [
        animate(100, style({transform: 'translateX(100%)',opacity:0}))
      ]),
      transition('void => right', [
        style({transform: 'translateX(100%)',opacity:0}),
        animate(100)
      ]),
      transition('right => void', [
        animate(100, style({transform: 'translateX(-100%)',opacity:0}))
      ]),
    ])
  ]
})
export class CalendarComponent implements OnInit {
  @Input() events:Event[];
  @Input() reload:boolean;
  @Input() day:Date;
  @Input() loading:Boolean;
  @Output() reloadButton:EventEmitter<boolean> = new EventEmitter();
  side:string="left";
  days:Date[]=[];
  window=window;
  week = true;
  to;
  constructor(
    private swipeService:SwipeService
  ) {
    this.swipeService.setCallback((mod,arg)=>{
      if(arg>-Math.PI/4 && arg<Math.PI/4){
        this.left();
      }
      if(arg>3*Math.PI/4 || arg<-3*Math.PI/4){
        this.right();
      }
    });
  }
  ngOnInit(){

  }
  ngOnChanges() {
    if(typeof this.to !== "undefined") clearTimeout(this.to);
    let that = this;
    this.days=[];
    this.to = setTimeout(function(){
      if(that.week){
        for(let i=1;i<7;i++){
          var d=new Date(that.day);
          d.setTime(d.getTime()+(i-d.getDay())*24*60*60*1000);
          that.days.push(d);
        }
      }else{
        that.days.push(new Date(that.day));
      }
    },105);
  }
  left(){
    let that = this;
    let os=(this.week?7:1)*24*60*60*1000;
    this.day.setTime(this.day.getTime()-os);
    this.day= new Date(this.day);
    this.side="left";
    console.log(this.day);
    setTimeout(function(){that.ngOnChanges()},0);
  }
  right(){
    let that = this;
    let os=(this.week?7:1)*24*60*60*1000;
    this.day.setTime(this.day.getTime()+os);
    this.day= new Date(this.day);
    this.side="right";
    console.log(this.day);
    setTimeout(function(){that.ngOnChanges()},0);
  }
  weekSwitch(w:boolean){
    this.week=w;
    this.ngOnChanges();
  }
  reloadFunction(){
    this.reloadButton.emit(true);
  }
}
