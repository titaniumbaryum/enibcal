webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n  <nav style=\"background:#2B2B2B\">\n    <div class=\"nav-wrapper\">\n      <a class=\"left brand-logo\" style=\"padding:0 20px;\">enibcal V3.0</a>\n      <ul class=\"right\">\n        <li><a (click)=\"menu.open()\"><i class=\"material-icons\">menu</i></a></li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<div class=\"container z-depth-4\" style=\"background:#080808;min-height:calc(100vh - 64px);width:100%\">\n<router-outlet></router-outlet>\n</div>\n<app-menu #menu></app-menu>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_palette_service__ = __webpack_require__("../../../../../src/app/services/palette.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_color_service__ = __webpack_require__("../../../../../src/app/services/color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(calendarService, paletteService, colorService, settingsService) {
        this.calendarService = calendarService;
        this.paletteService = paletteService;
        this.colorService = colorService;
        this.settingsService = settingsService;
        this.title = 'app';
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js').then(function (registration) {
                    // Registration was successful
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function (err) {
                    // registration failed :(
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }
        var that = this;
        var today = new Date();
        var todayString = today.toLocaleDateString();
        Notification.requestPermission(function (status) {
            console.log(status);
            if (status == "granted" && typeof that.settingsService.user != "undefined") {
                that.calendarService.get().then(function (h) {
                    var hn = [];
                    for (var i = 0; i < h.length; i++) {
                        if (h[i].begin.toLocaleDateString() == todayString) {
                            hn.push(h[i]);
                        }
                    }
                    setInterval(function () {
                        var now = new Date().getTime();
                        for (var i = 0; i < hn.length; i++) {
                            if (hn[i].begin.getTime() > now - 1000 * 60 * 15 && hn[i].begin.getTime() < now + 1000 * 60 * 15) {
                                var n = new Notification(hn[i].title, { body: hn[i].begin.toLocaleTimeString() + "\n" + hn[i].location });
                                hn.splice(i, 1);
                                return;
                            }
                        }
                    }, 10000);
                });
            }
        });
    }
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChildren */])('menu'),
    __metadata("design:type", Object)
], AppComponent.prototype, "menu", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_palette_service__["a" /* PaletteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_palette_service__["a" /* PaletteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_color_service__["a" /* ColorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_color_service__["a" /* ColorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_palette_service__ = __webpack_require__("../../../../../src/app/services/palette.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_color_service__ = __webpack_require__("../../../../../src/app/services/color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_event_color_service__ = __webpack_require__("../../../../../src/app/services/event-color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_swipe_service__ = __webpack_require__("../../../../../src/app/services/swipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_stream_service__ = __webpack_require__("../../../../../src/app/services/stream.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_homework_service__ = __webpack_require__("../../../../../src/app/services/homework.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_calendar_col_calendar_col_component__ = __webpack_require__("../../../../../src/app/components/calendar-col/calendar-col.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_calendar_event_calendar_event_component__ = __webpack_require__("../../../../../src/app/components/calendar-event/calendar-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_calendar_hours_calendar_hours_component__ = __webpack_require__("../../../../../src/app/components/calendar-hours/calendar-hours.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_calendar_header_calendar_header_component__ = __webpack_require__("../../../../../src/app/components/calendar-header/calendar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_my_calendar_page_my_calendar_page_component__ = __webpack_require__("../../../../../src/app/components/my-calendar-page/my-calendar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_other_calendar_page_other_calendar_page_component__ = __webpack_require__("../../../../../src/app/components/other-calendar-page/other-calendar-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_settings_page_settings_page_component__ = __webpack_require__("../../../../../src/app/components/settings-page/settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_error_page_error_page_component__ = __webpack_require__("../../../../../src/app/components/error-page/error-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_homework_page_homework_page_component__ = __webpack_require__("../../../../../src/app/components/homework-page/homework-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_homework_homework_component__ = __webpack_require__("../../../../../src/app/components/homework/homework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_homework_edit_homework_edit_component__ = __webpack_require__("../../../../../src/app/components/homework-edit/homework-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: 'homeworks', component: __WEBPACK_IMPORTED_MODULE_25__components_homework_page_homework_page_component__["a" /* HomeworkPageComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_23__components_settings_page_settings_page_component__["a" /* SettingsPageComponent */] },
    { path: 'my-calendar', component: __WEBPACK_IMPORTED_MODULE_21__components_my_calendar_page_my_calendar_page_component__["a" /* MyCalendarPageComponent */] },
    { path: 'calendar/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_other_calendar_page_other_calendar_page_component__["a" /* OtherCalendarPageComponent */] },
    { path: '',
        redirectTo: '/my-calendar',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_24__components_error_page_error_page_component__["a" /* ErrorPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_calendar_col_calendar_col_component__["a" /* CalendarColComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_calendar_event_calendar_event_component__["a" /* CalendarEventComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_calendar_hours_calendar_hours_component__["a" /* CalendarHoursComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_calendar_header_calendar_header_component__["a" /* CalendarHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_my_calendar_page_my_calendar_page_component__["a" /* MyCalendarPageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_other_calendar_page_other_calendar_page_component__["a" /* OtherCalendarPageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_settings_page_settings_page_component__["a" /* SettingsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_error_page_error_page_component__["a" /* ErrorPageComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_homework_page_homework_page_component__["a" /* HomeworkPageComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_homework_homework_component__["a" /* HomeworkComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_homework_edit_homework_edit_component__["a" /* HomeworkEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false }),
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_calendar_service__["a" /* CalendarService */],
            __WEBPACK_IMPORTED_MODULE_7__services_palette_service__["a" /* PaletteService */],
            __WEBPACK_IMPORTED_MODULE_8__services_color_service__["a" /* ColorService */],
            __WEBPACK_IMPORTED_MODULE_9__services_event_color_service__["a" /* EventColorService */],
            __WEBPACK_IMPORTED_MODULE_10__services_swipe_service__["a" /* SwipeService */],
            __WEBPACK_IMPORTED_MODULE_11__services_stream_service__["a" /* StreamService */],
            __WEBPACK_IMPORTED_MODULE_12__services_homework_service__["a" /* HomeworkService */],
            __WEBPACK_IMPORTED_MODULE_13__services_settings_service__["a" /* SettingsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/calendar-col/calendar-col.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nowLine{\r\n  position: absolute;\r\n  width:100%;\r\n  height:1px;\r\n  background: hsl(0, 100%, 35%);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar-col/calendar-col.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"events-wrapper\">\n  <div *ngFor=\"let event of events\">\n    <app-calendar-event [event]=\"event\" [compact]=\"compact\" (click)=\"details(event);\" *ngIf=\"isIn(event)\">\n    </app-calendar-event>\n    <div class=\"nowLine\" [style.top]=\"t2h(today)+'%'\" *ngIf=\"now\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar-col/calendar-col.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarColComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarColComponent = (function () {
    function CalendarColComponent() {
        this.now = false;
        this.today = new Date();
        this.begin = 8 * 60;
        this.end = 19 * 60;
    }
    CalendarColComponent.prototype.ngOnInit = function () {
        if (typeof this.compact == "undefined")
            this.compact = false;
        this.now = this.day.toLocaleDateString() == this.today.toLocaleDateString();
        var that = this;
        setInterval(function () {
            that.today = new Date();
        }, 1000 * 60);
    };
    CalendarColComponent.prototype.details = function (event) {
        alert(event.title + " " + event.location + "\n" +
            event.description.replace(/\\n/g, "\n") + "\n" +
            "de: " + event.begin.toLocaleTimeString() + "\n" +
            "à: " + event.end.toLocaleTimeString());
    };
    CalendarColComponent.prototype.isIn = function (event) {
        if (typeof this.day !== "undefined" && typeof event !== "undefined") {
            return (this.day.getDate() == event.begin.getDate()) &&
                (this.day.getMonth() == event.begin.getMonth()) &&
                (this.day.getFullYear() == event.begin.getFullYear());
        }
        else
            return false;
    };
    CalendarColComponent.prototype.t2h = function (time) {
        var rer = (time.getHours() * 60 + time.getMinutes() - this.begin) / (this.end - this.begin) * 100;
        return rer;
    };
    return CalendarColComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], CalendarColComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CalendarColComponent.prototype, "day", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CalendarColComponent.prototype, "compact", void 0);
CalendarColComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calendar-col',
        template: __webpack_require__("../../../../../src/app/components/calendar-col/calendar-col.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/calendar-col/calendar-col.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalendarColComponent);

//# sourceMappingURL=calendar-col.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/calendar-event/calendar-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calendar-event{\r\n  position:absolute;\r\n  background:rgba(255,255,255,0.15);\r\n  color:white;\r\n  border-radius:4px;\r\n  width:calc(100% - 4px);\r\n  margin-left:2px;\r\n  text-align:center;\r\n  border-top: solid 4px;\r\n}\r\n.compact{\r\n  position:relative;\r\n  margin-top:4px;\r\n  height:25px !important;\r\n}\r\n.calendar-event>div{\r\n  position: absolute;\r\n  width:100%;\r\n  top:50%;\r\n  -webkit-transform:translateY(-50%);\r\n          transform:translateY(-50%);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar-event/calendar-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-event z-depth-1\" [class.compact]=\"compact\" [style.borderColor]=\"color\" [style.top]=\"t2h(event.begin)+'%'\"  [style.height]=\"(t2h(event.end)-t2h(event.begin))+'%'\">\n  <div>\n    <b>{{event.title}}</b><br>\n    {{event.location}}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar-event/calendar-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structures_event__ = __webpack_require__("../../../../../src/app/structures/event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_color_service__ = __webpack_require__("../../../../../src/app/services/event-color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarEventComponent = (function () {
    function CalendarEventComponent(eventColorService) {
        this.eventColorService = eventColorService;
        this.begin = 8 * 60;
        this.end = 19 * 60;
    }
    CalendarEventComponent.prototype.ngOnInit = function () {
        var that = this;
        if (typeof this.compact == "undefined")
            this.compact = false;
        this.eventColorService.get(this.event.title).then(function (c) {
            that.color = "#" + c;
        });
    };
    CalendarEventComponent.prototype.t2h = function (time) {
        var rer = (time.getHours() * 60 + time.getMinutes() - this.begin) / (this.end - this.begin) * 100;
        return rer;
    };
    return CalendarEventComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__structures_event__["a" /* Event */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__structures_event__["a" /* Event */]) === "function" && _a || Object)
], CalendarEventComponent.prototype, "event", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CalendarEventComponent.prototype, "compact", void 0);
CalendarEventComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calendar-event',
        template: __webpack_require__("../../../../../src/app/components/calendar-event/calendar-event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/calendar-event/calendar-event.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_color_service__["a" /* EventColorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_event_color_service__["a" /* EventColorService */]) === "function" && _b || Object])
], CalendarEventComponent);

