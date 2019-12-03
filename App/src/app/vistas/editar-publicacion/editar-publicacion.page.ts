import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RegistrosService } from '../../servicios/registros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { ConsultasService } from 'src/app/servicios/consultas.service';
import { ActualizacionesService } from 'src/app/servicios/actualizaciones.service';

@Component({
  selector: 'app-editar-publicacion',
  templateUrl: './editar-publicacion.page.html',
  styleUrls: ['./editar-publicacion.page.scss'],
})
export class EditarPublicacionPage implements OnInit {

  public Anuncio: any = [];
  public DatosAnuncio: any = [];
  public UsuarioActivo: any = [];
  public Zonas: any = [];
  public Ciudades: any = [];
  public Categorias: any = [];
  public ID: string;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  fileName: string;
  fileSize: number;

  // tslint:disable-next-line: max-line-length
  constructor( private actualizaciones: ActualizacionesService, private consultas: ConsultasService, private route: ActivatedRoute, private auth: AutentificacionService, public alertController: AlertController, private router: Router, private storage: AngularFireStorage, private database: AngularFirestore, private registos: RegistrosService) { }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.Anuncio = params;
      this.ID = this.Anuncio.id;

    });


    this.consultas.getDatosAnuncio(this.Anuncio.id, this.Anuncio.Exclusivo).then(anuncio => {

      this.Anuncio = anuncio;

    });

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
    this.Anuncio.Imagen = 'https://firebasestorage.googleapis.com/v0/b/dbs-de-proyectos.appspot.com/o/' + path.replace('TatuajesFotos/', 'TatuajesFotos%2F') + '?alt=media';

  }

  async AlertaConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Publicacion Actualizada',
      buttons: [
         {
          text: 'Actualizada',
          handler: () => {
            this.router.navigate(['/principal-empresa']);
          }
        }
      ]
    });

    await alert.present();
  }

  cambioEstado() {

    this.consultas.getMunicipios( this.Anuncio.Estado ).then( datos => {
      this.Zonas = datos;
    });

  }

  guardarCambios() {

    this.actualizaciones.actualizarPublicacion(this.ID, this.Anuncio);
    this.AlertaConfirmacion();

  }

}
