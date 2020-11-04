import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';

import { SharedModule } from '../../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [HomeComponent, StoresComponent, LayoutComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [LayoutComponent],
})
export class HomeModule {}
