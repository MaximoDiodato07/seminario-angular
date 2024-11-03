import { Component } from '@angular/core';
import { BeerCartService } from '../beer-cart.service'; // <--- Servicio importado.
import { Beer } from '../beer-list/beer';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-beer-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beer-cart.component.html',
  styleUrl: './beer-cart.component.scss'
})

export class BeerCartComponent {  
  cartList$!: Observable<Beer[]>; //<---- Variable que obtendra los cambios del carrito en beer-cart.service.ts
  
  // constructor
  constructor(private cartService: BeerCartService) { 
    this.cartList$ = this.cartService.cartList.asObservable();
  }
 
  
}
