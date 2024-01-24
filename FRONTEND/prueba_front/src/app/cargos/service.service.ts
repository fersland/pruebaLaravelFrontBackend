import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from './cargo';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  readonly apiURL = 'http://127.0.0.1:8000/api/cargos';
  readonly apiURLEdit = 'http://127.0.0.1:8000/api/cargos-edit';

  constructor(private httpClient:HttpClient) { }

  viewCargos():Observable<any[]> {
    return this.httpClient.get<any>(`http://127.0.0.1:8000/api/cargos`);
  }

  saveCargo(model:Cargo):Observable<Cargo>{
    return this.httpClient.post<Cargo>(`http://127.0.0.1:8000/api/cargos/store`,model);
  }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://127.0.0.1:8000/api/usuarios`);
  }

  updateData(id:number, newData: any): Observable<any> {
    const url = `${this.apiURLEdit}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(url, newData, { headers });
  }

  destroyCargo (id:number):Observable<number>{
    return this.httpClient.delete<number>(this.apiURL+"/"+id);
  }
}
