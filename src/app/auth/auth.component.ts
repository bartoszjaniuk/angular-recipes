import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuth } from '../models/auth.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.styles.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  signInAndSignUpForm!: FormGroup;
  isLoading: boolean = false;
  error: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.signInAndSignUpForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  toggleLoadingMode() {
    this.isLoading = !this.isLoading;
  }

  onSubmit() {
    console.log(this.signInAndSignUpForm.value);

    this.toggleLoadingMode();
    if (this.isLoginMode) {
      // TO DO
    }

    if (!this.isLoginMode) {
      this.authService.signUp(this.signInAndSignUpForm.value).subscribe({
        next: (responseData) => console.log(responseData),
        error: (error) => {
          console.log(error);
          this.error = 'An error occurred';
          this.toggleLoadingMode();
        },
        complete: () => this.toggleLoadingMode(),
      });
      this.onSwitchMode();
    }

    this.signInAndSignUpForm.reset();
  }
}
