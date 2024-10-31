import { Component } from '@angular/core';
import { BeerCartComponent } from '../beer-cart/beer-cart.component';
import { BeerListComponent } from '../beer-list/beer-list.component';

@Component({
  selector: 'app-beer-section',
  standalone: true,
  imports: [BeerCartComponent, BeerListComponent],
  templateUrl: './beer-section.component.html',
  styleUrl: './beer-section.component.scss'
})
export class BeerSectionComponent {

}
