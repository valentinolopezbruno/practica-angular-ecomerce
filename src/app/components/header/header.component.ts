import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Carrito, CarritoItem } from 'src/models/carrito.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private cartService: CartService){}

  private _carrito:Carrito = {productos:[]};

  cantidadProductosCarrito = 0;

  @Input() 

  get carrito():Carrito{
    return this._carrito
  }

  set carrito(carrito: Carrito){
    this._carrito = carrito;

    this.cantidadProductosCarrito = carrito.productos.map((producto) => producto.cantidad).reduce((prev,current) => prev + current, 0)
  }

  getTotal(productos: Array<CarritoItem>):number{
    return this.cartService.getTotal(productos);
  }

  limpiarCarrito(): void{
    this.cartService.limpiarCarrito();
  }
}
