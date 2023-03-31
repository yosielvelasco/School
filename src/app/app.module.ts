import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { PracticasComponent } from './practicas/practicas.component';
import { FormsModule } from '@angular/forms';
import { CargarscriptsService } from './cargarscripts.service';
import {AngularFireModule} from '@angular/fire/compat';
/*componentes para rutas*/

import {RouterModule, Routes} from '@angular/router';
import { InfoComponent } from './content/info/info.component';
import { UniversidadesComponent } from './content/universidades/universidades.component';
import { InscripcionUniComponent } from './content/inscripcion-uni/inscripcion-uni.component';
import { ServUniComponent } from './content/serv-uni/serv-uni.component';
import { ContactosComponent } from './content/contactos/contactos.component'


/*declaracion de rutas*/
const appRoute: Routes = [
  {path:'',component: InicioComponent  },
  {path:'Inicio',component: InicioComponent  },
  {path:'Info',component: InfoComponent  },
  {path:'Universidades',component: UniversidadesComponent  },
  {path:'InscripcionUni',component: RegistroComponent  },
  {path:'ServUni',component: ServUniComponent  },
  {path:'Contactos',component: ContactosComponent  },
  {path: 'Sesion', component:SesionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    SesionComponent,
    PracticasComponent,
    InfoComponent,
    UniversidadesComponent,
    InscripcionUniComponent,
    ServUniComponent,
    ContactosComponent
  ],
 
  imports: [
    RouterModule.forRoot(appRoute,{enableTracing: true}),
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDnahQg4PK0UcdRxQZRqbLloFhJUGT1ME0",
  authDomain: "school-e3d2e.firebaseapp.com",
  projectId: "school-e3d2e",
  storageBucket: "school-e3d2e.appspot.com",
  messagingSenderId: "392433728201",
  appId: "1:392433728201:web:3c225a45cbf71c200a6b18",
  measurementId: "G-CG83TT09FY"
 }), 
    RouterModule.forRoot(appRoute,{enableTracing:true})
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
