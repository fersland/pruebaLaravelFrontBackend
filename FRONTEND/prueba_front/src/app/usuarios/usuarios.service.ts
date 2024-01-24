import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpCliente: HttpClient) { }
  apiURL = 'http://127.0.0.1:8000/api/usuarios';

  viewUsuarios():Observable<any[]>{
    return this.httpCliente.get<any>(`http://127.0.0.1:8000/api/usuarios`);
  }

  getDataCargos(): Observable<any[]> {
    return this.httpCliente.get<any[]>(`http://127.0.0.1:8000/api/cargos`);
  }

  getDataDepartamentos(): Observable<any[]> {
    return this.httpCliente.get<any[]>(`http://127.0.0.1:8000/api/departamentos`);
  }

  saveUsuario(model:Usuario):Observable<Usuario>{
    return this.httpCliente.post<Usuario>(this.apiURL + `/store`,model);
  }

  destroyUsuario (id:number):Observable<number>{
    return this.httpCliente.delete<number>(this.apiURL+"/"+id);
  }


}
