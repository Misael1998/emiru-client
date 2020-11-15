import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  step: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.step = 1;
  }

  onCardSubmit(e: any) {
    console.log(e);
  }

  onPlanSubmit(e: any) {
    console.log(e);
    this.step += 1;
  }

  onUserRegister(e: any) {
    console.log(e);
    this.step += 1;
  }
}
