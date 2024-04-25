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
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  registrar() {
    const { nombre, apellido, email, role, phone, password, confirmPassword } =
      this.registerForm.value;

    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    this.authService
      .registrar(nombre, apellido, email, role, phone, password)
      .subscribe(
        (res: any) => {
          // alert('Registro exitoso!');
          Swal.fire({
            title: '¡Registro exitoso!',
            text: 'Se ha registrado correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          console.log('Registro exitoso', res);
          this.router.navigate(['/']);
          this.registerForm.reset();
        },
        (error) => {
          const errorResponse = JSON.parse(error['error']);
          console.error('Error al registrar:', errorResponse[0].msg);
          Swal.fire({
            title: '¡Registro fallido!',
            text:
              'La información ingresada es incorrecta: ' +
              errorResponse[0].msg +
              '. Inténtalo de nuevo',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        },
      );
  }
}
