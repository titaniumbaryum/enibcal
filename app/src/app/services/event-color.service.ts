import { Injectable } from '@angular/core';
import { ColorService } from './color.service';

@Injectable()
export class EventColorService {
  constructor(private colorService:ColorService) {
    if(typeof localStorage.eventColor == "undefined"){
      localStorage.eventColor=JSON.stringify({});
    }
  }
  get(title:string):Promise<string>{
    return new Promise((v,c)=>{
      this.colorService.get().then(p=>{
          let ec = JSON.parse(localStorage.eventColor);
          title=title.toUpperCase().replace(/ /g,"").replace("CTD","").replace("TD","").replace("TP","").replace("LABO","").replace("CM","");
          if(title in ec){
            v(p.cal[ec[title]]);
          }else{
            let j = -1;
            let n = false;
            for(let i = 0; i < p.cal.length; i++){
              n = true;
              for(let t in ec){
                if(ec[t]==i){
                  n = false;
                }
              }
              if(n)j=i;
            }
            if(j == -1) ec[title] = Math.floor(p.cal.length*Math.random());
            else ec[title] = j;
            localStorage.eventColor=JSON.stringify(ec);
            v(p.cal[ec[title]]);
          }
      });
    });
  }
  clear(){
    localStorage.eventColor=JSON.stringify({});
  }
}
