import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ConsultasService } from 'src/app/servicios/consultas.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public Municipios: any = [];
  public Estados: any = [];
  public Categorias: any = [];

  public nombre = '';
  public zona = '';
  public ciudad = '';
  public telefono = '';
  public genero = '';
  public categoria = '';
  public tipoCuenta = '';
  public direccion = '';
  public email = '';
  public Verificadapassword = '';
  public password = '';
  public lat = 0;
  public lon = 0;
  public imagen = '';

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  fileName: string;
  fileSize: number;

  // tslint:disable-next-line: max-line-length
  constructor(private consultas: ConsultasService, public alertController: AlertController, private storage: AngularFireStorage, private camera: Camera, private auth: AutentificacionService, private router: Router, private geolocation: Geolocation) { }

  ngOnInit() {
    this.consultas.getCategorias().then( datos => {
      this.Categorias = datos;
    });
    this.consultas.getEstados().then( datos => {
      this.Estados = datos;
    });
  }

  async AlertaConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Publicacion Guardada',
      buttons: [
         {
          text: 'Confirmado',
          handler: () => {
            this.router.navigate(['/principal-empresa']);
          }
        }
      ]
    });

    await alert.present();
  }
  async AlertaPass() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Las Contraseñas no Coincides',
      buttons: [
         {
          text: 'Confirmado',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }
  async AlertaError() {
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: 'Faltan campos por Completar o Adjuntar Imagen',
      buttons: [
         {
          text: 'Editar',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  registrarUsuario() {

    this.geolocation.getCurrentPosition().then((resp) => {

      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

    }).catch((error) => {
    });


    // tslint:disable-next-line: no-unused-expression // tslint:disable-next-line: max-line-length
    if (this.nombre === '' || this.zona === '' || this.ciudad === '' || this.telefono === '' || this.genero === '' || this.categoria === '' || this.tipoCuenta === '' || this.email === '' || this.Verificadapassword === '', this.imagen === '') {
      this.AlertaError();
    } else {
      if (this.Verificadapassword === this.password) {
        this.auth.registrar(this.nombre, this.zona, this.ciudad, this.telefono, this.genero, this.categoria,
          this.tipoCuenta, this.direccion, this.email, this.Verificadapassword, this.lat, this.lon, this.imagen).then( user => {
          this.router.navigate(['/acceder']);
        }).catch(err => alert(err));
      } else {
        this.AlertaPass();
      }

    }
  }

  uploadFile(event: FileList) {

    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
     console.error('unsupported file type :( ');
     return;
    }

    this.fileName = file.name;
    const path = `perfil/${new Date().getTime()}_${file.name}`;
    this.task = this.storage.upload(path, file);
    this.percentage = this.task.percentageChanges();
    // tslint:disable-next-line: max-line-length
    this.imagen = 'https://firebasestorage.googleapis.com/v0/b/dbs-de-proyectos.appspot.com/o/' + path.replace('perfil/', 'perfil%2F') + '?alt=media';

  }

  cambioEstado( estado ) {

    this.ciudad = '';

    this.consultas.getMunicipios( estado ).then( datos => {
      this.Municipios = datos;
    });

  }

}
