import { Component, OnInit, Output,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Output() userLoggedValue = new EventEmitter();

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
    this.userLoggedValue.emit('');
  }
}
