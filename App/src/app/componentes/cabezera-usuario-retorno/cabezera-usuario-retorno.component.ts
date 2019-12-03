import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabezera-usuario-retorno',
  templateUrl: './cabezera-usuario-retorno.component.html',
  styleUrls: ['./cabezera-usuario-retorno.component.scss'],
})
export class CabezeraUsuarioRetornoComponent implements OnInit {

  @Input() titulo: string;
  @Input() Imagen: string;

  constructor() { }

  ngOnInit() {}

}
