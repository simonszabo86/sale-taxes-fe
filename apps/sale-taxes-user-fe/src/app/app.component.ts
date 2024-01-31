import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MatSlideToggleModule],
  selector: 'sale-taxes-fe-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sale-taxes-user-fe';
}
