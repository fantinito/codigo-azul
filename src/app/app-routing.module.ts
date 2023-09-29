import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardGenericoComponent } from './pages/dashboard-generico/dashboard-generico.component'; 

const routes: Routes = [
   
  {path: "login", component:LoginComponent},
   {path: "dashboard", component:DashboardComponent},
   {path: "dashboard-generico", component:DashboardGenericoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
