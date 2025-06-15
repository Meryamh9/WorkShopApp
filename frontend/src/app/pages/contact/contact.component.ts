import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulaire envoyé !', this.contactForm.value);
      // ici tu peux envoyer les données à une API ou un service email
      this.contactForm.reset();
    }
  }
}
