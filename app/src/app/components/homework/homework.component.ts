import { Component, OnInit, Input } from '@angular/core';
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
  folded = true;
  constructor(
    private settingsService:SettingsService,
    private homeworkService:HomeworkService
  ) { }

  ngOnInit() {
  }
  complete(){
    this.homeworkService.complete(this.homework)
    .then(b=>this.homework.completers.push(this.settingsService.user))
  }

}
