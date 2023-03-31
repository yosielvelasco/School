import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/Auth';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  form={
    correo:"",
    contrasena:""
  }
  constructor(private auth:AngularFireAuth, private router: Router) { }
  ngOnInit(): void {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['/Inicio'])

      }
    })
  }
   //Iniciar Sesion
IniciarSesion(){
  this.auth.signInWithEmailAndPassword(this.form.correo, this.form.contrasena).then((userCredential)=>{
    const user = userCredential.user;
    console.log (user)
    alert("Bienvenid@")
  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
}
  


