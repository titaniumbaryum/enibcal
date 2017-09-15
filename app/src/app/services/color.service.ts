import { Injectable } from '@angular/core';
import { PaletteService } from './palette.service'
import { Palette } from '../structures/palette';

@Injectable()
export class ColorService {

  constructor(
    private paletteService:PaletteService
  ) {
  }
  get():Promise<Palette>{
    return new Promise<Palette>((v,c)=>{
      if(typeof localStorage.colorSwatch !== "undefined"){
        let p:Palette = JSON.parse(localStorage.colorSwatch);
        v(p);
      }else{
        this.paletteService.get().then(p=>{
          localStorage.colorSwatch = JSON.stringify(p["capuchino"]);
          let pa:Palette = JSON.parse(localStorage.colorSwatch);
          v(pa);
        });
      }
    });

  }
  set(palette:any){
    localStorage.colorSwatch = JSON.stringify(palette);
  }
}
