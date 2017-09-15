import { Injectable } from '@angular/core';
import { Event } from "../structures/event";
import { SettingsService } from './settings.service';
@Injectable()
export class CalendarService {

  constructor(
    private settingsService:SettingsService
  ) { }
  get():Promise<Event[]>{
    return new Promise((v,c)=>{
      if(typeof localStorage.calendar !== "undefined"){
        v(this.reparse(localStorage.calendar));
      }else{
        this.update().then(b=>v(this.reparse(localStorage.calendar)));
      }
    });
  }
  update():Promise<boolean>{
    let that=this;
    return new Promise((v,c)=>{
      that.getFor(this.settingsService.user).then(e=>{
        localStorage.calendar=JSON.stringify(e);
        v(true);
      });
    });
  }
  reparse(peventss:string):Event[]{
    let pevents = JSON.parse(peventss);
    let events:Event[] = [];
    for(let pevent of pevents){
      events.push({
        begin:new Date(pevent.begin),
        end:new Date(pevent.end),
        location:pevent.location,
        title:pevent.title,
        description:pevent.description,
      });
    }
    return events;
  }
  parse(peventss:string):Event[]{
    let pevents = JSON.parse(peventss);
    let events:Event[] = [];
    for(let pevent of pevents){
      events.push({
        begin:new Date(pevent.DTSTART),
        end:new Date(pevent.DTEND),
        location:pevent.LOCATION,
        title:pevent.SUMMARY,
        description:pevent.DESCRIPTION,
      });
    }
    return events;
  }
  getFor(user:string):Promise<Event[]>{
    return new Promise((v,c)=>{
      getCal('http://10.3.61.133:4242/proxy',user,events =>{
        v(this.parse(JSON.stringify(events)));
      });
    });
  }
}
