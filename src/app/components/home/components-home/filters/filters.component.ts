import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy{

  constructor(private storeService: StoreService){}

  @Output() vistas = new EventEmitter<number>();
  @Output() cantidadProductosEmitter = new EventEmitter<number>();
  @Output() sortEmitter = new EventEmitter<string>();
  @Output() cambioCategoriaEmmiter = new EventEmitter<string>();
  @Output() filtrarProductoEnutter = new EventEmitter<string>();


  categoriasSubscription: Subscription | undefined;

  categorias: Array<string> | undefined;
  filtrarPor = 'seleccionar...';
  cantidadProductos = 10;
  sort = 'desc';
  searchbar = '';
  filtrarProductoSearchBar = '';

  cambioCategoria(categoria: string):void{
    this.cambioCategoriaEmmiter.emit(categoria)
  }

  asd():void{
    console.log(this.filtrarProductoSearchBar)
  }


  ngOnInit(): void {
    this.categoriasSubscription =  this.storeService.obtenerCategorias().subscribe((response) => { this.categorias = response});
  }

  ngOnDestroy():void{
    if(this.categoriasSubscription){
      this.categoriasSubscription.unsubscribe();
    }
  }

  borrarDatosBusqueda(){
    this.filtrarProductoSearchBar = ''
  }

  seleccionarFiltrarProductoSearchBar(): void{
    this.filtrarProductoEnutter.emit(this.filtrarProductoSearchBar)
  }

  seleccionaFiltrarPor(opcion: string): void{
    this.filtrarPor = opcion;
    this.sortEmitter.emit(opcion)
  }

  seleccionaCantidadProductos(opcion: number): void{
    this.cantidadProductos = opcion;
    this.cantidadProductosEmitter.emit(opcion)
  }

  cambioVistaProductos(vista:number):void{
    this.vistas.emit(vista)
  }


}
