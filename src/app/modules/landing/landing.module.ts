import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PlansComponent } from './components/plans/plans.component';
import { LandinngMockupComponent } from './components/landinng-mockup/landinng-mockup.component';
import { OnlineComponent } from './components/online/online.component';

import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { SelectUserTypeComponent } from './components/select-user-type/select-user-type.component';
import { SelectPlanTypeComponent } from './components/select-plan-type/select-plan-type.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    PlansComponent,
    LandinngMockupComponent,
    OnlineComponent,
    SelectUserTypeComponent,
    SelectPlanTypeComponent,
    ClientFormComponent,
    AddPaymentComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  exports: [LandingComponent],
})
export class LandingModule {}
