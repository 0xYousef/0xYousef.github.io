import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../../services/email.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class Form {
  contactForm: FormGroup;
  sending = false;
  errorMessage = '';

  showDialog = false; 
  dialogMessage = '';

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending = true;

    const params = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      service: this.contactForm.value.service,
      message: this.contactForm.value.message,
    };

    this.emailService.sendEmail(params)
      .then(() => {
        this.dialogMessage = `Hi ${params.from_name}, thank you for reaching out! We will respond as soon as possible.`;
        this.showDialog = true;
        this.contactForm.reset();
        this.errorMessage = '';
      })
      .catch(() => {
        this.errorMessage = 'Failed to send! Try again later.';
      })
      .finally(() => (this.sending = false));
  }

  closeDialog() {
    this.showDialog = false;
    this.dialogMessage = '';
  }
}
