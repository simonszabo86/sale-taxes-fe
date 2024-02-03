import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from '@sale-taxes-fe/layout-ui';
import { ApiModule } from '@sale-taxes-fe/api';

@Component({
  standalone: true,
  imports: [RouterModule, MatSlideToggleModule, HeaderComponent, ApiModule],
  selector: 'sale-taxes-fe-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sale-taxes-user-fe';
}
