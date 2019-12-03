import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { RegistrosService } from './registros.service';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  auth: any;

  constructor( private autentificar: AngularFireAuth, private router: Router,
               private registros: RegistrosService, public db: AngularFirestore ) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.autentificar.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
        }).catch(err => rejected(err));
    });

  }

  logout() {
    this.autentificar.auth.signOut().then(auth => {
      this.router.navigate(['/acceder']);
    });
  }

  userUID() {
    return this.autentificar.auth.currentUser.uid;
  }

  registrar(nombre: string, zona: string, ciudad: string, telefono: string, genero: string, categoria: string,
            tipoCuenta: string, dereccion: string, email: string, password: string, lat: number, lon: number, imagen: string) {

    return new Promise ((resolve, reject) => {

      this.autentificar.auth.createUserWithEmailAndPassword(email, password).then(res => {

        // tslint:disable-next-line: max-line-length
        this.registros.usuarioNuevo(res.user.uid, nombre, zona, ciudad, telefono, genero, categoria, tipoCuenta, dereccion, email, lat, lon, imagen);

        resolve(res.user.uid);

      }).catch( err => { console.log(err); reject(err);
      });
    });

  }

}

