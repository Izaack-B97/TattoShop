import { Component, OnInit } from '@angular/core';

import { AutentificacionService } from '../servicios/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  email: string;
  password: string;

  constructor(private autentificacionService: AutentificacionService, public router: Router) {}

  ngOnInit() {
  }

  iniciarSesion() {
    this.autentificacionService.login(this.email, this.password).then(res => {
      this.router.navigate(['/principal']);
    }).catch(err => alert('los datos son correctos o crea tu cuenta'));
  }

}
