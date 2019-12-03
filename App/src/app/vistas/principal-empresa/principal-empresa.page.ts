import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../servicios/consultas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrosService } from '../../servicios/registros.service';


@Component({
  selector: 'app-principal-empresa',
  templateUrl: './principal-empresa.page.html',
  styleUrls: ['./principal-empresa.page.scss'],
})
export class PrincipalEmpresaPage implements OnInit {

  public UsuarioActivo: any = [];
  public MisAnuncios: any = [];

  // tslint:disable-next-line: max-line-length
  constructor(private registros: RegistrosService , private route: ActivatedRoute, private consultas: ConsultasService, private router: Router) { }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.UsuarioActivo = params;
        if (this.UsuarioActivo.UID === undefined) {
          console.log('Perdio los datos de Usuario');
          this.consultas.getDatosUsuario().then(usuario => {
            this.UsuarioActivo = usuario;
            this.traerAnuncios();
          });
        } else {
          this.traerAnuncios();
        }

      });

  }

  traerAnuncios() {
    this.consultas.getMisAnuncios().subscribe( anuncios => {
      this.MisAnuncios = anuncios;
    });
  }

  agregarDatosZonas() {
    this.registros.agregarDatosZonas();

  }

  editarAnuncio(anuncio) {

    this.router.navigate(['/editar-publicacion'], { queryParams: anuncio });

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
