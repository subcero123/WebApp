import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProductosServiceService } from 'src/app/services/productos.service.service';
declare var $:any;

@Component({
  selector: 'app-registrar-producto-screen',
  templateUrl: './registrar-producto-screen.component.html',
  styleUrls: ['./registrar-producto-screen.component.scss']
})
export class RegistrarProductoScreenComponent {
  //Variables del componente registro
  public editar: boolean = false;
  public user:any = {};
  public producto:any = {};
 //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';
  //Para detectar errores
  public errors:any ={};

  constructor(
    private usuariosService: UsuariosService,
    private productosService: ProductosServiceService,
  ) { }

  ngOnInit(): void {
    this.user = this.usuariosService.esquemaUser();
    this.producto = this.productosService.producto();
    //Imprimir datos en consola
    console.log("User: ", this.user);
  }

  public regresar(){

  }

  //Funciones para password
  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  showPwdConfirmar()
  {
    if(this.inputType_2 == 'password'){
      this.inputType_2 = 'text';
      this.hide_2 = true;
    }
    else{
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

  //Función para detectar el cambio de fecha
  //Para la fecha
  public changeFecha(event :any){
    console.log(event);
    console.log(event.value.toISOString());
    
    this.user.fecha_nacimiento = event.value.toISOString().split("T")[0];
    console.log("Fecha: ", this.user.fecha_nacimiento);
  }

  public registrar(){
    //Validar
    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    //Validar la contraseña
    if(this.user.password == this.user.confirmar_password){
      alert("Vamos a registrar");
    }else{
      alert("Las contraseñas no coinciden");
      this.user.password="";
      this.user.confirmar_password="";
    }
  }
}