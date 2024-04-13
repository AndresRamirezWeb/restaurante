import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from './auth.service';

@Component({
  selector: 'app-sidebar',
  // standalone: true,
  // imports: [],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menuItems = [
    { label: 'Registro de Factura', route: '/factura' },
    { label: 'Mesas', route: '/mesas' },
    { label: 'Clientes', route: '/clientes' },
    { label: 'Camareros', route: '/camareros' },
    { label: 'Platos', route: '/platos' },
    { label: 'Facturas', route: '/facturas' },
    { label: 'Detalles', route: '/detalles' },
    { label: 'Reportes', route: '/reportes' }
  ];

  // constructor(private router: Router, private authService: AuthService) {}

  logout() {
    // this.authService.logout();
    // this.router.navigate(['/login']);
  }
}