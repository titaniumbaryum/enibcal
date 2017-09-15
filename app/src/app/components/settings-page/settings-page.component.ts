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
}
