import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { CalendarService } from './services/calendar.service';
import { PaletteService } from './services/palette.service';
import { ColorService } from './services/color.service';
import { EventColorService } from './services/event-color.service';
import { SwipeService } from './services/swipe.service';
import { StreamService } from './services/stream.service';
import { HomeworkService } from './services/homework.service';
import { SettingsService } from './services/settings.service';

import { AppComponent } from './app.component';
import { CalendarColComponent } from './components/calendar-col/calendar-col.component';
import { CalendarEventComponent } from './components/calendar-event/calendar-event.component';
import { CalendarHoursComponent } from './components/calendar-hours/calendar-hours.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MyCalendarPageComponent } from './components/my-calendar-page/my-calendar-page.component';
import { OtherCalendarPageComponent } from './components/other-calendar-page/other-calendar-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeworkPageComponent } from './components/homework-page/homework-page.component';
import { HomeworkComponent } from './components/homework/homework.component';
import { HomeworkEditComponent } from './components/homework-edit/homework-edit.component';

const appRoutes: Routes = [
  { path: 'homeworks', component: HomeworkPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'my-calendar', component: MyCalendarPageComponent },
  { path: 'calendar/:id',      component: OtherCalendarPageComponent },
  { path: '',
    redirectTo: '/my-calendar',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CalendarColComponent,
    CalendarEventComponent,
    CalendarHoursComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    MenuComponent,
    MyCalendarPageComponent,
    OtherCalendarPageComponent,
    SettingsPageComponent,
    ErrorPageComponent,
    HomeworkPageComponent,
    HomeworkComponent,
    HomeworkEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    FormsModule
  ],
  providers: [
    CalendarService,
    PaletteService,
    ColorService,
    EventColorService,
    SwipeService,
    StreamService,
    HomeworkService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
