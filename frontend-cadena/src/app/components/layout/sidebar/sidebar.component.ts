import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menuItems = [
    { label: 'Registro de Factura', route: '/facturas' },
    { label: 'Mesas', route: '/mesas' },
    { label: 'Clientes', route: '/clientes' },
    { label: 'Camareros', route: '/camareros' },
    { label: 'Platos', route: '/platos' },
    { label: 'Detalles', route: '/detalles' },
    { label: 'Reportes', route: '/reportes' },
  ];

  // constructor(private router: Router, private authService: AuthService) {}
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
