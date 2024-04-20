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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
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
        alert('Login exitoso!');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/menu']);
        this.loginForm.reset();
      },
      (error) => {
        console.error('Error al iniciar sesión:', error.message);
        // Mostrar mensaje de error al usuario
        alert('Error al iniciar sesión. Intente nuevamente.');
        this.loginForm.setErrors({ loginError: 'Credenciales incorrectas' });
      },
    );
  }
}
