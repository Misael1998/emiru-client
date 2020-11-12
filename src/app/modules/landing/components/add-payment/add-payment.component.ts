import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css'],
})
export class AddPaymentComponent implements OnInit {
  @ViewChild('paymentFrom') paymentForm: any;

  constructor() {}

  ngOnInit(): void {}

  onsubmit(form: any, e: any) {
    e.preventDefault();
    console.log(form);
  }
}
