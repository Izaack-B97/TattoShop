import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor( public db: AngularFirestore) { }

  usuarioNuevo(uid: string, nombre: string, zona: string, ciudad: string,
               telefono: string, genero: string, categoria: string, tipoCuenta: string, direccion: string,
               email: string, lat: number, lon: number, imagen: string) {
        this.db.collection('/Tatto').doc('/Datos').collection('/Usuarios').doc(uid).set({
          Nombre: nombre,
          Zona: zona,
          Ciudad: ciudad,
          Telefono: telefono,
          Genero: genero,
          Categoria: categoria,
          TipoCuenta: tipoCuenta,
          Direccion: direccion,
          Email: email,
          Lat: lat,
          Lon: lon,
          Imagen: imagen
        });
  }

  // tslint:disable-next-line: max-line-length
  publicacionNueva( titulo: string, descripcion: string, descripcionEspecifica: string, fechaInicio: string, exclusivo: boolean, categoria: string, zona: string, ciudad: string, alcance: string, imagen: string, lat: string, lon: string, activo: string, userUID: string, direccion: string, telefono: string) {

    if (exclusivo === true) {
          this.db.collection('/Tatto').doc('/Datos').collection('/AnuncioExclusivo').add({
            Titulo: titulo,
            Descripcion: descripcion,
            DescripcionEspecifica: descripcionEspecifica,
            FechaInicio: fechaInicio,
            Exclusivo: exclusivo,
            Categoria: categoria,
            Zona: zona,
            Ciudad: ciudad,
            Alcance: alcance,
            Imagen: imagen,
            Lat: lat,
            Lon: lon,
            Activo: activo,
            Propietario: userUID,
            Direccion: direccion,
            Telefono: telefono
            }).then(data => {
              this.db.collection('/Tatto').doc('/Datos').collection('/Anuncios').doc(userUID).collection('/Anuncios').doc(data.id).set({
                Titulo: titulo,
                Descripcion: descripcion,
                Imagen: imagen,
                Lat: lat,
                Lon: lon,
                Activo: activo,
                Exclusivo: exclusivo,
                Propietario: userUID
              }).catch(err => console.log('dentro de Anuncios id Aununcios' + err));
            }).catch(err => console.log(err));
        } else {
          this.db.collection('/Tatto').doc('/Datos').collection('/AnuncioGeneral').add({
            Titulo: titulo,
            Descripcion: descripcion,
            DescripcionEspecifica: descripcionEspecifica,
            FechaInicio: fechaInicio,
            Exclusivo: exclusivo,
            Categoria: categoria,
            Zona: zona,
            Ciudad: ciudad,
            Alcance: alcance,
            Imagen: imagen,
            Lat: lat,
            Lon: lon,
            Activo: activo,
            Propietario: userUID,
            Direccion: direccion,
            Telefono: telefono
            }).then(data => {
              this.db.collection('/Tatto').doc('/Datos').collection('/Anuncios').doc(userUID).collection('/Anuncios').doc(data.id).set({
                Titulo: titulo,
                Descripcion: descripcion,
                Imagen: imagen,
                Lat: lat,
                Lon: lon,
                Activo: activo,
                Exclusivo: exclusivo,
                Propietario: userUID
              }).catch(err => console.log('dentro de Anuncios id Aununcios' + err));
            }).catch(err => console.log(err));
        }
  }

  setChatList(usuarioUID, usuarioImagen, usuarioNombre, propietarioUID, propietarioImagen, propietarioNombre) {
    this.db.collection('/Tatto').doc('/Datos').collection('DatosEmpresa/' + propietarioUID + '/Chat').doc(usuarioUID).set({
    UsuarioUNO: usuarioUID,
    UsuarioUNOImagen: usuarioImagen,
    UsuarioUNONombre: usuarioNombre,
    UsuarioDOS: propietarioUID,
    UsuarioDOSImagen: propietarioImagen,
    UsuarioDOSNombre: propietarioNombre,
    }).then(res => {

      this.db.collection('/Tatto').doc('/Datos').collection('DatosEmpresa/' + propietarioUID + '/ListaChat').doc(usuarioUID).set({
        Usuario: usuarioUID,
        UsuarioImagen: usuarioImagen,
        UsuarioNombre: usuarioNombre,
        });

      this.db.collection('/Tatto').doc('/Datos').collection('DatosUsuario/' + usuarioUID + '/ListaChat').doc(propietarioUID).set({
        Usuario: propietarioUID,
        UsuarioImagen: propietarioImagen,
        UsuarioNombre: propietarioNombre,
        });

    });
}

