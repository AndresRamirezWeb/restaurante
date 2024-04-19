import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
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
      (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        // Mostrar mensaje de error al usuario
        alert('Error al iniciar sesión. Intente nuevamente.');
        this.loginForm.setErrors({ loginError: 'Credenciales incorrectas' });
      },
    );
  }
}
