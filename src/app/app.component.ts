import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myglamm-chrome-extension';
  showSignupPage:boolean = false;
  isUserLoggedIn: boolean =false;
  constructor(){
  
  }
  ngOnInit(){
    if(localStorage.getItem('userDetail')){
      this.isUserLoggedIn = true;
    }
  }
  userLogsIn(){
    this.isUserLoggedIn = true;
  }
}

