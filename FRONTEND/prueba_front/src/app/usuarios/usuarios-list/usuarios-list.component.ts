import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.sass']
})
export class UsuariosListComponent {
  usuariosList$!:Observable<any[]>;

  constructor(private service:UsuariosService){}

  ngOnInit(): void{
    this.usuariosList$ = this.service.viewUsuarios();
  }

  deleteUsuario(id:number){
    if(confirm("Seguro desea eliminar este registro?")){
      this.service.destroyUsuario(id)
      .subscribe(book=>{
        this.usuariosList$ = this.service.viewUsuarios();
      })
    }  
  }
}
