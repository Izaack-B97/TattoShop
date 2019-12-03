import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RegistrosService } from '../../servicios/registros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { ConsultasService } from 'src/app/servicios/consultas.service';


@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.page.html',
  styleUrls: ['./crear-publicacion.page.scss'],
})
export class CrearPublicacionPage implements OnInit {

  public UsuarioActivo: any = [];
  public Zonas: any = [];
  public Ciudades: any = [];
  public Categorias: any = [];

  @Input() userUID = '';
  @Input() lat = '';
  @Input() lon = '';
  @Input() zona = '';
  @Input() ciudad = '';
  @Input() categoria = '';

  public titulo = '';
  public descripcion = '';
  public descripcionEspecifica = '';
  public fechaInicio = '';
  public exclusivo = false;
  public activo = 'si';
  public alcance = '3000';
  public imagen = 'https://firebasestorage.googleapis.com/v0/b/dbs-de-proyectos.appspot.com/o/empty.jpg?alt=media';
  public vacia = 'https://firebasestorage.googleapis.com/v0/b/dbs-de-proyectos.appspot.com/o/empty.jpg?alt=media';
  public telefono = '';
  public direccion = '';

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  fileName: string;
  fileSize: number;


  // tslint:disable-next-line: max-line-length
  constructor( private consultas: ConsultasService, private route: ActivatedRoute, private auth: AutentificacionService, public alertController: AlertController, private router: Router, private storage: AngularFireStorage, private database: AngularFirestore, private registos: RegistrosService) {
   }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.UsuarioActivo = params;
      this.zona = this.UsuarioActivo.Zona;
      this.categoria = this.UsuarioActivo.Categoria;
      this.ciudad = this.UsuarioActivo.Ciudad;
      this.direccion = this.UsuarioActivo.Direccion;
      this.telefono = this.UsuarioActivo.Telefono;
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
  async AlertaError() {
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: 'Faltan campos por Completar',
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

  crearPublicacion() {
    if (  this.titulo === '' || this.descripcion === '' || this.direccion === '' || this.telefono === '') {
      this.AlertaError();
    } else {
      // tslint:disable-next-line: max-line-length
      this.registos.publicacionNueva(this.titulo, this.descripcion, this.descripcionEspecifica, this.fechaInicio, this.exclusivo, this.categoria, this.zona, this.ciudad, this.alcance, this.imagen, this.lat, this.lon, this.activo, this.UsuarioActivo.UID, this.direccion, this.telefono);
      this.AlertaConfirmacion();
    }

  }

  uploadFile(event: FileList) {

    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
     console.error('unsupported file type :( ');
     return;
    }

    this.fileName = file.name;
    const path = `TatuajesFotos/${new Date().getTime()}_${file.name}`;
    this.task = this.storage.upload(path, file);
    this.percentage = this.task.percentageChanges();
    // tslint:disable-next-line: max-line-length
    this.imagen = 'https://firebasestorage.googleapis.com/v0/b/dbs-de-proyectos.appspot.com/o/' + path.replace('TatuajesFotos/', 'TatuajesFotos%2F') + '?alt=media';

  }

  cambioEstado( ciudad ) {

    this.zona = '';

    this.consultas.getMunicipios( ciudad ).then( datos => {
      this.Zonas = datos;
    });

  }

  irPerfil() {
    this.router.navigate(['/perfil'], { queryParams: this.UsuarioActivo });
  }

  crear() {
    this.router.navigate(['/crear-publicacion'], { queryParams: this.UsuarioActivo });
  }

  chats() {
    this.router.navigate(['/lista-chat-empresa'], { queryParams: this.UsuarioActivo });
  }

  principalEmpresa() {
    this.router.navigate(['/principal-empresa'], { queryParams: this.UsuarioActivo });
  }

}
