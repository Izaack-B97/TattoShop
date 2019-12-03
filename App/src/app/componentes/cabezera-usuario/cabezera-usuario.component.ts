import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabezera-usuario',
  templateUrl: './cabezera-usuario.component.html',
  styleUrls: ['./cabezera-usuario.component.scss'],
})
export class CabezeraUsuarioComponent implements OnInit {

  @Input() Nombre: string;
  @Input() Imagen: string;

  constructor() { }

  ngOnInit() {}

}
