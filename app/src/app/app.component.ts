import { Component,ViewChildren } from '@angular/core';
import { Event } from "./structures/event"
import { CalendarService } from "./services/calendar.service"
import { PaletteService } from "./services/palette.service"
import { ColorService } from "./services/color.service"
import { SettingsService } from "./services/settings.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren('menu') menu;
  serviceworker = true;
  dark:boolean;
  constructor(
    private calendarService:CalendarService,
    private paletteService:PaletteService,
    private colorService:ColorService,
    private settingsService:SettingsService,
  ){
    let that = this;
    document.body.className=this.settingsService.get("darkMode")?"dark":"light";
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        if(that.serviceworker) navigator.serviceWorker.register('/sw.js').then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
    let today = new Date();
    let todayString = today.toLocaleDateString();
    Notification.requestPermission( function(status) {
      console.log(status);
      if(status == "granted" && typeof that.settingsService.user != "undefined"){
        that.calendarService.get().then(h=>{
          let hn=[];
          for(let i=0;i<h.length;i++){
            if(h[i].begin.toLocaleDateString() == todayString){
              hn.push(h[i]);
            }
          }
          setInterval(function(){
            let now = new Date().getTime();
            for(let i=0;i<hn.length;i++){
              if(hn[i].begin.getTime() > now - 1000*60*15 && hn[i].begin.getTime() < now + 1000*60*15 ){
                let n = new Notification(hn[i].title, {body: hn[i].begin.toLocaleTimeString()+"\n"+hn[i].location});
                hn.splice(i,1);
                return;
              }
            }
          },10000);
        })
      }
    });
  }
}
