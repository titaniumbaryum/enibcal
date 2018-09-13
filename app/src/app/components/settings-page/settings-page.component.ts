import { Component, OnInit } from '@angular/core';
import { SettingsService } from "../../services/settings.service"
import { StreamService } from "../../services/stream.service"
import { PaletteService } from "../../services/palette.service"
import { ColorService } from "../../services/color.service"
import { EventColorService } from '../../services/event-color.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  streams;
  palettes;
  curPalette;
  darkMode:boolean;
  flatMode:boolean;
  constructor(
    private settingsService:SettingsService,
    private streamService:StreamService,
    private paletteService:PaletteService,
    private colorService:ColorService,
    private eventColorService:EventColorService
  ) { }

  ngOnInit() {
    this.streams=this.streamService.get();
    this.colorService.get().then(p=>this.curPalette=p);
    this.paletteService.get().then(p=>{
      let e=[];
      for(let i in p){
        e.push(p[i]);
      }
      this.palettes=e;
    });
    if(!this.settingsService.exists("darkMode"))this.settingsService.set("darkMode",false);
    if(!this.settingsService.exists("flatMode"))this.settingsService.set("flatMode",true);
    this.darkMode = this.settingsService.get("darkMode");
    this.flatMode = this.settingsService.get("flatMode");
  }
  addStream(){
    let p = prompt("nom du stream");
    if(typeof p !== "undefined" && p!=="" && p !== null){
      this.streamService.add(p.toLowerCase());
      this.streams=this.streamService.get();
    }
  }
  removeStream(stream){
    this.streamService.remove(stream);
    this.streams=this.streamService.get();
  }
  setPalette(palette){
    this.colorService.set(palette);
    this.colorService.get().then(p=>this.curPalette=p);
    this.eventColorService.clear();
  }
  changeUser(){
    this.settingsService.user = this.settingsService.user.replace("@enib.fr","")
    this.settingsService.set('user',this.settingsService.user);
  }
  updateSettings(){
    let that=this;
    setTimeout(()=>{
      that.settingsService.set("darkMode",that.darkMode);
      that.settingsService.set("flatMode",that.flatMode);
      document.body.className=this.settingsService.get("darkMode")?"dark":"light";
    },10);
  }
}
