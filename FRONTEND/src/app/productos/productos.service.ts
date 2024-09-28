import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  readonly apiUrl = 'http://127.0.0.1:8000/api/productos';

  constructor(private _http:HttpClient) { }

  listProducts():Observable<any[]>{
    return this._http.get<any>(this.apiUrl);
  }
}
