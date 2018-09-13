import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Homework } from "../../structures/homework"
import { SettingsService } from "../../services/settings.service"
import { HomeworkService } from "../../services/homework.service"

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  @Input() homework:Homework;
  @Output() removed:EventEmitter<boolean> = new EventEmitter();
  @Output() modified:EventEmitter<boolean> = new EventEmitter();
  @ViewChild("cardcontent") cardcontent;
  folded = true;
  today:Date = new Date();
  charCount:number = 40;
  constructor(
    private settingsService:SettingsService,
    private homeworkService:HomeworkService
  ) { }

  ngOnInit() {
    this.charCount = Math.round(this.cardcontent.nativeElement.offsetWidth/4-3);
  }
  complete(){
    this.homeworkService.complete(this.homework)
    .then(b=>this.homework.completers.push(this.settingsService.user))
  }
  uncomplete(){
    this.homeworkService.uncomplete(this.homework)
    .then(b=>this.homework.completers.splice(this.homework.completers.indexOf(this.settingsService.user),1));
  }
  remove(){
    this.homeworkService.remove(this.homework).then(i=>this.removed.emit(true));
  }
  modifiy(){
    this.modified.emit(true);
  }
}
