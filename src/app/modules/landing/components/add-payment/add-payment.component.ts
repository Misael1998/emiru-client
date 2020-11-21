import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { PaymentCard } from 'src/app/models/PaymentCard';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css'],
})
export class AddPaymentComponent implements OnInit {
  @ViewChild('paymentFrom') paymentForm: any;
  @Output() submitCard: EventEmitter<PaymentCard> = new EventEmitter();
  @Output() skipCard: EventEmitter<Boolean> = new EventEmitter();
  @Input() isEnterprise: boolean;
  card: PaymentCard = {
    name: '',
    number: '',
    expiration: '',
    cvv: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onsubmit(form: any, e: any) {
    e.preventDefault();
    if (form.status == 'INVALID') {
      alert('Asegurese de llenar el formulario con valores validos');
      return;
    }

    const { cardName, cardNumber, cardExpiration, cardCvv } = form.value;

    if (!this.dateIsValid(cardExpiration)) {
      alert('invalid date');
      return;
    }

    this.submitCard.emit({
      name: cardName,
      number: cardNumber,
      expiration: cardExpiration,
      cvv: cardCvv,
    });
  }

  onSkipCard() {
    if (this.isEnterprise) {
      alert("Enterprise user can't skip paymet method");
      return;
    }

    this.skipCard.emit(true);
  }

  private dateIsValid(exp: string): boolean {
    let expArr = exp.split('');
    let date = new Date(Date.now());
    let yy = parseInt(`20${expArr[2]}${expArr[3]}`);
    let mm = parseInt(`${expArr[0]}${expArr[1]}`);

    if (mm > 12 || mm <= 0) {
      return false;
    }

    if (yy < date.getFullYear()) {
      return false;
    }

    if (yy == date.getFullYear() && mm <= date.getMonth()) {
      return false;
    }

    return true;
  }
}
