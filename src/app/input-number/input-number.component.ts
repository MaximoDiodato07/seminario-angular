import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'



@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})


export class InputNumberComponent {
   //-------- Propiedades del componente --------
  constructor(){}
  
  //--- Importo componente desde el padre:
  @Input()  quantity: number = 0; // <-- lo que encargan
  @Input()  max: number = 0; // <-- stock que tengo
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>() ;
  
  //-------- Metodos del componente --------  
    // Metodo para subir el stock de una cerveza
    upQuantity():void{
      if(this.quantity < this.max){
        this.quantity++;
        this.quantityChange.emit(this.quantity);
      }else{
        alert('No puedes comprar más de este producto');
      }
     
    }
  
  // Metodo para bajar el stock de una cerveza
    downQuantity():void{
      if(this.quantity <= 0){
        alert('Operacion invalida');        
      }else{
        this.quantity--;
        this.quantityChange.emit(this.quantity);
      }
    }

    // Metodo que verifica el stock de una cerveza
    onChange(event: any):void{
      if(this.quantity > this.max){
        event.preventDefault();
        event.target.value = 0;
        alert('No puedes comprar más de este producto');
      }else{
        this.quantityChange.emit(this.quantity);
      }
    }

   
}
