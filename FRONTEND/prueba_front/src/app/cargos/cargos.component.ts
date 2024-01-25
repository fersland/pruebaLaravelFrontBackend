import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService } from './service.service';
import { Cargo } from './cargo';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.sass']
})
export class CargosComponent implements OnInit {
  cargosList$!:Observable<any[]>;

  data: any[] = [];

  formGroup :FormGroup;

  UsuariosList: any;
  SelectedValue:any;
  changeUsuarios(e){
    console.log(e.target.value);
    this.SelectedValue=e.target.value;
  }

  constructor(private formbuilder:FormBuilder, private service:ServiceService){
    this.formGroup = this.formbuilder.group({
      codigo:[' ',[Validators.required,Validators.pattern('a-zA-ZñÑá-úÁ-Ú')]],
      nombre:[' ',[Validators.required,Validators.pattern('a-zA-ZñÑá-úÁ-Ú')]],
      activo:[' ',[Validators.required]],
      idUsuario:[' ',[Validators.required]]
    })
  }

  // Cerrar MODAL
  @Output() closeModalEvent = new EventEmitter<boolean>();
  onCloseModal(event: any){
    this.closeModalEvent.emit(false);  
   }

  ngOnInit(): void{
    
    this.cargosList$ = this.service.viewCargos();
    this.loadData();

    this.service.getData().subscribe((data: any) => {
      this.UsuariosList = data;
    })
  }

  onFormSubmit(){
    let book=this.formGroup.value;
    this.formGroup.reset();

    
  }
  
  onSubmit(){
    console.log(this.formGroup.value);
    this.service.saveCargo(this.formGroup.value).subscribe(response => {
      console.log('Cargo added successfully!');
        //this.cargosList$ = this.service.viewCargos();
    })
  }

  loadData() {
    this.service.getData().subscribe((result) => {
      this.data = result;
    });
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
