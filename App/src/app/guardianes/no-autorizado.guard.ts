import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { ConsultasService } from '../servicios/consultas.service';

@Injectable({
  providedIn: 'root'
})
export class NoAutorizadoGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router, public consultas: ConsultasService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.auth.authState.pipe(map( auth => {

      if (isNullOrUndefined(auth)) {
        return true;
      } else {

        this.consultas.getDatosUsuario().then(datos => {

          if (datos.TipoCuenta === 'EMPRESA') {

               this.router.navigate(['/principal-empresa']);

          } else {

              this.router.navigate(['/principal']);

          }
        });

        return false;
      }

    }));

  }
}
