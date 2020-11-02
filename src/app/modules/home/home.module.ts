import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoresComponent } from './pages/stores/stores.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, SidebarComponent, StoresComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
