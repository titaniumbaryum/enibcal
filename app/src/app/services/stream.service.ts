import { Injectable } from '@angular/core';

@Injectable()
export class StreamService {

  constructor() {
    if(typeof localStorage.streams == "undefined")localStorage.streams = JSON.stringify([]);
  }
  get(){
    return JSON.parse(localStorage.streams);
  }
  add(id:string){
    let streams = JSON.parse(localStorage.streams);
    streams.push(id);
    localStorage.streams = JSON.stringify(streams);
  }
  remove(id:string){
    let streams = JSON.parse(localStorage.streams);
    if(streams.indexOf(id)==-1) return;
    streams.splice(streams.indexOf(id),1);
    localStorage.streams = JSON.stringify(streams);
  }
}
