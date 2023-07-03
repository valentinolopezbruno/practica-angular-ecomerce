import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/models/producto.model';


const STORE_BASE_URL = 'https://fakestoreapi.com'

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  constructor(private httpClient: HttpClient) { }

  obtenerProductos(limit:string, sort:string, categoria?:string): Observable<Array<Producto>> {
    return this.httpClient.get<Array<Producto>>(`${STORE_BASE_URL}/products${categoria ? '/category/' + categoria : ''}?sort=${sort}&limit=${limit}`)
  }

  obtenerCategorias():Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(`${STORE_BASE_URL}/products/categories`)
  }

}
