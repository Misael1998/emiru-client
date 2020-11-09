import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { LoggedGuard } from './guards/logged.guard';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { SelectPlanTypeComponent } from './components/select-plan-type/select-plan-type.component';

const routes: Routes = [
  { path: '', component: LandingComponent, canActivate: [LoggedGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      {
        path: '',
        component: ClientFormComponent,
      },
      {
        path: 'plans',
        component: SelectPlanTypeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
