import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { StreamService } from './stream.service';
import { SettingsService } from './settings.service';
import { Homework } from '../structures/homework';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeworkService {

  constructor(
    private streamService:StreamService,
    private http:Http,
    private settingsService:SettingsService
  ) { }
  get():Promise<Homework[]>{
    return new Promise((v,c)=>{
      let streams=this.streamService.get();
      let ended=0;
      let homeworks:Homework[]=[];
      if(streams.length==0){
        v(homeworks);
      }
      for(let stream of streams){
        ended++;
        this.http.get(environment.host+"api/homeworks/get?stream="+stream).toPromise()
        .then(response => {
          var jdata = response.json();
          for(let h of jdata){
            homeworks.push({
              id:h.id,
              stream:h.stream,
              end:new Date(h.end),
              title:h.title,
              author:h.author,
              description:h.description,
              completers:typeof h.completers == "undefined"?[]:h.completers,
            });
          }
          ended--;
          if(ended==0){
            homeworks.sort(compareH);
            v(homeworks);
          }
        })
        .catch(this.handleError);
      }
    });
  }
  complete(homework:Homework):Promise<boolean>{
    return new Promise((v,c)=>{
      this.http.get(environment.host+"api/homeworks/complete?id="+homework.id+"&user="+this.settingsService.user).toPromise()
      .then(response => {
        v(true);
      })
      .catch(this.handleError);
    });
  }
  uncomplete(homework:Homework):Promise<boolean>{
    return new Promise((v,c)=>{
      this.http.get(environment.host+"api/homeworks/uncomplete?id="+homework.id+"&user="+this.settingsService.user).toPromise()
      .then(response => {
        v(true);
      })
      .catch(this.handleError);
    });
  }
  add(homework:Homework):Promise<number>{
    return new Promise((v,c)=>{
      this.http.get(environment.host+"api/homeworks/add",{
        params: new HttpParams()
          .set('stream', homework.stream)
          .set('title', homework.title)
          .set('end', homework.end.getTime().toString())
          .set('description', homework.description)
          .set('author', homework.author)
      }).toPromise()
      .then(response => {
        let d=response.json();
        if(d.lenght>0) v(d[0].id);
        v(-1);
      })
      .catch(this.handleError);
    });
  }
  remove(homework:Homework):Promise<number>{
    return new Promise((v,c)=>{
      if(typeof homework.id != "undefined"){
        this.http.get(environment.host+"api/homeworks/remove?id="+homework.id).toPromise()
        .then(response => {
          console.log("rem");
          let d=response.json();
          if(d.lenght>0) v(d[0].id);
          v(-1);
        })
        .catch(this.handleError);
      }else v(-1);
    });
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
function compareH(a, b) {
  return a.end.getTime() - b.end.getTime();
}
