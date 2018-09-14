import { Injectable } from '@angular/core';
import { Event } from "../structures/event";
import { SettingsService } from './settings.service';
import { environment } from '../../environments/environment';
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
        localStorage.lastUpdateDate=new Date().getTime();
        v(true);
      });
    });
  }
  reparse(peventss:string):Event[]{
    let pevents = JSON.parse(peventss);
    let events:Event[] = [];
    for(let pevent of pevents){
      events.push(new Event({
        begin:new Date(pevent.begin),
        end:new Date(pevent.end),
        location:pevent.location,
        title:pevent.title,
        description:pevent.description,
      }));
    }
    return events;
  }
  parse(peventss:string):Event[]{
    let pevents = JSON.parse(peventss);
    let events:Event[] = [];
    for(let pevent of pevents){
      events.push(new Event({
        begin:new Date(pevent.DTSTART),
        end:new Date(pevent.DTEND),
        location:pevent.LOCATION,
        title:pevent.SUMMARY,
        description:pevent.DESCRIPTION,
      }));
    }
    return events;
  }
  fuse(e):Event[]{
    e.sort((a,b)=>a.begin.getTime()-b.begin.getTime());
    let e2:Event[]=[];
    while(e.length){
      let x = e.shift();
      for(let i=0;i<3;i++){
        if(e.length && x.title==e[0].title && x.location==x.location && Math.abs(e[0].begin.getTime()-x.end.getTime())<=15*60*1000){
          x.end=e[0].end;
          e.shift();
        }
      }
      e2.push(x);
    }
    return e2;
  }
  getFor(user:string):Promise<Event[]>{
    return new Promise((v,c)=>{
      getCal(environment.host+'proxy',user,events =>{
        v(this.parse(JSON.stringify(events)));
      });
    }).then(e=>this.fuse(e));
  }
  getLastUpdateDate(){
    return new Date(JSON.parse(localStorage.lastUpdateDate));
  }
}
