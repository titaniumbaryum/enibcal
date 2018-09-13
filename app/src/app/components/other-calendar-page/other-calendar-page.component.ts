import { Component, OnInit } from '@angular/core';
import { CalendarService } from "../../services/calendar.service"
import { Event } from "../../structures/event"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-other-calendar-page',
  templateUrl: './other-calendar-page.component.html',
  styleUrls: ['./other-calendar-page.component.css']
})
export class OtherCalendarPageComponent implements OnInit {
  events:Event[];
  today = new Date();
  loading:boolean;
  constructor(
    private calendarService:CalendarService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loading=true;
    this.calendarService.getFor(this.route.snapshot.paramMap.get('id')).then(e=>{
      this.events=e;
      this.loading=false;
    });
  }

}
