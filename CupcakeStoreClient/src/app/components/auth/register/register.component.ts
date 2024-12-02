import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LogoComponent, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  name: string = '';
  contato: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  register(): void {
    const result = this.authService
      .register(this.name, this.contato, this.email, this.password)
      .subscribe(
        (result) => {
          if (result.status === 'Success') {
            this.toastr.success('Usuário registrado com sucesso!');
            this.router.navigate(['/login']);
          } else {
            this.toastr.error(`${result.message}`);
          }
        },
        (error) => {
          this.toastr.error(error.error.message);
        }
      );
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
