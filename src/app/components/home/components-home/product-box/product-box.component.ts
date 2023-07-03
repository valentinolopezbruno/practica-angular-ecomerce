import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/models/producto.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  
  @Input() anchoMaximo = false;

  @Input() producto: Producto | undefined;
  
  @Output() agregarAlCarritoEmitter = new EventEmitter(); 
  


  agregarAlCarrito():void{
    this.agregarAlCarritoEmitter.emit(this.producto)
  }
}
