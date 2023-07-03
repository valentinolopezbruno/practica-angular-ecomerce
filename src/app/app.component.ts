import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/models/carrito.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header [carrito]="carrito" style="position: fixed;  width: 100%;"></app-header>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  carrito: Carrito = {productos:[]}

  title = 'ecomece';

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.carrito.subscribe((_carrito) => this.carrito = _carrito);
  }
}
