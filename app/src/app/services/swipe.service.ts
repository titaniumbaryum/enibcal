import { Injectable } from '@angular/core';

@Injectable()
export class SwipeService {
  start=[0,0];
  minTravel=35;
  callback;
  constructor() { }
  setCallback(c){
    this.callback=c;
  }
  ts(event){
    this.start=[event.changedTouches[0].screenX,event.changedTouches[0].screenY];
  }
  te(event){
    let end=[event.changedTouches[0].screenX,event.changedTouches[0].screenY];
    let delta =[end[0]-this.start[0],end[1]-this.start[1]];
    let mod = Math.sqrt(delta[0]**2+delta[1]**2);
    let arg = Math.atan2(-delta[1],delta[0]);
    if(mod>this.minTravel) this.callback(mod,arg);
  }
}
