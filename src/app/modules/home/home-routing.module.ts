import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { LayoutComponent } from './layout/layout.component';
import { IsEnterpriseGuard } from './guards/is-enterprise.guard';
import { StoresComponent } from './pages/stores/stores.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [IsLoggedGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [IsEnterpriseGuard],
      },
      {
        path: 'stores',
        component: StoresComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
