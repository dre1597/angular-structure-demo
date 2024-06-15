import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthService } from '../../../../core/auth/auth.service';
import {
  PASSWORD_MIN_LENGTH,
  PHONE_MAX_LENGTH,
  PHONE_MIN_LENGTH,
} from '../../constants';
import { NgxMaskDirective } from 'ngx-mask';
import { MainButtonComponent } from '../../../../shared/components/main-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, MainButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  protected form!: FormGroup;

  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected get phone(): AbstractControl<string> | undefined | null {
    return this.form?.get('phone');
  }

  protected get password(): AbstractControl<string> | undefined | null {
    return this.form?.get('password');
  }

  public ngOnInit(): void {
    this.initForm();
  }

  protected login(): void {
    if (this.form?.valid) {
      const { phone, password } = this.form.value;
      const isAuthenticated = this.authService.login(phone, password);

      if (!isAuthenticated) {
        alert('Login failed');
        return;
      }

      this.router.navigate(['']);
    }
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(PHONE_MIN_LENGTH),
          Validators.maxLength(PHONE_MAX_LENGTH),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(PASSWORD_MIN_LENGTH)],
      ],
    });
  }
}
