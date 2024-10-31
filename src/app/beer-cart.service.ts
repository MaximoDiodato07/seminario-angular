import { Injectable } from '@angular/core';
import { Beer } from './beer-list/beer'; // <--- Importo la lista de cervezas.

@Injectable({
  providedIn: 'root'
})

// Este servicio manejara la logica del carrito.
export class BeerCartService {
  // Variables
  cartList: Beer[] = []; // <--- Lista de cervezas del carrito.
  
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
    let item: Beer | undefined = this.cartList.find((cartElement) => cartElement.name == beer.name);

    
    if(!item){ // si no existe, la agrego
      this.cartList.push({ ... beer }); // <--- Agrego cerveza al carrito.  
    } else{
       item.quantity += beer.quantity // <-- al objeto que ya existia, le agrego la cantidad.
    }

  }

  // Eliminar cerveza al carrito
  deleteOfCart(beer: Beer) {
    // Busco dentro del carrito, y creo un nuevo array donde no se incluya la cerveza.
    this.cartList = this.cartList.filter(item => item !== beer);    
  }

}
