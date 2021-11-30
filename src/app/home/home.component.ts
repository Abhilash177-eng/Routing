import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {
    // console.log(this.router.getCurrentNavigation().extras.state);
    // console.log(data.role);
    // const role=data.role;
   }

  ngOnInit(): void {
  }
   data=this.router.getCurrentNavigation().extras.state;
   role=this.data.role;

}
