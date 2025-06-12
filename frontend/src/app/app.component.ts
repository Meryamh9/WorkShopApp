import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from "./core/toolbar/toolbar.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ToolbarComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
