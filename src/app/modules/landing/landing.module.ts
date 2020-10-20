import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './views/landing/landing.component';
import { LandingNavComponent } from './components/landing-nav/landing-nav.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PlansComponent } from './components/plans/plans.component';
import { LandinngMockupComponent } from './components/landinng-mockup/landinng-mockup.component';
import { OnlineComponent } from './components/online/online.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    LandingComponent,
    LandingNavComponent,
    LoginComponent,
    RegisterComponent,
    PlansComponent,
    LandinngMockupComponent,
    OnlineComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
  exports: [LandingComponent],
})
export class LandingModule {}
