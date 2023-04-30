import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  imgWidth: boolean = true;

  constructor() {}

  ngOnInit(): void {

    // Tuỳ chình chiều rộng của img trong login-left
    if (window.innerWidth >= 1024) {
      this.imgWidth = false;
    } else {
      this.imgWidth = true;
    }
    // Tuỳ chình chiều rộng của img trong login-left


  }
}