var _a, _b;
//# sourceMappingURL=calendar-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/calendar-header/calendar-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".h{\r\n  width:100%;\r\n  height:44px;\r\n  margin-bottom:6px;\r\n  position:relative;\r\n  background:#0E0E0E;\r\n}\r\n.center{\r\n  top:50%;\r\n  left:50%;\r\n  -webkit-transform:translate(-50%,-50%);\r\n          transform:translate(-50%,-50%);\r\n  position:absolute;\r\n}\r\n.arrow{\r\n  margin:0 20px;\r\n  margin-top:10px;\r\n}\r\n.change{\r\n  margin:0 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar-header/calendar-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"h z-depth-2\">\n  <div class=\"center\">\n    <div class=\"change left\" (click)=\"reloadFunction()\" *ngIf=\"reload\"><i class=\"material-icons\">file_download</i></div>\n    <div class=\"date left\" *ngIf=\"date\">{{now?(week?\"cette semaine\":\"aujourd'hui\"):date.toLocaleDateString()}}</div>\n    <div class=\"change left\" (click)=\"switch()\"><i class=\"material-icons\" *ngIf=\"!week\">view_week</i><i class=\"material-icons\" *ngIf=\"week\">view_day</i></div>\n  </div>\n  <div class=\"arrow left\" (click)=\"left()\"><i class=\"material-icons\">arrow_back</i></div>\n  <div class=\"arrow right\" (click)=\"right()\"><i class=\"material-icons\">arrow_forward</i></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar-header/calendar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarHeaderComponent = (function () {
    function CalendarHeaderComponent() {
        this.weekSwitch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.leftButton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.rightButton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.reloadButton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.today = new Date();
        this.now = false;
    }
    CalendarHeaderComponent.prototype.ngOnInit = function () {
    };
    CalendarHeaderComponent.prototype.ngOnChanges = function () {
        if (typeof this.date !== "undefined") {
            this.now = this.today.getFullYear() == this.date.getFullYear() &&
                this.today.getMonth() == this.date.getMonth();
            if (this.week) {
                this.now = this.now && this.today.getDate() - this.today.getDay() == this.date.getDate() - this.date.getDay();
            }
            else {
                this.now = this.now && this.today.getDate() == this.date.getDate();
            }
        }
    };
    CalendarHeaderComponent.prototype.switch = function () {
        this.weekSwitch.emit(!this.week);
    };
    CalendarHeaderComponent.prototype.left = function () {
        this.leftButton.emit(true);
    };
    CalendarHeaderComponent.prototype.right = function () {
        this.rightButton.emit(true);
    };
    CalendarHeaderComponent.prototype.reloadFunction = function () {
        this.reloadButton.emit(true);
    };
    return CalendarHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CalendarHeaderComponent.prototype, "date", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CalendarHeaderComponent.prototype, "week", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CalendarHeaderComponent.prototype, "reload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CalendarHeaderComponent.prototype, "weekSwitch", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], CalendarHeaderComponent.prototype, "leftButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], CalendarHeaderComponent.prototype, "rightButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], CalendarHeaderComponent.prototype, "reloadButton", void 0);
CalendarHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calendar-header',
        template: __webpack_require__("../../../../../src/app/components/calendar-header/calendar-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/calendar-header/calendar-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalendarHeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=calendar-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/calendar-hours/calendar-hours.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hours-wrapper{\r\n  position:relative;\r\n  height:100%;\r\n}\r\n.hour{\r\n  position:relative;\r\n  height:9.09%;\r\n  width:100%;\r\n}\r\n.hour:before,.hour:after{\r\n  position:absolute;\r\n  display:block;\r\n  content:\"\";\r\n  border-top:solid 1px #DE1B1B;\r\n  opacity:0.2;\r\n  width:33%;\r\n  top:0;\r\n}\r\n.hour:before{\r\n  left:0;\r\n}\r\n.hour:after{\r\n  right:0;\r\n}\r\n.hour>div{\r\n  position:absolute;\r\n  top:0;\r\n  left:50%;\r\n  -webkit-transform:translate(-50%,-50%);\r\n          transform:translate(-50%,-50%);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar-hours/calendar-hours.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hours-wrapper\">\n  <div class=\"hour\" *ngFor=\"let hour of hours\"><div>{{hour}}</div></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar-hours/calendar-hours.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarHoursComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarHoursComponent = (function () {
    function CalendarHoursComponent() {
        this.hours = [];
        for (var i = 8; i < 19; i++)
            this.hours.push(i);
    }
    CalendarHoursComponent.prototype.ngOnInit = function () {
    };
    return CalendarHoursComponent;
}());
CalendarHoursComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calendar-hours',
        template: __webpack_require__("../../../../../src/app/components/calendar-hours/calendar-hours.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/calendar-hours/calendar-hours.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalendarHoursComponent);

//# sourceMappingURL=calendar-hours.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fullCol{\r\n  position:relative;\r\n  float:left;\r\n  height:100%;\r\n  width:50%;\r\n}\r\n.outter{\r\n  position:relative;\r\n  width:100%;\r\n  overflow:hidden;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.outter:after{\r\n  position:relative;\r\n  content:\"\";\r\n  display:block;\r\n  width:100%;\r\n  padding-top:56.25%;\r\n  min-height:500px;\r\n  box-sizing:border-box;\r\n  pointer-events: none;\r\n}\r\n.inner{\r\n  position: absolute;\r\n  width:100%;\r\n  height:calc(100% - 50px);\r\n  bottom:0;\r\n  left:0;\r\n}\r\n.hours{\r\n  width:25%;\r\n}\r\n.day{\r\n  width:75%;\r\n}\r\n.week .hours{\r\n  width:23%;\r\n}\r\n.week .day{\r\n  width:11%;\r\n}\r\n.week .weekend{\r\n  width:11%;\r\n}\r\n@media screen and (max-width: 640px) {\r\n  .week .day{\r\n    width:25%;\r\n  }\r\n  .week .day{\r\n    width:15%;\r\n  }\r\n  .week .weekend{\r\n    width:50%;\r\n    height:auto;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outter\" [class.week]=\"week\" (touchstart)=\"swipeService.ts($event)\" (touchend)=\"swipeService.te($event)\">\n  <app-calendar-header [reload]=\"reload\" (reloadButton)=\"reloadFunction()\" [date]=\"days[0]\" [week]=\"week\" (weekSwitch)=\"weekSwitch($event)\" (leftButton)=\"left()\" (rightButton)=\"right()\"></app-calendar-header>\n  <div class=\"inner\">\n    <app-calendar-hours class=\"fullCol hours\"></app-calendar-hours>\n    <app-calendar-col [@flyInOut]=\"side\" [day]=\"eday\" [events]=\"events\" class=\"fullCol day\" [compact]=\"i>4 && window.innerWidth<640 && week\"  [class.weekend]=\"i>4\" *ngFor=\"let eday of days; let i = index\"></app-calendar-col>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_swipe_service__ = __webpack_require__("../../../../../src/app/services/swipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarComponent = (function () {
    function CalendarComponent(swipeService) {
        var _this = this;
        this.swipeService = swipeService;
        this.reloadButton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.side = "left";
        this.days = [];
        this.window = window;
        this.week = true;
        this.swipeService.setCallback(function (mod, arg) {
            if (arg > -Math.PI / 4 && arg < Math.PI / 4) {
                _this.left();
            }
            if (arg > 3 * Math.PI / 4 || arg < -3 * Math.PI / 4) {
                _this.right();
            }
        });
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent.prototype.ngOnChanges = function () {
        if (typeof this.to !== "undefined")
            clearTimeout(this.to);
        var that = this;
        this.days = [];
        this.to = setTimeout(function () {
            if (that.week) {
                for (var i = 1; i < 7; i++) {
                    var d = new Date(that.day);
                    d.setTime(d.getTime() + (i - d.getDay()) * 24 * 60 * 60 * 1000);
                    that.days.push(d);
                }
            }
            else {
                that.days.push(new Date(that.day));
            }
        }, 105);
    };
    CalendarComponent.prototype.left = function () {
        var that = this;
        var os = (this.week ? 7 : 1) * 24 * 60 * 60 * 1000;
        this.day.setTime(this.day.getTime() - os);
        this.day = new Date(this.day);
        this.side = "left";
        console.log(this.day);
        setTimeout(function () { that.ngOnChanges(); }, 0);
    };
    CalendarComponent.prototype.right = function () {
        var that = this;
        var os = (this.week ? 7 : 1) * 24 * 60 * 60 * 1000;
        this.day.setTime(this.day.getTime() + os);
        this.day = new Date(this.day);
        this.side = "right";
        console.log(this.day);
        setTimeout(function () { that.ngOnChanges(); }, 0);
    };
    CalendarComponent.prototype.weekSwitch = function (w) {
        this.week = w;
        this.ngOnChanges();
    };
    CalendarComponent.prototype.reloadFunction = function () {
        this.reloadButton.emit(true);
    };
    return CalendarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], CalendarComponent.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "reload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "day", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CalendarComponent.prototype, "reloadButton", void 0);
CalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calendar',
        template: __webpack_require__("../../../../../src/app/components/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/calendar/calendar.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('flyInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('left', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(0)', opacity: 1 })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('right', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(0)', opacity: 1 })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => left', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('left => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => right', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('right => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }))
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_swipe_service__["a" /* SwipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_swipe_service__["a" /* SwipeService */]) === "function" && _b || Object])
], CalendarComponent);

