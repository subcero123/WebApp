import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {
  //Variables del componente registro
  public editar: boolean = false;
  public user:any = {};

  public hide_1:boolean =false;
  public hide_2:boolean =false;
  public inputType_1:string = 'password';
  public inputType_2:string = 'password';
  //Deteccion de errores
  public errors:any = {};

  constructor() { }

  ngOnInit(): void {
    this.user = this.esquemaUser();
    //Imprimir datos en consola
    console.log("User: ", this.user);
  }

  public regresar(){

  }

  public registrar(){
    console.log(this.user.datos);
        
  }

  //Funciones para password  
  showPassword()  {    
    if(this.inputType_1 == 'password'){ 
           this.inputType_1 = 'text';      
           this.hide_1 = true;    
          }    
    else{      
      this.inputType_1 = 'password';      
      this.hide_1 = false;    
    }  
  }  
  
  showPwdConfirmar()  {    
    if(this.inputType_2 == 'password'){      
      this.inputType_2 = 'text';      
      this.hide_2 = true;    
    }    
    else{      
      this.inputType_2 = 'password';      
      this.hide_2 = false;    
    }  
  }

  public changeFecha(event : any){
    console.log(event);
    this.user.fecha_nacimiento = event.value.toISOString().split("T")[0];
    console.log("Fecha : ", this.user.fecha_nacimiento);
  }


  public esquemaUser(){
    return {
      'matricula': '',
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'confirmar_password': '',
      'fecha_nacimiento': '',
      'curp': '',
      'rfc': '',
      'edad': '',
      'telefono': '',
      'ocupacion': '',
    }
  }
}
