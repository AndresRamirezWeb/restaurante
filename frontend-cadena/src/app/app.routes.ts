import { RouterModule, Routes } from '@angular/router';
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

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'menu',
    component: SidebarComponent,
    children: [
      { path: 'mesas', component: MesasComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'camareros', component: CamarerosComponent },
      { path: 'platos', component: PlatosComponent },
      { path: 'facturas', component: FacturasComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'detalles', component: DetallesComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
