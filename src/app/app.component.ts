import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BeerListComponent } from './beer-list/beer-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, FooterComponent, BeerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
