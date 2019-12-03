import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../servicios/consultas.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista-promociones',
  templateUrl: './lista-promociones.page.html',
  styleUrls: ['./lista-promociones.page.scss'],
})
export class ListaPromocionesPage implements OnInit {

  public Anuncios: any = [];
  public UsuarioActivo: any = [];

  constructor(public consultas: ConsultasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.UsuarioActivo = params;
    });

    this.consultas.getAnunciosExclusivos(this.UsuarioActivo.Ciudad).subscribe( anuncios => {
        this.Anuncios = anuncios;
    });
  }

  abrirAnuncio(anuncio) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/descripcion'], { queryParams: {Imagen: anuncio.Imagen, Descripcion: anuncio.Descripcion, Titulo: anuncio.Titulo, ImagenUser: this.UsuarioActivo.Imagen, Propietario: anuncio.Propietario} } );
  }

}