var _a, _b;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  error-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    return ErrorPageComponent;
}());
ErrorPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error-page',
        template: __webpack_require__("../../../../../src/app/components/error-page/error-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/error-page/error-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorPageComponent);

//# sourceMappingURL=error-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/homework-edit/homework-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homework-edit/homework-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s12 m6 l4\" style=\"padding:5px;box-sizing:border-box\" [hidden]=\"!isOpen\">\n  <div class=\"card\" style=\"background: rgba(255,255,255,0.1);\">\n    <div class=\"card-content\">\n      <i class=\"material-icons right\" (click)=\"close()\" style=\"margin-top:-10px;\">close</i>\n      <input type=\"text\" placeholder=\"titre\" [(ngModel)]=\"title\">\n      <div class=\"row\">\n        <div class=\"col s6\" *ngFor=\"let stream of streams\">\n          <input type=\"radio\" [id]=\"stream\" [value]=\"stream\" [(ngModel)]=\"selStream\" />\n          <label [for]=\"stream\">{{stream}}</label>\n        </div>\n        <div class=\"col s6\">\n          <input type=\"radio\" id=\"new\" value=\"new\" [(ngModel)]=\"selStream\" />\n          <label for=\"new\">autre</label>\n        </div>\n      </div>\n      <input type=\"text\" class=\"datepicker\" placeholder=\"fin\" [hidden]=\"noDate\" #date>\n      <div>\n        <input type=\"checkbox\" id=\"checkbox\" [(ngModel)]=\"noDate\">\n        <label for=\"checkbox\">infini</label>\n      </div>\n      <textarea placeholder=\"description\" class=\"materialize-textarea\" [(ngModel)]=\"description\"></textarea>\n      <button class=\"btn\" style=\"width:100%\" (click)=\"submit()\">Envoyer</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homework-edit/homework-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_homework_service__ = __webpack_require__("../../../../../src/app/services/homework.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stream_service__ = __webpack_require__("../../../../../src/app/services/stream.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeworkEditComponent = (function () {
    function HomeworkEditComponent(streamService, settingsService, homeworkService) {
        this.streamService = streamService;
        this.settingsService = settingsService;
        this.homeworkService = homeworkService;
        this.isOpen = false;
        this.submited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.noDate = false;
    }
    HomeworkEditComponent.prototype.ngOnInit = function () {
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: true // Close upon selecting a date,
        });
        this.streams = this.streamService.get();
    };
    HomeworkEditComponent.prototype.changeDate = function (event) {
        console.log(event);
    };
    HomeworkEditComponent.prototype.open = function (homework) {
        this.isOpen = true;
        if (typeof homework != "undefined") {
            this.selStream = homework.stream;
            this.title = homework.title;
            this.description = homework.description;
            if (homework.end.getFullYear() >= (new Date()).getFullYear() + 2) {
                this.date.nativeElement.value = "";
                this.noDate = true;
            }
            else {
                this.date.nativeElement.value = homework.end.toLocaleDateString();
                this.noDate = false;
            }
            this.toDelete = homework;
        }
    };
    HomeworkEditComponent.prototype.close = function () {
        this.isOpen = false;
        this.selStream = undefined;
        this.title = undefined;
        this.description = undefined;
        this.date.nativeElement.value = "";
        this.noDate = false;
        this.toDelete = undefined;
    };
    HomeworkEditComponent.prototype.submit = function () {
        var _this = this;
        function isSet(v) {
            return typeof v !== "undefined";
        }
        var ds = this.date.nativeElement.value;
        if (this.noDate || isNaN(new Date(ds).getTime())) {
            ds = new Date();
            ds.setFullYear(ds.getFullYear() + 2);
        }
        else {
            ds = new Date(ds);
        }
        if (this.selStream == "new") {
            this.selStream = prompt("dans quel flux voulez vous poster votre devoirs?");
            this.streams = this.streamService.add(this.selStream);
        }
        if (isSet(this.title) && isSet(this.selStream) && isSet(this.description) && isSet(ds)) {
            var h_1 = {
                stream: this.selStream,
                title: this.title,
                end: ds,
                description: this.description,
                author: this.settingsService.user,
                completers: []
            };
            this.submited.emit(h_1);
            var g_1 = this.toDelete;
            if (isSet(g_1))
                this.removed.emit(g_1);
            this.homeworkService.add(h_1).then(function (n) {
                if (isSet(g_1))
                    _this.homeworkService.remove(g_1);
                h_1.id = n;
            });
            this.close();
        }
    };
    return HomeworkEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("date"),
    __metadata("design:type", Object)
], HomeworkEditComponent.prototype, "date", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], HomeworkEditComponent.prototype, "submited", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], HomeworkEditComponent.prototype, "removed", void 0);
HomeworkEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homework-edit',
        template: __webpack_require__("../../../../../src/app/components/homework-edit/homework-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/homework-edit/homework-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_stream_service__["a" /* StreamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_stream_service__["a" /* StreamService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_homework_service__["a" /* HomeworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_homework_service__["a" /* HomeworkService */]) === "function" && _e || Object])
], HomeworkEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=homework-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/homework-page/homework-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homework-page/homework-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding:0 20px;box-sizing:border-box\">\n  <app-homework [homework]=\"homework\" *ngFor=\"let homework of homeworks\" (removed)=\"remove(homework)\" (modified)=\"modify(homework,editanchor)\"></app-homework>\n  <app-homework-edit #edit (submited)=\"homeworks.push($event)\" (removed)=\"remove($event)\"></app-homework-edit>\n  <div class=\"col s12 m6 l4\" #editanchor></div>\n</div>\n<div class=\"fixed-action-btn\">\n  <a class=\"btn-floating btn-large red\" style=\"background-color: #DE1B1B !important;\" (click)=\"openEdit(editanchor)\">\n    <i class=\"large material-icons\">mode_comment</i>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homework-page/homework-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_homework_service__ = __webpack_require__("../../../../../src/app/services/homework.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeworkPageComponent = (function () {
    function HomeworkPageComponent(homeworkService) {
        this.homeworkService = homeworkService;
        this.homeworks = [];
    }
    HomeworkPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeworkService.get().then(function (h) { return _this.homeworks = h; });
    };
    HomeworkPageComponent.prototype.remove = function (homework) {
        this.homeworks.splice(this.homeworks.indexOf(homework), 1);
    };
    HomeworkPageComponent.prototype.modify = function (homework, e) {
        this.edit.open(homework);
        setTimeout(function () { e.scrollIntoView(true); }, 100);
    };
    HomeworkPageComponent.prototype.openEdit = function (e) {
        this.edit.open();
        setTimeout(function () { e.scrollIntoView(true); }, 100);
    };
    return HomeworkPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('edit'),
    __metadata("design:type", Object)
], HomeworkPageComponent.prototype, "edit", void 0);
HomeworkPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homework-page',
        template: __webpack_require__("../../../../../src/app/components/homework-page/homework-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/homework-page/homework-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_homework_service__["a" /* HomeworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_homework_service__["a" /* HomeworkService */]) === "function" && _a || Object])
], HomeworkPageComponent);

