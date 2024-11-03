import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // para importar el modulo CommonModule
import { Beer } from './beer';
import { InputNumberComponent } from "../input-number/input-number.component"; // Importamos componente que agrega boton de stock.
import { BeerCartService } from '../beer-cart.service'; // Importo el servicio
import { BeerDataService } from '../beer-data.service'; // Importo el servicio

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule, InputNumberComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})

export class BeerListComponent{
  // Variables
  beers: Beer[] = [];

  // constuctor
  constructor(private cart: BeerCartService, private beersService: BeerDataService){   // <-- LLamo a los datos del servicio con Inyeccion de dependencia.
  }

  ngOnInit(): void {
    this.beersService.getBeers() // <--- Llamamos al método getBeers del servicio beer-data.service.ts
     .subscribe(beers => this.beers = beers); // <--- Suscribo a mi variable local, lo traido desde el servicio
  }
  
  
    
    // {
    //   name: 'Lager',
    //   rating: [],
    //   price: 5,
    //   image: 'assets/img/beers/lager.jpg',
    //   stock: ,   // Número aleatorio entre 0 y 19
    //   quantity: 0,
    //   ,
    // },
  
  
  // Añado el carrito.
  addToCart(beer: Beer):void{
    this.cart.addToCart(beer);  //<-- LLamamos al metodo addToCart del servicio beer-cart.service.ts
    beer.stock -= beer.quantity; //<-- Le saco al stock, la cantidad pedida
    beer.quantity = 0; //<--- Reinicio a 0, para su posible siguiente compra.
  }
    


}

