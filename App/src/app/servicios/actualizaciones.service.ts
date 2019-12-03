import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActualizacionesService {

  constructor(private autentificar: AngularFireAuth, public db: AngularFirestore) { }


  ActualizarDatos( UsuarioActivo ) {
    this.db.collection('/Tatto').doc('/Datos').collection('/Usuarios').doc(UsuarioActivo.UID).update({
      Nombre: UsuarioActivo.Nombre,
      Zona: UsuarioActivo.Zona,
      Ciudad: UsuarioActivo.Ciudad,
      Telefono: UsuarioActivo.Telefono,
      Genero: UsuarioActivo.Genero,
      Categoria: UsuarioActivo.Categoria,
      Exclusivo: UsuarioActivo.TipoCuenta,
      Direccion: UsuarioActivo.Direccion,
      Email: UsuarioActivo.Email,
      Lat: UsuarioActivo.Lat,
      Lon: UsuarioActivo.Lon,
      Imagen: UsuarioActivo.Imagen
    });
  }

  // tslint:disable-next-line: max-line-length
  actualizarPublicacion(id,  Anuncio ) {

    if (Anuncio.Exclusivo === true) {
          this.db.collection('/Tatto').doc('/Datos').collection('/AnuncioExclusivo').doc(id).update({
            Titulo: Anuncio.Titulo,
            Descripcion: Anuncio.Descripcion,
            DescripcionEspecifica: Anuncio.DescripcionEspecifica,
            FechaInicio: Anuncio.FechaInicio,
            Exclusivo: Anuncio.Exclusivo,
            Categoria: Anuncio.Categoria,
            Zona: Anuncio.Zona,
            Ciudad: Anuncio.Ciudad,
            Alcance: Anuncio.Alcance,
            Imagen: Anuncio.Imagen,
            Lat: Anuncio.Lat,
            Lon: Anuncio.Lon,
            Activo: Anuncio.Activo,
            Propietario: Anuncio.Propietario,
            Direccion: Anuncio.Direccion,
            Telefono: Anuncio.Telefono
            });

          this.db.collection('/Tatto').doc('/Datos').collection('/Anuncios').doc(Anuncio.Propietario).collection('/Anuncios').doc(id).set({
            Titulo: Anuncio.Titulo,
            Descripcion: Anuncio.Descripcion,
            Imagen: Anuncio.Imagen,
            Lat: Anuncio.Lat,
            Lon: Anuncio.Lon,
            Activo: Anuncio.Activo,
            Exclusivo: Anuncio.Exclusivo,
            Propietario: Anuncio.Propietario
          });
        } else {
          this.db.collection('/Tatto').doc('/Datos').collection('/AnuncioGeneral').doc(id).update({
            Titulo: Anuncio.Titulo,
            Descripcion: Anuncio.Descripcion,
            DescripcionEspecifica: Anuncio.DescripcionEspecifica,
            FechaInicio: Anuncio.FechaInicio,
            Exclusivo: Anuncio.Exclusivo,
            Categoria: Anuncio.Categoria,
            Zona: Anuncio.Zona,
            Ciudad: Anuncio.Ciudad,
            Alcance: Anuncio.Alcance,
            Imagen: Anuncio.Imagen,
            Lat: Anuncio.Lat,
            Lon: Anuncio.Lon,
            Activo: Anuncio.Activo,
            Propietario: Anuncio.Propietario,
            Direccion: Anuncio.Direccion,
            Telefono: Anuncio.Telefono
            });
          this.db.collection('/Tatto').doc('/Datos').collection('/Anuncios').doc(Anuncio.Propietario).collection('/Anuncios').doc(id).set({
            Titulo: Anuncio.Titulo,
            Descripcion: Anuncio.Descripcion,
            Imagen: Anuncio.Imagen,
            Lat: Anuncio.Lat,
            Lon: Anuncio.Lon,
            Activo: Anuncio.Activo,
            Exclusivo: Anuncio.Exclusivo,
            Propietario: Anuncio.Propietario
          }).catch(err => console.log('dentro de Anuncios id Aununcios' + err));
        }
  }


}
