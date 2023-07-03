import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Carrito, CarritoItem } from 'src/models/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /* BehaviorSubject LO UTILIZO PARA QUE CUANDO HAYA UN CAMBIO EN EL OBJETO CARRITO SE ACTUALICE EN TODOS MIS COMPONENTES */
  carrito = new BehaviorSubject<Carrito>({productos:[]})

  constructor(private _snackBar: MatSnackBar) {}

  agregarAlCarrito(producto:CarritoItem): void{
    /* DEFINO LOS PRODUCTOS QUE YA TENGO GUARDADOS EN EL CARRITO COMO CONSTANTE */
    const productos = [...this.carrito.value.productos]

    const productosEnCarrito = productos.find((_producto) => _producto.id === producto.id)

    if(productosEnCarrito){
      productosEnCarrito.cantidad += 1;
    } else{
      productos.push(producto);
    }

    this.carrito.next({productos})

    this._snackBar.open('1 producto añadido al carrito.','Ok',{duration:3000})
    
    console.log("carrito:")
    console.log(this.carrito.value)
  }

  getTotal(productos: Array<CarritoItem>):number{
    return productos.map((producto)=> producto.precio * producto.cantidad)
    .reduce((prev,current) => prev + current, 0)
  }

  eliminarDelCarrito(producto: CarritoItem, update = true): Array<CarritoItem>{
    const productosFiltrados = this.carrito.value.productos.filter(
      (_producto) => _producto.id !==producto.id
    );

    if(update){
      
    this.carrito.next({productos:productosFiltrados})

    this._snackBar.open('1 Producto Eliminado', 'Ok',{duration:3000})
    }

    return productosFiltrados;
    
  }

  limpiarCarrito():void{
    this.carrito.next({productos : []})
    this._snackBar.open('Carrito Limpiado', 'ok', {duration: 3000})
  }

  decrementarCarrito(producto: CarritoItem){
    let productoEliminado: CarritoItem | undefined;

    let productoFiltrado = this.carrito.value.productos.map((_producto) => {
      if(_producto.id === producto.id){
        _producto.cantidad--;
      }
      if(_producto.cantidad === 0){
        productoEliminado =_producto
      }
      return _producto;
    })

    if(productoEliminado){
      productoFiltrado = this.eliminarDelCarrito(productoEliminado, false);
    }

    this.carrito.next({productos: productoFiltrado})

    this._snackBar.open('Producto Decrementado', 'Ok', {duration:3000})
  }

}
