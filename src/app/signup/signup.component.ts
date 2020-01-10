import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpObj: any = {
    empId:'',
    dept:'',
    name:''
  };

  constructor() { }

  ngOnInit() {}

  submit(){
    console.log(this.signUpObj);
    localStorage.setItem('userDetail',JSON.stringify(this.signUpObj))
  }
}
