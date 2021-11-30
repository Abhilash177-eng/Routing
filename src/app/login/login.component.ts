import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http :HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  userInput = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  validateData(){
   this.http.get<any>("http://localhost:3000/Signup").subscribe(
    res=>{
      const user = res.find((a:any)=>{
        return a.email===this.userInput.value.email && a.password === this.userInput.value.password
      }); 
      if(user)
      {
        console.log(user);
        this.router.navigate(['home'],{state:user});
      }
      else{
        console.log("InValid user");
      }
    },err=>{
      console.log("Something Went Worng");
    }
   )
  }


}
