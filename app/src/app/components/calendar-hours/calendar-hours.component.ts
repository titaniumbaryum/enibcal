import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-hours',
  templateUrl: './calendar-hours.component.html',
  styleUrls: ['./calendar-hours.component.css']
})
export class CalendarHoursComponent implements OnInit {
  hours:number[]=[];
  constructor() {
    for(var i=8;i<19;i++) this.hours.push(i);
  }

  ngOnInit() {
  }

}
