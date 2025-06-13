import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ServicesComponent } from "../services/services.component";
import { AProposComponent } from "../a-propos/a-propos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, ServicesComponent, AProposComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
