import { Component } from '@angular/core';
import { BeerCartService } from '../beer-cart.service'; // <--- Servicio importado.

@Component({
  selector: 'app-beer-cart',
  standalone: true,
  imports: [],
  templateUrl: './beer-cart.component.html',
  styleUrl: './beer-cart.component.scss'
})

export class BeerCartComponent {
  
  // constructor
  constructor(private cart: BeerCartService) { }

}
