import { Component, OnInit } from '@angular/core';
import { IallPosts } from 'src/app/app.component';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  getValues(myForm: NgForm) {
    window.localStorage.setItem('myForm', JSON.stringify(myForm.value));
    console.log(myForm.value)
  }

  // setValue(value: any) {
  //   console.log(value)
  // }

  

  constructor() { }

  ngOnInit(): void {
  }

}
