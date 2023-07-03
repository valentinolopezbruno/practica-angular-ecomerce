import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatGridListModule} from "@angular/material/grid-list"
import {MatMenuModule} from "@angular/material/menu"
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatIconModule} from "@angular/material/icon"
import {MatExpansionModule} from "@angular/material/expansion"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatTableModule} from "@angular/material/table"
import {MatBadgeModule} from "@angular/material/badge"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatListModule} from "@angular/material/list"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FiltersComponent } from './components/home/components-home/filters/filters.component';
import { ProductBoxComponent } from './components/home/components-home/product-box/product-box.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
