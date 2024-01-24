import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Cargo } from './cargo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.sass']
})
export class CargosComponent implements OnInit {
  cargosList$!:Observable<any[]>;
  
  constructor(private service:ServiceService){}

  ngOnInit(): void{
      this.cargosList$ = this.service.viewCargos();
      
  }

  items: Cargo[] = [];

  deleteCargo(id:number){
    if(confirm("Seguro desea eliminar este registro?")){
      this.service.destroyCargo(id)
      .subscribe(book=>{
        this.cargosList$ = this.service.viewCargos();
      })
    }  
  }
}
