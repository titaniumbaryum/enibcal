import { Component, OnInit, Input } from '@angular/core';
import { Event } from "../../structures/event";

@Component({
  selector: 'app-calendar-col',
  templateUrl: './calendar-col.component.html',
  styleUrls: ['./calendar-col.component.css']
})
export class CalendarColComponent implements OnInit {
  @Input() events:Event[];
  @Input() day:Date;
  @Input() compact:boolean;
  now:boolean = false;
  today:Date = new Date();
  begin=8*60;
  end=19*60;
  constructor() { }

  ngOnInit() {
    if(typeof this.compact == "undefined") this.compact = false;
    this.now=this.day.toLocaleDateString()==this.today.toLocaleDateString();
    let that = this;
    setInterval(function(){
      that.today = new Date();
    },1000*60);
  }
  /*details(event:Event){
    alert(
      event.title+" "+event.location+"\n"+
      event.description.replace(/\\n/g,"\n")+"\n"+
      "de: "+event.begin.toLocaleTimeString()+"\n"+
      "à: "+event.end.toLocaleTimeString()
    );
  }*/
  isIn(event:Event){
    if(typeof this.day !== "undefined" && typeof event !== "undefined"){
      return (this.day.getDate()==event.begin.getDate()) &&
        (this.day.getMonth()==event.begin.getMonth()) &&
        (this.day.getFullYear()==event.begin.getFullYear());
    }else return false;
  }
  t2h(time:Date){
    let rer = (time.getHours()*60+time.getMinutes()-this.begin)/(this.end-this.begin)*100;
    return rer;
  }
}
