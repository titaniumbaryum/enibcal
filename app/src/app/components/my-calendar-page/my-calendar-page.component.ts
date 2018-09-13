import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from "../../services/settings.service"
import { CalendarService } from "../../services/calendar.service"
import { Event } from "../../structures/event"

@Component({
  selector: 'app-my-calendar-page',
  templateUrl: './my-calendar-page.component.html',
  styleUrls: ['./my-calendar-page.component.css']
})
export class MyCalendarPageComponent implements OnInit {
  events:Event[];
  today = new Date();
  loading:boolean = false;
  constructor(
    private calendarService:CalendarService,
    private router:Router,
    private settingsService:SettingsService
  ) {
    if(typeof this.settingsService.user !== "undefined") calendarService.get().then(e=>this.events=e);
    else this.router.navigateByUrl("/settings");
  }

  ngOnInit() {
    if(new Date().getTime() - this.calendarService.getLastUpdateDate().getTime() > 24*60*60*1000) this.reload();
  }
  reload(){
    let that = this;
    this.loading = true;
    this.calendarService.update().then(b=>{
      this.calendarService.get().then(e=>{
        this.events=e;
        this.loading = false;
      });
    });
  }
}