var _a;
//# sourceMappingURL=homework-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/homework/homework.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-button{\r\n  line-height: 0.01;\r\n  -webkit-transform: translateY(6px);\r\n          transform: translateY(6px);\r\n}\r\n.card-content{\r\n}\r\n.scroller{\r\n  height:100px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  word-wrap: break-word;\r\n}\r\n.scroller::-webkit-scrollbar{\r\n  width:3px;\r\n}\r\n.scroller::-webkit-scrollbar-track{\r\n  background:rgba(0,0,0,0.05);\r\n}\r\n.scroller::-webkit-scrollbar-thumb{\r\n  background:rgba(255,255,255,0.1);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homework/homework.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s12 m6 l4\" style=\"padding:5px;box-sizing:border-box\" [hidden]=\"!homework\">\n  <div class=\"card\" style=\"background:rgba(255,255,255,0.1)\" [style.opacity]=\"homework.completers.indexOf(settingsService.user)>-1?0.3:1\">\n    <div class=\"card-content\" (click)=\"folded=!folded\" #cardcontent>\n      <span class=\"card-title\">{{homework.title}}</span>\n      <div class=\"scroller\">\n        <p>Par {{homework.author}}. Dans {{homework.stream}}<br><span [hidden]=\"homework.end.getFullYear()>=today.getFullYear()+2\">Pour le {{homework.end.toLocaleDateString()}}</span></p>\n        <p>{{homework.description}}</p>\n      </div>\n    </div>\n    <div class=\"card-action\">\n      <a [hidden]=\"homework.completers.indexOf(settingsService.user)>-1 || !(homework.id)\" (click)=\"complete()\">terminer</a>\n      <a [hidden]=\"homework.completers.indexOf(settingsService.user)==-1 || !(homework.id)\"  (click)=\"uncomplete()\">terminé</a>\n      <a [hidden]=\"homework.id\">en upload</a>\n      <a [hidden]=\"homework.author != settingsService.user\" (click)=\"modifiy()\">modifier</a>\n      <a [hidden]=\"homework.author != settingsService.user\" (click)=\"remove()\"><i class=\"material-icons icon-button\">close</i></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homework/homework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structures_homework__ = __webpack_require__("../../../../../src/app/structures/homework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_homework_service__ = __webpack_require__("../../../../../src/app/services/homework.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeworkComponent = (function () {
    function HomeworkComponent(settingsService, homeworkService) {
        this.settingsService = settingsService;
        this.homeworkService = homeworkService;
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.modified = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.folded = true;
        this.today = new Date();
        this.charCount = 40;
    }
    HomeworkComponent.prototype.ngOnInit = function () {
        this.charCount = Math.round(this.cardcontent.nativeElement.offsetWidth / 4 - 3);
    };
    HomeworkComponent.prototype.complete = function () {
        var _this = this;
        this.homeworkService.complete(this.homework)
            .then(function (b) { return _this.homework.completers.push(_this.settingsService.user); });
    };
    HomeworkComponent.prototype.uncomplete = function () {
        var _this = this;
        this.homeworkService.uncomplete(this.homework)
            .then(function (b) { return _this.homework.completers.splice(_this.homework.completers.indexOf(_this.settingsService.user), 1); });
    };
    HomeworkComponent.prototype.remove = function () {
        var _this = this;
        this.homeworkService.remove(this.homework).then(function (i) { return _this.removed.emit(true); });
    };
    HomeworkComponent.prototype.modifiy = function () {
        this.modified.emit(true);
    };
    return HomeworkComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__structures_homework__["a" /* Homework */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__structures_homework__["a" /* Homework */]) === "function" && _a || Object)
], HomeworkComponent.prototype, "homework", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], HomeworkComponent.prototype, "removed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], HomeworkComponent.prototype, "modified", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("cardcontent"),
    __metadata("design:type", Object)
], HomeworkComponent.prototype, "cardcontent", void 0);
HomeworkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homework',
        template: __webpack_require__("../../../../../src/app/components/homework/homework.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/homework/homework.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_homework_service__["a" /* HomeworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_homework_service__["a" /* HomeworkService */]) === "function" && _e || Object])
], HomeworkComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=homework.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-backdrop{\r\n  position: fixed;\r\n  z-index:1000;\r\n  top:0;\r\n  left:0;\r\n  width:100vw;\r\n  height:100vh;\r\n  background:rgba(0,0,0,0.25);\r\n}\r\n.m-card{\r\n  position: absolute;\r\n  top:50%;\r\n  left:50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  background:rgba(0,0,0,0.75);\r\n  color:white;\r\n  font-size:24px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-backdrop\" *ngIf=\"isOpen\" (click)=\"close()\">\n  <div class=\"m-card card z-depth-4\">\n    <div class=\"card-content\">\n      <div routerLink=\"/my-calendar\"><i class=\"material-icons\">view_list</i> mon EDT</div>\n      <div (click)=\"ocal()\"><i class=\"material-icons\">people</i> autres EDT</div>\n      <div routerLink=\"/homeworks\"><i class=\"material-icons\">comment</i> devoirs</div>\n      <div routerLink=\"/settings\"><i class=\"material-icons\">settings</i> params</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
        this.isOpen = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.open = function () {
        this.isOpen = true;
    };
    MenuComponent.prototype.close = function () {
        this.isOpen = false;
    };
    MenuComponent.prototype.ocal = function () {
        var id = prompt("id ENIB:");
        if (typeof id !== "undefined" && id !== "" && id !== null) {
            this.router.navigateByUrl("refresh");
            this.router.navigateByUrl("calendar/" + id);
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/my-calendar-page/my-calendar-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-calendar-page/my-calendar-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-calendar [events]=\"events\" [day]=\"today\" [reload]=\"true\" (reloadButton)=\"reload()\"></app-calendar>\n"

/***/ }),

/***/ "../../../../../src/app/components/my-calendar-page/my-calendar-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCalendarPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyCalendarPageComponent = (function () {
    function MyCalendarPageComponent(calendarService, router, settingsService) {
        var _this = this;
        this.calendarService = calendarService;
        this.router = router;
        this.settingsService = settingsService;
        this.today = new Date();
        if (typeof this.settingsService.user !== "undefined")
            calendarService.get().then(function (e) { return _this.events = e; });
        else
            this.router.navigateByUrl("/settings");
    }
    MyCalendarPageComponent.prototype.ngOnInit = function () {
    };
    MyCalendarPageComponent.prototype.reload = function () {
        var _this = this;
        this.calendarService.update().then(function (b) {
            _this.calendarService.get().then(function (e) {
                _this.events = e;
            });
        });
    };
    return MyCalendarPageComponent;
}());
MyCalendarPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-calendar-page',
        template: __webpack_require__("../../../../../src/app/components/my-calendar-page/my-calendar-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/my-calendar-page/my-calendar-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_calendar_service__["a" /* CalendarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _c || Object])
], MyCalendarPageComponent);

