import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from '../../../../core/authentication/auth.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  @ViewChild('registerClientForm') registerClientForm: any;

  clientUser: User = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: any, e: any) {
    e.preventDefault();
    console.log(form);

    this.auth.register(this.clientUser).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
