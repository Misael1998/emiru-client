import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: any, e: any) {
    e.preventDefault();
    console.log('login');

    this.auth
      .login({ email: 'correo@gmail.com', password: 'pajaritos' })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
