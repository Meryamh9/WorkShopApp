import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ServicesComponent } from '../services/services.component';
import { AProposComponent } from '../a-propos/a-propos.component';
import { ContactComponent } from '../contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ServicesComponent,
    AProposComponent,
    ContactComponent,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private contactService: ContactService) {}

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
