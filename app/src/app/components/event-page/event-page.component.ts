import { Component, OnInit } from '@angular/core';
import { CalendarService } from "../../services/calendar.service"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Event } from '../../structures/event';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  event:Event;
  constructor(
    private calendarService:CalendarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let that = this;
    this.calendarService.get().then(es=>{
      let id = parseInt(that.route.snapshot.paramMap.get('id'));
      for(let e of es){
        if(e.id==id){
          this.event = e;
        }
      }
    });
  }

}
