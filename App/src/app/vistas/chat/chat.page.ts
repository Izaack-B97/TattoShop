import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from 'src/app/servicios/consultas.service';
import { RegistrosService } from '../../servicios/registros.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public DatosChat: any = [];
  public DatosPropietario: any = [];
  public UsuarioUID: string;
  public PropietarioUID: string;
  public Mensajes: any[];
  public mensaje: string;
  public Clase: string;

  constructor(private consultas: ConsultasService, private registros: RegistrosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.UsuarioUID = params['UsuarioUID'] || '';
        this.PropietarioUID = params['PropietarioUID'] || '';

        this.consultas.getDatosPropietario(this.PropietarioUID).then(datos => {

          this.DatosPropietario = datos;

        });
        this.consultas.getChat(this.UsuarioUID, this.PropietarioUID).then(datos => {
          this.DatosChat = datos;
          if (this.DatosChat.UsuarioUNO === this.UsuarioUID) {
            this.Clase = 'msg-box-sender';
          } else {
            this.Clase = 'msg-box-receiver';
          }
        });
        this.consultas.getMensajes(this.UsuarioUID, this.PropietarioUID).subscribe(datos => {
          this.Mensajes = datos;

        });


      });

  }

  enviarMensaje() {

    this.registros.setMensaje(this.UsuarioUID, this.PropietarioUID, this.mensaje, this.Clase);
    this.mensaje = '';

  }

}
