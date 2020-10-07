import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    PublicComponent, 
    LoginPage, 
    HomePage, 
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
