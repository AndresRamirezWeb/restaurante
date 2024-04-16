import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
})

// export class RegisterComponent implements OnInit {
export class RegisterComponent {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private authService: AuthService,
    private router: Router,
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  // registrar() {
  //   const { nombre, apellido, email, password } = this.registroForm.value;
  //   this.authService.registrar(nombre, apellido, email, password).subscribe(
  //     () => {
  //       console.log('Registro exitoso');
  //       this.router.navigate(['/login']);
  //     },
  //     (error) => {
  //       console.error('Error al registrar:', error);
  //       // Mostrar mensaje de error al usuario
  //     },
  //   );
  // }
}
