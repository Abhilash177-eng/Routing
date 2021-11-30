import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  userDetail = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),

  })

  validateData() {

   this.http.post<any>("http://localhost:3000/Signup",this.userDetail.value)
   .subscribe(res=>{
    console.log("signup succesfull");
    this.userDetail.reset();
    this.router.navigate(['login']);
   },err=>{
     console.log("something went worng");
   })
    console.log(this.userDetail.value);
  }

}
