import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ServicesComponent } from "../services/services.component";
import { AProposComponent } from "../a-propos/a-propos.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, ServicesComponent, AProposComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
