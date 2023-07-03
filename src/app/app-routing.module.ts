import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: 'home',  pathMatch:'full' },

  { path: 'cart', component: CartComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
