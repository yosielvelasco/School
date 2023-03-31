import { Component } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/compat/Auth';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  form={

  nombre: "",
  apellido: "",
  correo: "",
  contrasena: ""
    
   }
     ccontrasena:any
     constructor(private auth: AngularFireAuth, private router: Router) {}

   
     registrarme(){
    if(this.form.nombre != '' && this.form.correo != '' && this.form.contrasena !='' && this.ccontrasena !=''){
   if(this.form.contrasena!=this.ccontrasena){
 alert("Las contrasenas no coinciden")
     }
    else{
   this.adduser(this.form).then((result)=>{ 
if (result){
   alert("Registrado correctamente")
    this.ngOnInit()
    location.reload()
   }
    else{
     alert("Error, intenta nuevamente")
   }
     }) 
 }  
  }
    else{
  alert("favor de completar los datos")
  }
    }
    ngOnInit() {
        throw new Error('Method not implemented.');
    }

adduser(form: any){
    var promise = new Promise((resolve, _reject) => {
    this.auth.createUserWithEmailAndPassword(form.correo, form.contrasena)
    .then((result) => {
    resolve(result)
    })
    .catch(function(error){
    if(error.code == 'auth/invalid-email'){
    alert("Ingresa un correo electronico valido")
    }
    if(error.code == 'auth/email-already-in-use'){
    alert("Ese correo ya se encuentra registrado")
    }
    if(error.code == 'auth/weak-password'){
    alert("La contrasena debe tener al menos 6 caracteres")
    }
    })
    
    })
    
    return promise;
    
    }
    
    
    
    
    }