setMensaje(usuarioUID, propietarioUID, mensaje, clase) {

  const path1 = `${new Date().getUTCFullYear()}`;
  const path2 = `${new Date().getUTCMonth()}`;
  const path3 = `${new Date().getUTCDate()}`;
  const path4 = `${new Date().getUTCHours()}`;
  const path5 = `${new Date().getUTCMinutes()}`;
  const path6 = `${new Date().getUTCMilliseconds()}`;

  // tslint:disable-next-line: max-line-length
  this.db.collection('/Tatto').doc('/Datos').collection('DatosEmpresa/' + propietarioUID + '/Chat').doc(usuarioUID).collection('Mensajes').doc( path1 + '_' + path2 + '_' + path3 + '_' + path4 + '_' + path5 + '_' + path6 ).set({
    Usuario: usuarioUID,
    Mensaje: mensaje,
    Clase: clase,
  });
}
setMensajeEmpresa(usuarioUID, propietarioUID, mensaje, clase) {
  const path1 = `${new Date().getUTCFullYear()}`;
  const path2 = `${new Date().getUTCMonth()}`;
  const path3 = `${new Date().getUTCDate()}`;
  const path4 = `${new Date().getUTCHours()}`;
  const path5 = `${new Date().getUTCMinutes()}`;
  const path6 = `${new Date().getUTCMilliseconds()}`;

  // tslint:disable-next-line: max-line-length
  this.db.collection('/Tatto').doc('/Datos').collection('DatosEmpresa/' + usuarioUID + '/Chat').doc(propietarioUID).collection('Mensajes').doc( path1 + '_' + path2 + '_' + path3 + '_' + path4 + '_' + path5 + '_' + path6 ).set({
    Usuario: usuarioUID,
    Mensaje: mensaje,
    Clase: clase,
  });
}

ActualizarDatos( UsuarioActivo ) {
  this.db.collection('/Tatto').doc('/Datos').collection('/Usuarios').doc(UsuarioActivo.UID).update({
    Nombre: UsuarioActivo.Nombre,
    Zona: UsuarioActivo.Zona,
    Ciudad: UsuarioActivo.Ciudad,
    Telefono: UsuarioActivo.Telefono,
    Genero: UsuarioActivo.Genero,
    Categoria: UsuarioActivo.Categoria,
    TipoCuenta: UsuarioActivo.TipoCuenta,
    Email: UsuarioActivo.Email,
    Lat: UsuarioActivo.Lat,
    Lon: UsuarioActivo.Lon,
    Imagen: UsuarioActivo.Imagen
  });
}

agregarDatosZonas() {
  this.db.collection('/Tatto').doc('/Datos').collection('/Municipios').doc('/Monclova').set({
    Municipio: [
      'Castaños',
      'Frontera',
      'Monclova',
      'Muzquiz',
      'Nava',
      'Nueva Rosita',
      'Piedras Negras',
      'Pruebas',
      'Sabinas',
      'San Buenaventura',
    ]
  });
  this.db.collection('/Tatto').doc('/Datos').collection('/Municipios').doc('/Monterrey').set({
    Municipio: [
      'Anahuac',
      'Centro',
      'Contry',
      'Cumbre',
      'Escobedo',
      'Guadalupe',
      'Huinala',
      'Las Americas',
      'Las Puentes',
      'Linda Vista',
      'Miltras',
      'Poniente',
      'San Jeronimo',
      'Sendero',
      'Solidaridad',
      'valle',
    ]
  });
  this.db.collection('/Tatto').doc('/Datos').collection('/Municipios').doc('/Saltillo').set({
    Municipio: [
      'Angostura',
      'Arteaga',
      'Derramadero',
      'Escorial y Analco',
      'Mirasierra',
      'Parque Zapa',
      'Ramos Arizpe',
      'Saltillo Centro',
      'Saltillo Norte',
      'Saltillo Oriente',
      'Saltillo Poniente',
      'Saltillo Sur',
      'Santa Maria',
    ]
  });
  this.db.collection('/Tatto').doc('/Datos').collection('/Municipios').doc('/Texas').set({
    Municipio: [
      'Austin',
      'Brownscille',
      'Edinburg',
      'El Paso',
      'Harlingen',
      'Hidalgo',
      'Laredo',
      'McAllen',
      'Mercedes',
      'Mission',
      'Pharr',
      'Rio Grande',
      'San Antonio',
    ]
  });
}

agregarDatosZona2s() {
  this.db.collection('/Tatto').doc('/Datos').collection('/Municipio').doc('/Monterrey').set({
    Municipio: [
      'Anahuac',
      'Centro',
      'Contry',
      'Cumbre',
      'Escobedo',
      'Guadalupe',
      'Huinala',
      'Las Americas',
      'Las Puentes',
      'Linda Vista',
      'Miltras',
      'Poniente',
      'San Jeronimo',
      'Sendero',
      'Solidaridad',
      'valle',
    ]
  });
}

}
