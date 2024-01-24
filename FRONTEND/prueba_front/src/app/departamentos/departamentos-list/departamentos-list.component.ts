import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartamentosService } from '../departamentos.service';

@Component({
  selector: 'app-departamentos-list',
  templateUrl: './departamentos-list.component.html',
  styleUrls: ['./departamentos-list.component.sass']
})
export class DepartamentosListComponent {
  departamentosList$!:Observable<any[]>;

  constructor(private service:DepartamentosService){}

  ngOnInit(): void{
    this.departamentosList$ = this.service.viewDepartamentos();
    
  }

  deleteCargo(id:number){
    if(confirm("Seguro desea eliminar este registro?")){
      this.service.destroyCargo(id)
      .subscribe(book=>{
        this.departamentosList$ = this.service.viewDepartamentos();
      })
    }  
  }
}
