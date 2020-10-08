import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { LandingNavComponent } from './components/landing-nav/landing-nav.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PlansComponent } from './components/plans/plans.component';

@NgModule({
  declarations: [
    LandingComponent,
    LandingNavComponent,
    LoginComponent,
    RegisterComponent,
    PlansComponent,
  ],
  imports: [CommonModule, LandingRoutingModule],
  exports: [LandingComponent],
})
export class LandingModule {}
