import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isOpen = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  open(){
    this.isOpen = true;
  }
  close(){
    this.isOpen = false;
  }
  ocal(){
    let id=prompt("id ENIB:");
    if(typeof id !== "undefined" && id!=="" && id!== null){
      this.router.navigateByUrl("refresh");
      this.router.navigateByUrl("calendar/"+id);
    }
  }
}
