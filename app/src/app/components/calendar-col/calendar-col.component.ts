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
  constructor() { }

  ngOnInit() {
    if(typeof this.compact == "undefined") this.compact = false;
  }
  details(event:Event){
    alert(
      event.title+" "+event.location+"\n"+
      event.description.replace(/\\n/g,"\n")+"\n"+
      "de: "+event.begin.toLocaleTimeString()+"\n"+
      "à: "+event.end.toLocaleTimeString()
    );
  }
  isIn(event:Event){
    if(typeof this.day !== "undefined" && typeof event !== "undefined"){
      return (this.day.getDate()==event.begin.getDate()) &&
        (this.day.getMonth()==event.begin.getMonth()) &&
        (this.day.getFullYear()==event.begin.getFullYear());
    }else return false;
  }
}
