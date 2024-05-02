import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FacturasComponent } from './components/facturas/facturas/facturas.component';
import { MesasComponent } from './components/mesas/mesas/mesas.component';
import { ClientesComponent } from './components/clientes/clientes/clientes.component';
import { CamarerosComponent } from './components/camareros/camareros/camareros.component';
import { PlatosComponent } from './components/platos/platos/platos.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';
import { DetallesComponent } from './components/detalles/detalles/detalles.component';

// Import additional components
import { ClientesService } from './services/clientes/clientes.service';
import { CamarerosService } from './services/camareros/camareros.service';
import { FacturasService } from './services/facturas/facturas.service';
import { DetallesService } from './services/detalles/detalles.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    FacturasComponent,
    MesasComponent,
    ClientesComponent,
    CamarerosComponent,
    PlatosComponent,
    ReportesComponent,
    DetallesComponent,
  ],
  providers: [
    ClientesService,
    CamarerosService,
    FacturasService,
    DetallesService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
