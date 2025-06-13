import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ToolbarComponent } from "./core/toolbar/toolbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ToolbarComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  scrollTo(section: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        // Petit timeout pour laisser Angular charger le DOM
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(section);
        }, 100);
      });
    } else {
      this.viewportScroller.scrollToAnchor(section);
    }
  }
}
