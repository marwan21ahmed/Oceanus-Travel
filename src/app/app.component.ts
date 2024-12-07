import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavabarComponent } from '../companent/navabar/navabar.component';
import { GarrielleComponent } from '../companent/garrielle/garrielle.component';
import { ProductsComponent } from '../companent/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavabarComponent,GarrielleComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oceanusTravel';
}