var _a, _b, _c;
//# sourceMappingURL=my-calendar-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/other-calendar-page/other-calendar-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/other-calendar-page/other-calendar-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-calendar [events]=\"events\" [day]=\"today\"></app-calendar>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/other-calendar-page/other-calendar-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherCalendarPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherCalendarPageComponent = (function () {
    function OtherCalendarPageComponent(calendarService, route, router) {
        this.calendarService = calendarService;
        this.route = route;
        this.router = router;
        this.today = new Date();
    }
    OtherCalendarPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.calendarService.getFor(this.route.snapshot.paramMap.get('id')).then(function (e) {
            _this.events = e;
            console.log(e);
        });
    };
    return OtherCalendarPageComponent;
}());
OtherCalendarPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-other-calendar-page',
        template: __webpack_require__("../../../../../src/app/components/other-calendar-page/other-calendar-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/other-calendar-page/other-calendar-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OtherCalendarPageComponent);

var _a, _b, _c;
//# sourceMappingURL=other-calendar-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings-page/settings-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flux{\r\n  background: rgba(255,255,255,0.1);\r\n  padding:10px;\r\n  margin-bottom:4px;\r\n}\r\n.palette{\r\n  position:relative;\r\n  margin-bottom:15px;\r\n}\r\n.palette:after{\r\n  position:relative;\r\n  display:block;\r\n  content:\"\";\r\n  width:100%;\r\n  clear:both;\r\n}\r\n.palette-title{\r\n  position:absolute;\r\n  top:50%;\r\n  left:50%;\r\n  -webkit-transform:translate(-50%,-50%);\r\n          transform:translate(-50%,-50%);\r\n  font-weight: bold;\r\n}\r\n.color{\r\n  position:relative;\r\n  float:left;\r\n  width:calc(100% / 6);\r\n  height:25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings-page/settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding:10px 20px\">\n  <div class=\"col s12\">\n    <div class=\"card\" style=\"background: rgba(255,255,255,0.1);\">\n      <div class=\"card-content\">\n        <h3>ID ENIB</h3>\n        <input [(ngModel)]=\"settingsService.user\" (change)=\"changeUser();\">\n        <h3>Flux</h3>\n        <p>les groupes que vous voulez lire ex: \"S1A-A\", \"MDD thierry jean\", ou \"cafet\"</p>\n        <div class=\"flux\" *ngFor=\"let stream of streams\">{{stream}}<div class=\"right\"><i class=\"material-icons\" (click)=\"removeStream(stream)\">remove_circle</i></div></div>\n        <div class=\"flux\" (click)=\"addStream()\">ajouter un flux<div class=\"right\"><i class=\"material-icons\">add_circle</i></div></div>\n        <h3>Themes</h3>\n        <div class=\"palette\" (click)=\"setPalette(palette)\" *ngFor=\"let palette of palettes\">\n          <div class=\"color\" [style.background]=\"'#'+color\" *ngFor=\"let color of palette.hud\"></div>\n          <div class=\"palette-title\">{{palette.name}}{{palette.name==curPalette.name?\" (actuel)\":\"\"}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/settings-page/settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stream_service__ = __webpack_require__("../../../../../src/app/services/stream.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_palette_service__ = __webpack_require__("../../../../../src/app/services/palette.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_color_service__ = __webpack_require__("../../../../../src/app/services/color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_color_service__ = __webpack_require__("../../../../../src/app/services/event-color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsPageComponent = (function () {
    function SettingsPageComponent(settingsService, streamService, paletteService, colorService, eventColorService) {
        this.settingsService = settingsService;
        this.streamService = streamService;
        this.paletteService = paletteService;
        this.colorService = colorService;
        this.eventColorService = eventColorService;
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.streams = this.streamService.get();
        this.colorService.get().then(function (p) { return _this.curPalette = p; });
        this.paletteService.get().then(function (p) {
            var e = [];
            for (var i in p) {
                e.push(p[i]);
            }
            _this.palettes = e;
        });
    };
    SettingsPageComponent.prototype.addStream = function () {
        var p = prompt("nom du stream");
        if (typeof p !== "undefined" && p !== "" && p !== null) {
            this.streamService.add(p.toLowerCase());
            this.streams = this.streamService.get();
        }
    };
    SettingsPageComponent.prototype.removeStream = function (stream) {
        this.streamService.remove(stream);
        this.streams = this.streamService.get();
    };
    SettingsPageComponent.prototype.setPalette = function (palette) {
        var _this = this;
        this.colorService.set(palette);
        this.colorService.get().then(function (p) { return _this.curPalette = p; });
        this.eventColorService.clear();
    };
    SettingsPageComponent.prototype.changeUser = function () {
        this.settingsService.user = this.settingsService.user.replace("@enib.fr", "");
        this.settingsService.set('user', this.settingsService.user);
    };
    return SettingsPageComponent;
}());
SettingsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings-page',
        template: __webpack_require__("../../../../../src/app/components/settings-page/settings-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/settings-page/settings-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_stream_service__["a" /* StreamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_stream_service__["a" /* StreamService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_palette_service__["a" /* PaletteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_palette_service__["a" /* PaletteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_color_service__["a" /* ColorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_color_service__["a" /* ColorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_color_service__["a" /* EventColorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_event_color_service__["a" /* EventColorService */]) === "function" && _e || Object])
], SettingsPageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=settings-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarService = (function () {
    function CalendarService(settingsService) {
        this.settingsService = settingsService;
    }
    CalendarService.prototype.get = function () {
        var _this = this;
        return new Promise(function (v, c) {
            if (typeof localStorage.calendar !== "undefined") {
                v(_this.reparse(localStorage.calendar));
            }
            else {
                _this.update().then(function (b) { return v(_this.reparse(localStorage.calendar)); });
            }
        });
    };
    CalendarService.prototype.update = function () {
        var _this = this;
        var that = this;
        return new Promise(function (v, c) {
            that.getFor(_this.settingsService.user).then(function (e) {
                localStorage.calendar = JSON.stringify(e);
                v(true);
            });
        });
    };
    CalendarService.prototype.reparse = function (peventss) {
        var pevents = JSON.parse(peventss);
        var events = [];
        for (var _i = 0, pevents_1 = pevents; _i < pevents_1.length; _i++) {
            var pevent = pevents_1[_i];
            events.push({
                begin: new Date(pevent.begin),
                end: new Date(pevent.end),
                location: pevent.location,
                title: pevent.title,
                description: pevent.description,
            });
        }
        return events;
    };
    CalendarService.prototype.parse = function (peventss) {
        var pevents = JSON.parse(peventss);
        var events = [];
        for (var _i = 0, pevents_2 = pevents; _i < pevents_2.length; _i++) {
            var pevent = pevents_2[_i];
            events.push({
                begin: new Date(pevent.DTSTART),
                end: new Date(pevent.DTEND),
                location: pevent.LOCATION,
                title: pevent.SUMMARY,
                description: pevent.DESCRIPTION,
            });
        }
        return events;
    };
    CalendarService.prototype.getFor = function (user) {
        var _this = this;
        return new Promise(function (v, c) {
            getCal(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host + 'proxy', user, function (events) {
                v(_this.parse(JSON.stringify(events)));
            });
        });
    };
    return CalendarService;
}());
CalendarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], CalendarService);

