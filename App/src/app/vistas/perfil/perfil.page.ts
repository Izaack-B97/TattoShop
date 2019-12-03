import { Component, OnInit, Input } from '@angular/core';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from 'src/app/servicios/consultas.service';
import { RegistrosService } from '../../servicios/registros.service';

import { AlertController } from '@ionic/angular';
import { ActualizacionesService } from '../../servicios/actualizaciones.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public Imagen: string;
  public Zonas: any = [];
  public Ciudades: any = [];
  public lat = 0;
  public lon = 0;
  public ciudad = '';
  public zona = '';
  public UsuarioActivo: any = [];

  // tslint:disable-next-line: max-line-length
  constructor(public alertController: AlertController, private actualizaciones: ActualizacionesService, private consultas: ConsultasService, public auth: AutentificacionService, public registros: RegistrosService, private emailComposer: EmailComposer, private geolocation: Geolocation, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.Imagen = params['Imagen'] || '';
      });

    this.consultas.getDatosUsuario().then(usuario => {
      this.UsuarioActivo = usuario;
      this.ciudad = this.UsuarioActivo.Ciudad;
      this.zona = this.UsuarioActivo.Zona;
    });

    this.consultas.getEstados().then( datos => {
      this.Ciudades = datos;
    });

  }

  async AlertaConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Datos Actualizados',
      buttons: [
         {
          text: 'LISTO',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  Actualizar() {

    this.UsuarioActivo.Ciudad = this.ciudad;
    this.UsuarioActivo.Zona = this.zona;

    console.log(this.UsuarioActivo);

    this.actualizaciones.ActualizarDatos(this.UsuarioActivo);

    this.AlertaConfirmacion();

  }

  cerrarSesion() {
    this.auth.logout();
  }

  enviarCorreo() {

    let email = {
      to: 'info@publigram.biz',
      subject: 'Soporte Tecnico Via Email',
      body: ''
      ,
      isHtml: true
    };
    this.emailComposer.open(email);

  }
  cambioEstado( ciudad ) {

    this.consultas.getMunicipios( ciudad ).then( datos => {
      this.Zonas = datos;
    });

    this.zona = '';

  }


}
