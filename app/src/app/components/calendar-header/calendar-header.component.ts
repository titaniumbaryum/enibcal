import { Component, OnInit, Input, Output, EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css']
})
export class CalendarHeaderComponent implements OnInit {
  @Input() date:Date;
  @Input() week:boolean;
  @Input() reload:boolean;
  @Output() weekSwitch:EventEmitter<boolean> = new EventEmitter();
  @Output() leftButton:EventEmitter<boolean> = new EventEmitter();
  @Output() rightButton:EventEmitter<boolean> = new EventEmitter();
  @Output() reloadButton:EventEmitter<boolean> = new EventEmitter();
  today:Date = new Date();
  now:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    if(typeof this.date !== "undefined"){
      this.now =  this.today.getFullYear() == this.date.getFullYear() &&
                  this.today.getMonth() == this.date.getMonth()
      if(this.week){
        this.now = this.now && this.today.getDate()-this.today.getDay() == this.date.getDate()-this.date.getDay()
      }else{
        this.now = this.now && this.today.getDate() == this.date.getDate()
      }
    }
  }
  switch(){
    this.weekSwitch.emit(!this.week);
  }
  left(){
    this.leftButton.emit(true);
  }
  right(){
    this.rightButton.emit(true);
  }
  reloadFunction(){
    this.reloadButton.emit(true);
  }
}
