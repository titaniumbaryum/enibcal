import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Homework } from "../../structures/homework"
import { HomeworkService } from "../../services/homework.service"
import { StreamService } from "../../services/stream.service"
import { SettingsService } from "../../services/settings.service"

@Component({
  selector: 'app-homework-edit',
  templateUrl: './homework-edit.component.html',
  styleUrls: ['./homework-edit.component.css']
})
export class HomeworkEditComponent implements OnInit {
  isOpen=false;
  streams;
  selStream;
  title;
  @ViewChild("date") date;
  @Output() submited:EventEmitter<Homework> = new EventEmitter();
  @Output() removed:EventEmitter<Homework> = new EventEmitter();
  description;
  noDate:boolean = false;
  toDelete:Homework;

  constructor(
    private streamService:StreamService,
    private settingsService:SettingsService,
    private homeworkService:HomeworkService
  ) { }

  ngOnInit() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: true // Close upon selecting a date,
    });
    this.streams=this.streamService.get();
  }
  changeDate(event){
    console.log(event);
  }
  open(homework:Homework){
    this.isOpen = true;
    if(typeof homework != "undefined"){
      this.selStream = homework.stream;
      this.title = homework.title;
      this.description = homework.description;
      if(homework.end.getFullYear()>=(new Date()).getFullYear()+2){
        this.date.nativeElement.value = "";
        this.noDate=true;
      }else{
        this.date.nativeElement.value = homework.end.toLocaleDateString();
        this.noDate=false;
      }
      this.toDelete = homework;
    }
  }
  close(){
    this.isOpen = false;
    this.selStream = undefined;
    this.title = undefined;
    this.description = undefined;
    this.date.nativeElement.value = "";
    this.noDate=false;
    this.toDelete = undefined;
  }
  submit(){
    function isSet(v){
      return typeof v !== "undefined";
    }
    let ds=this.date.nativeElement.value;
    if(this.noDate || isNaN( new Date(ds).getTime())){
      ds = new Date();
      ds.setFullYear(ds.getFullYear()+2);
    }else{
      ds = new Date(ds);
    }
    if(this.selStream == "new"){
      this.selStream = prompt("dans quel flux voulez vous poster votre devoirs?");
      this.streams=this.streamService.add(this.selStream);
    }
    if(isSet(this.title) && isSet(this.selStream) && isSet(this.description) && isSet(ds)){
      let h:Homework={
        stream:this.selStream,
        title:this.title,
        end:ds,
        description:this.description,
        author:this.settingsService.user,
        completers:[]
      }
      this.submited.emit(h);
      let g=this.toDelete;
      if(isSet(g)) this.removed.emit(g);
      this.homeworkService.add(h).then(n=>{
        if(isSet(g)) this.homeworkService.remove(g);
        h.id=n;
      });
      this.close();
    }
  }
}
