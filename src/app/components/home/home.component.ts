import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
import { Producto } from 'src/models/producto.model';
 


const ANCHO_FILAS : {[id:number]:number} = {1: 400, 3: 355, 4:350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy{

  columnas = 3;
  categoria:string | undefined;
  filas = ANCHO_FILAS[this.columnas]
  productos: Array<Producto> | undefined;
  productoBuscado ='';
  sort = 'desc';
  count = '30';
  subscripcionProductos: Subscription | undefined

  constructor(private cartService: CartService, private storeService: StoreService){}
  


  vistas(cols: number):void{
      this.columnas = cols;
      this.filas = ANCHO_FILAS[this.columnas]
    }

    cantidadProductosEmitter(num : number):void{
      this.count = num.toString();
      this.obtenerProductos();
    }

    sortEmitter(ssort: string):void{
      this.sort = ssort;
      this.obtenerProductos();
    }

  cambioCategoria(categoria: string):void{
      this.categoria = categoria;
      this.obtenerProductos();
    }

    filtrarProductoEnutter(iniciales: string):void{
      if(this.productos){
        this.productos = this.productos.filter(producto =>
          producto.title.toLowerCase().includes(iniciales.toLowerCase())
        );
        console.log(iniciales)
      }
    }

  agregarAlCarrito(producto: Producto): void{
    this.cartService.agregarAlCarrito({
      productoimg: producto.image,
      nombre: producto.title,
      precio: producto.price,
      cantidad: 1,
      id: producto.id
    })
  }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos():void{
    this.storeService.obtenerProductos(this.count, this.sort, this.categoria).subscribe((_productos) => {this.productos = _productos})
    console.log(this.productos)
  }

  ngOnDestroy(): void {
   if(this.subscripcionProductos){
    this.subscripcionProductos.unsubscribe();
   }
  }
}
