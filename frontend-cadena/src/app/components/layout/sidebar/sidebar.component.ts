import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';

import Swal from 'sweetalert2';
import { MesasService } from '../../../services/mesas/mesas.service';
import { Mesa } from '../../../models/mesa/mesa.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  date: Date = new Date();
  currentYear: number = this.date.getFullYear();

  mesas: Mesa[];
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
    private mesasService: MesasService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.obtenerMesas();
  }

  obtenerMesas() {
    const token = localStorage.getItem('token');
    if (token) {
      this.mesasService.getMesas(token).subscribe(
        (mesas: Mesa[]) => {
          this.mesas = mesas;
        },
        (error) => {
          console.error('Error al ingresar al menu:', error.status);
          Swal.fire({
            title: '¡Error al ingresar al menu!',
            text: 'Estado: ' + error.status + '. Inténtalo de nuevo.',
            icon: 'error',
            confirmButtonText: 'OK',
          });

          if (error.status === 401) {
            this.router.navigate(['/']);
          }
        },
      );
    } else {
      console.error('Token de autenticación no encontrado');
      Swal.fire({
        title: '¡Token de autenticación no encontrado!',
        text: 'Ocurrió un error al obtener el token. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
