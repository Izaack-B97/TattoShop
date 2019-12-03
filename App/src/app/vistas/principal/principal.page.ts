import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../servicios/consultas.service';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  public UsuarioActivo: any = [];

  public categoria = '';
  public Categorias: any = [];

  public AnunciosExclusivos: any = [];

  public AnunciosGenerales: any = [];

  // tslint:disable-next-line: max-line-length
  constructor(private statusBar: StatusBar, private route: ActivatedRoute, public autentificacion: AutentificacionService, public consultas: ConsultasService, private router: Router) { }

  ngOnInit() {
    this.statusBar.overlaysWebView(true);

    // set status bar to white
    this.statusBar.backgroundColorByHexString('#2379EA');

    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.UsuarioActivo = params;
        if (this.UsuarioActivo.UID === undefined) {
          console.log('Perdio los datos de Usuario');
          this.consultas.getDatosUsuario().then(usuario => {
            this.UsuarioActivo = usuario;
            this.traerAnuncios(this.UsuarioActivo.Zona);
          });
        } else {
          this.traerAnuncios(this.UsuarioActivo.Zona);
        }

      });

    this.consultas.getCategorias().then( datos => {
      this.Categorias = datos;
    });

  }

  traerAnuncios(Zona) {
    this.consultas.getAnunciosExclusivos(Zona).subscribe( anuncios => {
      this.AnunciosExclusivos = anuncios;
    });
    this.consultas.getAnunciosGenerales(Zona).subscribe( anuncios => {
          this.AnunciosGenerales = anuncios;
    });
  }

  irPerfil() {
    this.router.navigate(['/perfil'], { queryParams: this.UsuarioActivo });
  }

  abrirLista() {
    this.router.navigate(['/lista-promociones'], { queryParams: this.UsuarioActivo });
  }

  abrirAnuncio(anuncio) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/descripcion'], { queryParams: {Imagen: anuncio.Imagen, ID: anuncio.id, TipoAnuncio: anuncio.Exclusivo, ImagenUser: this.UsuarioActivo.Imagen, Propietario: anuncio.Propietario, UID: this.UsuarioActivo.UID, NombreUsuario: this.UsuarioActivo.Nombre } } );
  }

  cambioCategoria(categoria) {
    this.consultas.getAnunciosGeneralesPorCategoria(categoria, this.UsuarioActivo.Ciudad).subscribe( anuncios => {
      this.AnunciosGenerales = anuncios;
    });
  }

}
