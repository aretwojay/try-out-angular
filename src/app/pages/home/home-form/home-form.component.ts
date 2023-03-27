import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['home-form.component.css']
})
export class HomeFormComponent {
  title = 'home-form';
  contactForm = this.fb.group({
    firstName: ['', [Validators.required]],
    email: ['', Validators.required],
  })
  status = "";


  onSubmit() {
    this.status = this.contactForm.status;
    console.log(this.contactForm.controls['email'].errors)
  }
  constructor(private fb: FormBuilder) { }

}
