import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from 'src/app/servicios/consultas.service';

@Component({
  selector: 'app-lista-chat-empresa',
  templateUrl: './lista-chat-empresa.page.html',
  styleUrls: ['./lista-chat-empresa.page.scss'],
})
export class ListaChatEmpresaPage implements OnInit {

  public UsuarioActivo: any = [];
  public DatosChats: any = [];

  constructor(private consultas: ConsultasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.UsuarioActivo = params;
      });

    this.consultas.getListaChats(this.UsuarioActivo.UID).subscribe(datos => {
      this.DatosChats = datos;
    });
  }

  abrirChat(Usuario) {
        this.router.navigate(['/chat-empresa'], { queryParams: {UsuarioUID: this.UsuarioActivo.UID, PropietarioUID: Usuario } } );
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
