import { Component, OnInit,Input } from '@angular/core';
import { Event } from '../../structures/event';
import { EventColorService } from '../../services/event-color.service';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {
  @Input() event:Event;
  @Input() compact:boolean;
  begin=8*60;
  end=19*60;
  color:string;
  flat:boolean;
  constructor(private eventColorService:EventColorService,private settingsService:SettingsService) {
    this.flat=this.settingsService.get("flatMode");
  }

  ngOnInit() {
    let that = this;
    if(typeof this.compact == "undefined") this.compact = false;
    this.eventColorService.get(this.event.title).then(c=>{
      that.color="#"+c;
    });
  }
  t2h(time:Date){
    let rer = (time.getHours()*60+time.getMinutes()-this.begin)/(this.end-this.begin)*100;
    return rer;
  }
}
