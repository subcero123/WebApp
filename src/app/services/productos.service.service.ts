import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(
    private validatorService: ValidatorService,
    private errorService: ErrorsService,
  ) { }

  public producto(){
    return{
      'id' : '',
      'nombre_producto' : '',
      "precio": '',
      'departamento' : '',
    }
  }

  public validarProducto(data: any){
    console.log("Validando producto... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["id"])){
      error["id"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["nombre_producto"])){
      error["nombre_producto"] = this.errorService.required;
    }else if(!this.validatorService.max(data["nombre_producto"], 20)){
      error["nombre_producto"] = this.errorService.max(20);
      alert("La longitud de caracteres deL nombre es mayor, deben ser menos de 20");
    }

    if(!this.validatorService.required(data["precio"])){
      error["precio"] = this.errorService.required;
    }else if(!this.validatorService.numeric(data["precio"])){
      alert("El formato del precio es solo números");
    }

    if(!this.validatorService.required(data["departamento"])){
      error["departamento"] = this.errorService.required;
    }else if(!this.validatorService.min(data["departamento"], 5)){
      error["departamento"] = this.errorService.min(5);
      alert("La longitud de caracteres deL departamento es menor, deben ser minimo 5");
    }else if(!this.validatorService.max(data["departamento"], 20)){
      error["departamento"] = this.errorService.max(20);
      alert("La longitud de caracteres deL departamento es mayor, deben ser maximo 20");
    };
    return error;
  }
}