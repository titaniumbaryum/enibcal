import { Component, OnInit, ViewChild } from '@angular/core';
import { Homework } from "../../structures/homework"
import { HomeworkService } from "../../services/homework.service"

@Component({
  selector: 'app-homework-page',
  templateUrl: './homework-page.component.html',
  styleUrls: ['./homework-page.component.css']
})
export class HomeworkPageComponent implements OnInit {
  homeworks:Homework[]=[];
  @ViewChild('edit') edit;
  constructor(private homeworkService:HomeworkService) { }

  ngOnInit() {
    this.homeworkService.get().then(h=>this.homeworks=h);
  }
  remove(homework:Homework){
    this.homeworks.splice(this.homeworks.indexOf(homework),1);
  }
  modify(homework:Homework,e){
    this.edit.open(homework);
    setTimeout(function(){e.scrollIntoView(true)},100);
  }
  openEdit(e){
    this.edit.open();
    setTimeout(function(){e.scrollIntoView(true)},100);
  }
}
