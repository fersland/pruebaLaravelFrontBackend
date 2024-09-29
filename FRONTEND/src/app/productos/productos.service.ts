import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  readonly apiUrl = 'http://127.0.0.1:8000/api/productos';

  constructor(private _http:HttpClient) { }

  listProducts():Observable<any[]>{
    return this._http.get<any>(this.apiUrl);
  }

  save(model:Producto):Observable<Producto>{
    return this._http.post<Producto>(this.apiUrl + "/store", model);
  }
}
