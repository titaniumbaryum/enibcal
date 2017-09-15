import { Component,ViewChildren } from '@angular/core';
import { Event } from "./structures/event"
import { CalendarService } from "./services/calendar.service"
import { PaletteService } from "./services/palette.service"
import { ColorService } from "./services/color.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren('menu') menu;
  title = 'app';

  constructor(
    private calendarService:CalendarService,
    private paletteService:PaletteService,
    private colorService:ColorService,
  ){
  }
}
