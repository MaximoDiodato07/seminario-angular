import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // para importar el modulo CommonModule
import { Beer } from './beer';
import { InputNumberComponent } from "../input-number/input-number.component"; // Importamos componente que agrega boton de stock.
import { BeerCartService } from '../beer-cart.service'; // Importo el servicio

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule, InputNumberComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})

export class BeerListComponent{
  
  // constuctor
  constructor(private cart: BeerCartService) { } // <-- LLamo a los datos del servicio.

  // Lista de cerveza
    beers: Beer[] = [
      {
        name: 'Lager',
        type: 'beer',
        price: 5,
        stock: 10,
        image: 'assets/img/beers/lager.jpg',
        clearence: true,
        quantity: 0
      },
      {
        name: 'Pilsner',
        type: 'beer',
        price: 5,
        stock: 0,
        image: 'assets/img/beers/pilsner.jpg',
        clearence: false,
        quantity: 0
      },
      {
        name: 'Pale Ale',
        type: 'beer',
        price: 5,
        stock: 10,
        image: 'assets/img/beers/pale-ale.jpg',
        clearence: false,
        quantity: 0
      }
    ]
  
    // Añado el carrito.
    addToCart(beer: Beer):void{
      this.cart.addToCart(beer);  //<-- LLamamos al metodo addToCart del servicio beer-cart.service.ts
      beer.stock -= beer.quantity; //<-- Le saco al stock, la cantidad pedida
      beer.quantity = 0; //<--- Reinicio a 0, para su posible siguiente compra.
    }
    


}

