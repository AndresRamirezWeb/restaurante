import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe(
      (res: any) => {
        Swal.fire({
          title: '¡Inicio de sesión exitoso!',
          text: 'Ha iniciado sesión correctamente.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        localStorage.setItem('token', res.token);
        this.router.navigate(['/menu']);
        this.loginForm.reset();
      },
      (error) => {
        console.error('Error al iniciar sesión:', error.message);
        // Mostrar mensaje de error al usuario
        Swal.fire({
          title: '¡Inicio de sesión fallido!',
          text: 'Las credenciales ingresadas son incorrectas. Inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      },
    );
  }
}