var _a;
//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/color.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__palette_service__ = __webpack_require__("../../../../../src/app/services/palette.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorService = (function () {
    function ColorService(paletteService) {
        this.paletteService = paletteService;
    }
    ColorService.prototype.get = function () {
        var _this = this;
        return new Promise(function (v, c) {
            if (typeof localStorage.colorSwatch !== "undefined") {
                var p = JSON.parse(localStorage.colorSwatch);
                v(p);
            }
            else {
                _this.paletteService.get().then(function (p) {
                    localStorage.colorSwatch = JSON.stringify(p["capuchino"]);
                    var pa = JSON.parse(localStorage.colorSwatch);
                    v(pa);
                });
            }
        });
    };
    ColorService.prototype.set = function (palette) {
        localStorage.colorSwatch = JSON.stringify(palette);
    };
    return ColorService;
}());
ColorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__palette_service__["a" /* PaletteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__palette_service__["a" /* PaletteService */]) === "function" && _a || Object])
], ColorService);

var _a;
//# sourceMappingURL=color.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/event-color.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventColorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_service__ = __webpack_require__("../../../../../src/app/services/color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventColorService = (function () {
    function EventColorService(colorService) {
        this.colorService = colorService;
        if (typeof localStorage.eventColor == "undefined") {
            localStorage.eventColor = JSON.stringify({});
        }
    }
    EventColorService.prototype.get = function (title) {
        var _this = this;
        return new Promise(function (v, c) {
            _this.colorService.get().then(function (p) {
                var ec = JSON.parse(localStorage.eventColor);
                title = title.replace("CTD ", "").replace("TP ", "").replace("Labo ", "");
                if (title in ec) {
                    v(p.cal[ec[title]]);
                }
                else {
                    var j = -1;
                    var n = false;
                    for (var i = 0; i < p.cal.length; i++) {
                        n = true;
                        for (var t in ec) {
                            if (ec[t] == i) {
                                n = false;
                            }
                        }
                        if (n)
                            j = i;
                    }
                    if (j == -1)
                        ec[title] = Math.floor(p.cal.length * Math.random());
                    else
                        ec[title] = j;
                    localStorage.eventColor = JSON.stringify(ec);
                    v(p.cal[ec[title]]);
                }
            });
        });
    };
    EventColorService.prototype.clear = function () {
        localStorage.eventColor = JSON.stringify({});
    };
    return EventColorService;
}());
EventColorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__color_service__["a" /* ColorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__color_service__["a" /* ColorService */]) === "function" && _a || Object])
], EventColorService);

