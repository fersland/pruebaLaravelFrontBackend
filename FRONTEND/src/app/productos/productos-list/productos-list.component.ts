import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.sass']
})
export class ProductosListComponent {
  productosList$!:Observable<any[]>;
  _formGroup :FormGroup;
  data: any[] = [];

  constructor(private _formBuilder:FormBuilder, private _service:ProductosService){
    this._formGroup = this._formBuilder.group({
      codigoProducto: [' ', [Validators.required]],
      descripcion:    [' ', [Validators.required]],
      precio:         [' ', [Validators.required]],
      existecia:      [' ', [Validators.required]]
    })
  }

  ngOnInit(): void{
    this.productosList$ = this._service.listProducts();

    this._formGroup = this._formBuilder.group({
      codigoProducto: [' ', [Validators.required, Validators.pattern('a-zA-ZñÑá-úÁ-Ú')]],
      descripcion:    [' ', [Validators.required, Validators.pattern('a-zA-ZñÑá-úÁ-Ú')]],
      precio:         [' ', [Validators.required]],
      existencia:     [' ', [Validators.required]],
      activo:         [' ', [Validators.required]]
    });
  }

  insertData(){
    console.log(this._formGroup.value);
    this._service.save(this._formGroup.value).subscribe(response => {
      console.log('Added Successfully!');
      this.productosList$ = this._service.listProducts();
      this._formGroup.reset();

      
    })
  }
}
