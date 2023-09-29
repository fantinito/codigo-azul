import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { RegistroPacienteComponent } from './pages/registro-paciente/registro-paciente.component';
import { RegistroEnfermeroComponent } from './pages/registro-enfermero/registro-enfermero.component';
import { NuevoComponent } from './pages/nuevoPaciente/nuevo.component';
import { NuevoEnfermeroComponent } from './pages/nuevo-enfermero/nuevo-enfermero.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavGenericoComponent } from './shared/nav-generico/nav-generico.component';
import { DashboardGenericoComponent } from './pages/dashboard-generico/dashboard-generico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportesComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    RegistroPacienteComponent,
    RegistroEnfermeroComponent,
    NuevoComponent,
    NuevoEnfermeroComponent,
    DashboardComponent,
    NavGenericoComponent,
    DashboardGenericoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
