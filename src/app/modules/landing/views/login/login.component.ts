import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../../core/authentication/auth.service';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') form: any;

  user: User = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: any, e: any) {
    e.preventDefault();
    console.log('login');

    if (!this.user.password || !this.user.email) {
      alert('missing fields');
      return;
    }

    if (this.form.status == 'INVALID') {
      alert('invalid form');
      return;
    }

    console.log(this.user);
    console.log(this.form);

    //    this.auth.login(this.user).subscribe(
    //      (response) => {
    //        console.log(response);
    //      },
    //      (error) => {
    //        console.log(error);
    //      }
    //    );
  }
}
