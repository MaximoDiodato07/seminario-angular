import { Injectable } from '@angular/core';
import { Beer } from './beer-list/beer'; // <--- Importo la lista de cervezas.
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Este servicio manejara la logica del carrito.
export class BeerCartService {
  // Variables
  private _cartList: Beer[] = []; // <--- Lista de cervezas del servicio.
  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>(this._cartList); // <--- Lista de cervezas del carrito.
  
  // Constructor
  constructor() { }

  // Metodos
  // Agregar cerveza al carrito
  addToCart(beer: Beer) {
    // Verifico si hay 1.
    if(beer.quantity <= 0){
      alert("Carga al menos 1 cerveza pa' ")
      return
    }

    // Genero cerveza a analizar por nombre, porque no tienen id.
    let item: Beer | undefined = this._cartList.find((cartElement) => cartElement.name == beer.name);
  
    if(!item){ // si no existe, la agrego
      this._cartList.push({ ... beer }); // <--- Agrego cerveza al carrito.  
    } else{
       item.quantity += beer.quantity // <-- al objeto que ya existia, le agrego la cantidad.  
    }

    this.cartList.next(this._cartList); // <-- Cambio el valor de la variable global/reactiva.
  }

  // Eliminar cerveza al carrito
  deleteOfCart(beer: Beer) {
    // Busco dentro del carrito, y creo un nuevo array donde no se incluya la cerveza.
    this._cartList = this._cartList.filter(item => item !== beer);    
  }

}
