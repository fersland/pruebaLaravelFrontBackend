import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.component.html',
  styleUrls: ['./usuarios-add.component.sass']
})
export class UsuariosAddComponent implements OnInit {
  formGroup :FormGroup;
  dataCargos: any[] = [];
  CargosList: any;
  SelectedValue:any;
  SelectedValue2:any;
  changeCargos(e){
    console.log(e.target.value);
    this.SelectedValue=e.target.value;
  }

  changeDepartamentos(e){
    console.log(e.target.value);
    this.SelectedValue2=e.target.value;
  }

  dataDepartamentos: any[] = [];
  DepartamentosList: any;

  constructor(private formbuilder:FormBuilder, private service:UsuariosService) { 
    this.formGroup = this.formbuilder.group({
      usuario:[' ',[Validators.required]],
      primerNombre:[' ',[Validators.required]],
      segundoNombre:[' ',[Validators.required]],
      primerApellido:[' ',[Validators.required]],
      segundoApellido:[' ',[Validators.required]],
      idDepartamento:[' ',[Validators.required]],
      idCargo:[' ',[Validators.required]],
    })
  }

  ngOnInit(){

    //this.loadData();
  
    this.service.getDataCargos().subscribe((data: any) => {
      this.CargosList = data;
    })

    this.service.getDataDepartamentos().subscribe((datas: any) => {
      this.DepartamentosList = datas;
    })
  }

  /*
  loadData() {
    this.service.getDataCargos().subscribe((result) => {
      this.dataCargos = result;
    });

    this.service.getDataDepartamentos().subscribe((results) => {
      this.dataDepartamentos = results;
    });
  }

  */

  onFormSubmit(){
    //this.datasaved=false;
    let book=this.formGroup.value;
    this.formGroup.reset();
  }

  onSubmit(){
    console.log(this.formGroup.value);
    this.service.saveUsuario(this.formGroup.value).subscribe(response => {
      console.log('Usuario added successfully!');
    });
  }

  
}
