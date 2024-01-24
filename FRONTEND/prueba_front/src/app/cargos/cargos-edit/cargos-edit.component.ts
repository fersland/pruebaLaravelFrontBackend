import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cargos-edit',
  templateUrl: './cargos-edit.component.html',
  styleUrls: ['./cargos-edit.component.sass']
})
export class CargosEditComponent implements OnInit {
  formGroup :FormGroup;

  constructor(private formbuilder:FormBuilder, private service:ServiceService) { 
    this.formGroup = this.formbuilder.group({
      codigo:[' ',[Validators.required]],
      nombre:[' ',[Validators.required]],
      activo:[' ',[Validators.required]],
      idUsuario:[' ',[Validators.required]]
    })
  }

  UsuariosList: any;
  SelectedValue:any;
  changeUsuarios(e){
    console.log(e.target.value);
    this.SelectedValue=e.target.value;
  }

  dataIn: any[] = [];

  ngOnInit(){
  this.loadData();

  this.service.getData().subscribe((data: any) => {
    this.UsuariosList = data;
  })

}

  showForm(data){

    this.formGroup = data;

    this.formGroup.patchValue({

      id:data.id,

      codigo:data.codigo,

      nombre:data.nombre,

      activo:data.activo

    });

  }

  onSubmit(){
    console.log(this.formGroup.value);
    
  }

  loadData() {
    this.service.getData().subscribe((result) => {
      this.dataIn = result;
    });
  }
}
