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
  description;

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
  open(){
    this.isOpen = true;
  }
  close(){
    this.isOpen = false;
  }
  submit(){
    function isSet(v){
      return typeof v !== "undefined";
    }
    let ds=this.date.nativeElement.value;
    if(isSet(this.title) && isSet(this.selStream) && isSet(this.description) && isSet(ds)){
      let h:Homework={
        stream:this.selStream,
        title:this.title,
        end:new Date(ds),
        description:this.description,
        author:this.settingsService.user,
        completers:[]
      }
      this.submited.emit(h);
      this.homeworkService.add(h).then(n=>{
        h.id=n;
      });
      this.close();
    }
  }
}
