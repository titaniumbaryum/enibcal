import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  user:string;
  constructor() {
    this.user=localStorage.user;
  }
  set(id:string,val:any){
    if(typeof val == "string") localStorage[id]=val;
    else localStorage[id]=JSON.stringify(val);
  }
  get(id:string){
    if(!(id in localStorage)) throw `undefined setting ${id}`;
    try{
      return JSON.parse(localStorage[id]);
    }catch(e){
      return localStorage[id];
    }
  }
  exists(id:string){
    return id in localStorage
  }
}
