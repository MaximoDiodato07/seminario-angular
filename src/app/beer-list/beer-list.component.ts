import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // para importar el modulo CommonModule
import { Beer } from './beer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})

export class BeerListComponent{

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


    //-------- Metodos del componente --------
    
    // Metodo para subir el stock de una cerveza
      upQuantity(beer: Beer):void{
        if(beer.stock - beer.quantity > 0){
          beer.quantity++;
        }else{
          alert('No puedes comprar más de este producto');
        }
       
      }
    
    // Metodo para bajar el stock de una cerveza
      downQuantity(beer: Beer):void{
        if(beer.quantity <= 0){
          alert('Operacion invalida');        
        }else{
          beer.quantity--;
        }
      }

      // Metodo que verifica el stock de una cerveza
      onChange(event: any, beer: Beer):void{
        if(beer.quantity > beer.stock){
          event.preventDefault();
          event.target.value = 0;
          alert('No puedes comprar más de este producto');
        }
      }


}

