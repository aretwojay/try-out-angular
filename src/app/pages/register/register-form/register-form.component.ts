import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  constructor(
    public authService: AuthService,
    public fb: FormBuilder
  ) {
  }

  ngOnInit() {
    console.log(this.authService.isLoggedIn());
  }

  submitted = false;

  registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required]],
  })

  //list of some errors of registration
  registerErrors = [
    { code: "auth/weak-password", message: "Weak password !" },
    { code: "auth/invalid-email", message: "Invalid email !" },
    { code: "auth/email-already-in-use", message: "Email already in use !" }
  ]

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.status === "VALID") {
      this.authService.register(this.registerForm.value);
    }
    console.log(this.registerForm);
    console.log(this.authService.isLoggedIn());
  }
}
