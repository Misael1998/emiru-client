import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  step: number = 0;
  isEnterprise: boolean;
  isRegistered: boolean = false;
  user: User;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.step = 0;
  }

  onCardSubmit(e: any) {
    console.log(e);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/home']);
  }

  onPlanSubmit(e: any) {
    console.log(e);
    this.step += 1;
  }

  onUserRegister(e: any) {
    console.log(e);
    const { roles } = e;
    if (!roles.includes('enterprise')) {
      this.isEnterprise = false;
      this.isRegistered = true;
      this.step = 2;
    } else {
      this.isEnterprise = true;
    }
    this.user = e;
    this.step += 1;
  }
}
