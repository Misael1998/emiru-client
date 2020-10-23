import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  invalidSubmit: boolean = false;
  invalidSubmitMessage: string = '';
  failedLogin: boolean = false;
  failedLoginMessage: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: any, e: any) {
    e.preventDefault();
    const { email, password } = form.value;
    console.log(form.value);

    if (!password || !email) {
      this.invalidSubmit = true;
      this.invalidSubmitMessage = 'El correo y contraseña son requeridos';
      return;
    }

    if (this.form.status == 'INVALID') {
      this.invalidSubmit = true;
      this.invalidSubmitMessage = 'El correo o contraseña son invalidos';
      return;
    }

    this.auth.login(this.user).subscribe(
      (response) => {
        this.user.token = response.token;
        this.user.email = response.user.email;
        this.user.name = response.user.name;
        this.user.roles = response.user.roles;
        console.log(this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['home']);
      },
      (error) => {
        if (error.error.message == 'Invalid credentials') {
          this.failedLogin = true;
          this.failedLoginMessage = 'El correo o contraseña son incorrectos';
        }
      }
    );
  }
}
