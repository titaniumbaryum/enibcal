import { Component, OnInit, ViewChildren } from '@angular/core';
import { Homework } from "../../structures/homework"
import { HomeworkService } from "../../services/homework.service"

@Component({
  selector: 'app-homework-page',
  templateUrl: './homework-page.component.html',
  styleUrls: ['./homework-page.component.css']
})
export class HomeworkPageComponent implements OnInit {
  homeworks:Homework[]=[];
  @ViewChildren('edit') edit;
  constructor(private homeworkService:HomeworkService) { }

  ngOnInit() {
    this.homeworkService.get().then(h=>this.homeworks=h);
  }

}
