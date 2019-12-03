import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from 'src/app/servicios/consultas.service';
import { RegistrosService } from 'src/app/servicios/registros.service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
})
export class DescripcionPage implements OnInit {

  public Anuncio: any = [];
  public Imagen: string;
  public ImagenUser: string;
  public ID: string;
  public Descripcion: string;
  public Propietario: string;
  public UsuarioUID: string;
  public UsuarioNombre: string;
  public TipoAnuncio: string;


  public DatosPropietario: any = [];
  public DatosChat: any[];

  // tslint:disable-next-line: max-line-length
  constructor(private callNumber: CallNumber, private launchNavigator: LaunchNavigator, private router: Router, private route: ActivatedRoute, private consultas: ConsultasService, private registros: RegistrosService) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.Imagen = params['Imagen'] || '';
        this.ID = params['ID'] || '';
        this.TipoAnuncio = params['TipoAnuncio'] || '';
        this.ImagenUser = params['ImagenUser'] || '';
        this.Propietario = params['Propietario'] || '';
        this.UsuarioUID = params['UID'] || '';
        this.UsuarioNombre = params['NombreUsuario'] || '';

      });

    this.consultas.getDatosPropietario(this.Propietario).then(datos => {

      this.DatosPropietario = datos;

    });

    this.consultas.getDatosAnuncio(this.ID, this.TipoAnuncio).then( anuncio => {

      this.Anuncio = anuncio;

    });

  }

  abrirChat() {
    this.consultas.getChat(this.UsuarioUID, this.Propietario).then(datos => {

      if (datos.UsuarioUNO === this.UsuarioUID) {

        this.router.navigate(['/chat'], { queryParams: {UsuarioUID: this.UsuarioUID, PropietarioUID: this.Propietario} } );

      }

    }).catch(err => {
      // tslint:disable-next-line: max-line-length
      this.registros.setChatList(this.UsuarioUID, this.ImagenUser, this.UsuarioNombre, this.Propietario,  this.DatosPropietario.Imagen, this.DatosPropietario.Nombre);

      this.router.navigate(['/chat'], { queryParams: {UsuarioUID: this.UsuarioUID, PropietarioUID: this.Propietario} } );});

  }

  abrirMaps() {
    console.log(this.DatosPropietario.Direccion);

    // tslint:disable-next-line: max-line-length
    this.launchNavigator.navigate(' ' + this.DatosPropietario.Direccion + ', ' + this.DatosPropietario.Ciudad + ' ')
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  abrirLlamadas() {
    this.callNumber.callNumber(this.Anuncio.Telefono, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
