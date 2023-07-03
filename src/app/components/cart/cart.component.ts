import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Carrito, CarritoItem } from 'src/models/carrito.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  carrito: Carrito = {productos:[
  {
    id: 1,
    productoimg: 'https://via.placeholder.com/150',
    nombre: 'Nike AirForce',
    precio: 80000,
    cantidad: 1,
  },
  {
    id: 2,
    productoimg: 'https://via.placeholder.com/150',
    nombre: 'Jordan Dunk High',
    precio: 120000,
    cantidad: 2,
  }
]};

  datosEntrada: Array<CarritoItem> = [];

  displayColumnas:Array<string> = [
    'productoimg',
    'nombre',
    'precio',
    'cantidad',
    'total',
    'accion'
  ]

  constructor(private cartService: CartService){}

  ngOnInit():void{
    this.datosEntrada = this.carrito.productos;
    this.cartService.carrito.subscribe((_carrito:Carrito) => {
      this.carrito = _carrito;
      this.datosEntrada = this.carrito.productos;
    })
  }

  getTotal(productos: Array<CarritoItem>):number{
    return this.cartService.getTotal(productos);
  }

  limpiarCarrito():void{
    this.cartService.limpiarCarrito();
  }

  eliminarProducto(elemento : CarritoItem):void{
    this.cartService.eliminarDelCarrito(elemento);
  }

  decrementarCarrito(producto: CarritoItem):void{
    this.cartService.decrementarCarrito(producto);
  }

  agregarAlCarrito(producto: CarritoItem):void{
    this.cartService.agregarAlCarrito(producto);
  }
}