var _a;
//# sourceMappingURL=event-color.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/homework.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream_service__ = __webpack_require__("../../../../../src/app/services/stream.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeworkService = (function () {
    function HomeworkService(streamService, http, settingsService) {
        this.streamService = streamService;
        this.http = http;
        this.settingsService = settingsService;
    }
    HomeworkService.prototype.get = function () {
        var _this = this;
        return new Promise(function (v, c) {
            var streams = _this.streamService.get();
            var ended = 0;
            var homeworks = [];
            if (streams.length == 0) {
                v(homeworks);
            }
            for (var _i = 0, streams_1 = streams; _i < streams_1.length; _i++) {
                var stream = streams_1[_i];
                ended++;
                _this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].host + "api/homeworks/get?stream=" + stream).toPromise()
                    .then(function (response) {
                    var jdata = response.json();
                    for (var _i = 0, jdata_1 = jdata; _i < jdata_1.length; _i++) {
                        var h = jdata_1[_i];
                        homeworks.push({
                            id: h.id,
                            stream: h.stream,
                            end: new Date(h.end),
                            title: h.title,
                            author: h.author,
                            description: h.description,
                            completers: typeof h.completers == "undefined" ? [] : h.completers,
                        });
                    }
                    ended--;
                    if (ended == 0) {
                        homeworks.sort(compareH);
                        v(homeworks);
                    }
                })
                    .catch(_this.handleError);
            }
        });
    };
    HomeworkService.prototype.complete = function (homework) {
        var _this = this;
        return new Promise(function (v, c) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].host + "api/homeworks/complete?id=" + homework.id + "&user=" + _this.settingsService.user).toPromise()
                .then(function (response) {
                v(true);
            })
                .catch(_this.handleError);
        });
    };
    HomeworkService.prototype.uncomplete = function (homework) {
        var _this = this;
        return new Promise(function (v, c) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].host + "api/homeworks/uncomplete?id=" + homework.id + "&user=" + _this.settingsService.user).toPromise()
                .then(function (response) {
                v(true);
            })
                .catch(_this.handleError);
        });
    };
    HomeworkService.prototype.add = function (homework) {
        var _this = this;
        return new Promise(function (v, c) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].host + "api/homeworks/add", {
                params: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpParams */]()
                    .set('stream', homework.stream)
                    .set('title', homework.title)
                    .set('end', homework.end.getTime().toString())
                    .set('description', homework.description)
                    .set('author', homework.author)
            }).toPromise()
                .then(function (response) {
                var d = response.json();
                if (d.lenght > 0)
                    v(d[0].id);
                v(-1);
            })
                .catch(_this.handleError);
        });
    };
    HomeworkService.prototype.remove = function (homework) {
        var _this = this;
        return new Promise(function (v, c) {
            if (typeof homework.id != "undefined") {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].host + "api/homeworks/remove?id=" + homework.id).toPromise()
                    .then(function (response) {
                    console.log("rem");
                    var d = response.json();
                    if (d.lenght > 0)
                        v(d[0].id);
                    v(-1);
                })
                    .catch(_this.handleError);
            }
            else
                v(-1);
        });
    };
    HomeworkService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HomeworkService;
}());
HomeworkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__stream_service__["a" /* StreamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__stream_service__["a" /* StreamService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__settings_service__["a" /* SettingsService */]) === "function" && _c || Object])
], HomeworkService);

function compareH(a, b) {
    return a.end.getTime() - b.end.getTime();
}
var _a, _b, _c;
//# sourceMappingURL=homework.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/palette.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaletteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaletteService = (function () {
    function PaletteService(http) {
        this.http = http;
    }
    PaletteService.prototype.get = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host + "api/palette").toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PaletteService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PaletteService;
}());
PaletteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PaletteService);

var _a;
//# sourceMappingURL=palette.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        this.user = localStorage.user;
    }
    SettingsService.prototype.set = function (id, val) {
        if (typeof val == "string")
            localStorage[id] = val;
        else
            localStorage[id] = JSON.stringify(val);
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/stream.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StreamService = (function () {
    function StreamService() {
        if (typeof localStorage.streams == "undefined")
            localStorage.streams = JSON.stringify([]);
    }
    StreamService.prototype.get = function () {
        return JSON.parse(localStorage.streams);
    };
    StreamService.prototype.add = function (id) {
        var streams = JSON.parse(localStorage.streams);
        streams.push(id);
        localStorage.streams = JSON.stringify(streams);
    };
    StreamService.prototype.remove = function (id) {
        var streams = JSON.parse(localStorage.streams);
        if (streams.indexOf(id) == -1)
            return;
        streams.splice(streams.indexOf(id), 1);
        localStorage.streams = JSON.stringify(streams);
    };
    return StreamService;
}());
StreamService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StreamService);

//# sourceMappingURL=stream.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/swipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwipeService = (function () {
    function SwipeService() {
        this.start = [0, 0];
        this.minTravel = 35;
    }
    SwipeService.prototype.setCallback = function (c) {
        this.callback = c;
    };
    SwipeService.prototype.ts = function (event) {
        this.start = [event.changedTouches[0].screenX, event.changedTouches[0].screenY];
    };
    SwipeService.prototype.te = function (event) {
        var end = [event.changedTouches[0].screenX, event.changedTouches[0].screenY];
        var delta = [end[0] - this.start[0], end[1] - this.start[1]];
        var mod = Math.sqrt(Math.pow(delta[0], 2) + Math.pow(delta[1], 2));
        var arg = Math.atan2(-delta[1], delta[0]);
        if (mod > this.minTravel)
            this.callback(mod, arg);
    };
    return SwipeService;
}());
SwipeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SwipeService);

//# sourceMappingURL=swipe.service.js.map

/***/ }),

/***/ "../../../../../src/app/structures/event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
    }
    return Event;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ "../../../../../src/app/structures/homework.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Homework; });
var Homework = (function () {
    function Homework() {
    }
    return Homework;
}());

//# sourceMappingURL=homework.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    host: "https://enibcal.titouan.eu/" /*"http://localhost:4242/"*/
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map