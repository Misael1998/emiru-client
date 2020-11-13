import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/register/register.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  @Output() registeredUser: EventEmitter<User> = new EventEmitter();
  @ViewChild('registerClientForm') registerClientForm: any;

  clientUser: User = {
    name: '',
    email: '',
    password: '',
    roles: [],
  };
  clientRole: any;
  enterpriseRole: any;
  invalidSubmit: boolean = false;
  invalidSubmitMessage: string = '';
  failedRegister: boolean = false;
  failedRegisterMessage: string = '';
  invalidCheckbox = false;

  constructor(private register: RegisterService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: any, e: any) {
    e.preventDefault();
    const { name, email, password, client, enterprise } = form.value;

    if (!name || !email || !password) {
      this.invalidSubmit = true;
      this.invalidSubmitMessage = 'Tiene que llenar todos los campos';
      return;
    }

    if (this.registerClientForm.status == 'INVALID') {
      this.invalidSubmit = true;
      this.invalidSubmitMessage = 'Asegurese de ingresar valores validos';
      return;
    }

    if (!client && !enterprise) {
      this.invalidCheckbox = true;
      this.invalidSubmit = true;
      this.invalidSubmitMessage =
        'Asegurese de inngresar todos los valores necesarios';
      return;
    } else {
      this.invalidCheckbox = false;
    }

    if (client) {
      this.clientUser.roles.push('client');
    }

    if (enterprise) {
      this.clientUser.roles.push('enterprise');
    }

    this.register.register(this.clientUser).subscribe(
      (response) => {
        this.clientUser.token = response.token;
        this.clientUser.email = response.user.email;
        this.clientUser.name = response.user.name;
        this.clientUser.roles = response.user.roles;

        this.registeredUser.emit(this.clientUser);
      },
      (error) => {
        console.log(error);
        this.invalidSubmit = false;
        this.failedRegister = true;

        if (error.error.error.error == 'Duplicate email') {
          this.failedRegisterMessage =
            'No puede usar este correo para registrarse';
        }
      }
    );
  }
}
