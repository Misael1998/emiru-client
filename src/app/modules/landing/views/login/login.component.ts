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
  invalidSubmit: boolean = false;
  invalidSubmitMessage: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: any, e: any) {
    e.preventDefault();
    console.log('login');

    if (!this.user.password || !this.user.email) {
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
      },
      (error) => {
        if (error.error.message == 'Invalid credentials') {
          alert('El correo o contraseña son incorrectos');
        }
      }
    );
  }
}
