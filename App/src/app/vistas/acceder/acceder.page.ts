import { Component, OnInit } from '@angular/core';

import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/servicios/consultas.service';

import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-acceder',
  templateUrl: './acceder.page.html',
  styleUrls: ['./acceder.page.scss'],
})
export class AccederPage implements OnInit {

  public UsuarioActivo: any = [];
  email: string;
  password: string;

  // tslint:disable-next-line: max-line-length
  constructor(private statusBar: StatusBar, private autentificacionService: AutentificacionService, public router: Router, private consultas: ConsultasService) { }

  ngOnInit() {
    this.statusBar.overlaysWebView(true);

    // set status bar to white
    this.statusBar.backgroundColorByHexString('#2379EA');
  }

  iniciarSesion() {
    this.autentificacionService.login(this.email, this.password).then(res => {

      this.consultas.getDatosUsuario().then(datos => {

        this.UsuarioActivo = datos;

        if (datos.TipoCuenta === 'EMPRESA') {
             this.router.navigate(['/principal-empresa'], { queryParams: this.UsuarioActivo });
        } else {
            this.router.navigate(['/principal'], { queryParams: this.UsuarioActivo });
        }

      });

    }).catch(err => alert('los datos son correctos o crea tu cuenta'));
  }

}
