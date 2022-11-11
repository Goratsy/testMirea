import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

export let isSignin: boolean = false;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isCorrect = false
  @Output() setAuth = new EventEmitter<boolean>();

  login(myForm2: NgForm) {
    let myForm1:any = JSON.parse(String(window.localStorage.getItem('myForm')));
    console.log(myForm2, myForm1)
    if (myForm2.value.email == myForm1.email && myForm2.value.password1 == myForm1.password1){
      isSignin = true;
      this.isCorrect = true
      this.setAuth.emit(true)
      console.log('login')
      this.authService.setAuthStatus(true)
    } else {
      this.isCorrect = false
      this.setAuth.emit(false)
      console.log('login false')
      this.authService.setAuthStatus(false)
      console.log(this.isCorrect)
    }
    // console.log(myForm2.value.email, myForm1.email, myForm2.value.password1,myForm1.password1, myForm1)
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

}
