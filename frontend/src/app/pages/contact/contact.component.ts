import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactService } from '../../core/services/contact.service';
import { ContactFormData } from '../../core/models/contact-form-data.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, HttpClientModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar,
  ) {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.envoyerMessage(this.contactForm.value as ContactFormData).subscribe({
        next: () => {
          this.showMessage('Message envoyé avec succès !');
          this.contactForm.reset();
        },
        error: () => {
          this.showMessage('Erreur lors de l’envoi. Merci de réessayer.');
        },
      });
    }
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, 'Fermer', {
      duration: 3000,
      panelClass: ['bg-[#1a4732]', 'text-white'],
    });
  }
}
