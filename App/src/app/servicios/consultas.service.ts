import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario, Anuncio, DatosChat } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ConsultasService {


  constructor(private autentificar: AngularFireAuth, private router: Router, public db: AngularFirestore) { }

  getAnunciosExclusivos( zona) {
    let referencia = this.db.collection('/Tatto').doc('/Datos').collection('AnuncioExclusivo', ref => ref.where('Zona', '==', zona));
    return referencia.snapshotChanges().pipe(map(anuncios => {
      return anuncios.map(a => {
        const data = a.payload.doc.data() as Anuncio;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  getAnunciosGenerales( zona ) {
    let referencia = this.db.collection('/Tatto').doc('/Datos').collection('AnuncioGeneral', ref => ref.where('Zona', '==', zona));
    return referencia.snapshotChanges().pipe(map(anuncios => {
      return anuncios.map(a => {
        const data = a.payload.doc.data() as Anuncio;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  getAnunciosGeneralesPorCategoria(categoria, zona) {

    if (categoria === 'Todas') {

      let referencia = this.db.collection('/Tatto').doc('/Datos').collection('AnuncioGeneral', ref => ref.where('Zona', '==', zona));
      return referencia.snapshotChanges().pipe(map(anuncios => {
        return anuncios.map(a => {
          const data = a.payload.doc.data() as Anuncio;
          data.id = a.payload.doc.id;
          return data;
        });
      }));

    } else {

      // tslint:disable-next-line: max-line-length
      let referencia = this.db.collection('/Tatto').doc('/Datos').collection('AnuncioGeneral', ref => ref.where('Categoria', '==', categoria));
      return referencia.snapshotChanges().pipe(map(anuncios => {
        return anuncios.map(a => {
          const data = a.payload.doc.data() as Anuncio;
          data.id = a.payload.doc.id;
          return data;
        });
      }));

    }


  }

  getMisAnuncios() {
    // tslint:disable-next-line: max-line-length
    return this.db.collection('/Tatto').doc('/Datos').collection('Anuncios').doc(this.autentificar.auth.currentUser.uid).collection('Anuncios').snapshotChanges().pipe(map(anuncios => {
      return anuncios.map(a => {
        const data = a.payload.doc.data() as Anuncio;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getDatosAnuncio(ID, TipoAnuncio) {

    if (TipoAnuncio === 'true') {

      const referencia = this.db.firestore.doc('/Tatto/Datos/AnuncioExclusivo/' + ID);
      return referencia.get().then(doc => {
        const anuncio = doc.data() as Anuncio;
        return anuncio;
      });

    } else {

      const referencia = this.db.firestore.doc('/Tatto/Datos/AnuncioGeneral/' + ID);
      return referencia.get().then(doc => {
        const anuncio = doc.data() as Anuncio;
        return anuncio;
      });

    }

  }

  getDatosUsuario() {

      const referencia = this.db.firestore.doc('/Tatto/Datos/Usuarios/' + this.autentificar.auth.currentUser.uid);
      return referencia.get().then(doc => {
        const usuario = doc.data() as Usuario;
        usuario.UID = doc.id;
        return usuario;
      });

  }
  getDatosPropietario( propietario ) {

    const referencia = this.db.firestore.doc('/Tatto/Datos/Usuarios/' + propietario);
    return referencia.get().then(doc => {
      const usuario = doc.data() as Usuario;
      return usuario;
    });

  }

  getMunicipios( zona ) {

    const referencia = this.db.firestore.doc('/Municipios/' + zona);
    return referencia.get().then(doc => {
      const municipios = doc.data();
      return municipios;
    });

  }

  getEstados() {

    const referencia = this.db.firestore.doc('/DatosGenerales/Estados');
    return referencia.get().then(doc => {
      const estados = doc.data();
      return estados;
    });

  }

  getCategorias() {

    const referencia = this.db.firestore.doc('/DatosGenerales/Categorias');
    return referencia.get().then(doc => {
      const categorias = doc.data();
      return categorias;
    });

  }
  getListaChats(UsuarioUID) {

    // tslint:disable-next-line: max-line-length
    return this.db.collection('/Tatto').doc('/Datos').collection('DatosEmpresa').doc(UsuarioUID ).collection('/ListaChat').snapshotChanges().pipe(map(anuncios => {
      return anuncios.map(a => {
        const data = a.payload.doc.data() as Anuncio;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

  }

  getChat( UsuarioUID, EmpresaUID ) {

    const referencia = this.db.firestore.doc('/Tatto/Datos/DatosEmpresa/' + EmpresaUID + '/Chat/' + UsuarioUID);
    return referencia.get().then(doc => {
      const data = doc.data();
      return data;
    });

  }
  getChatEmpresa( UsuarioUID, EmpresaUID ){

    const ref = this.db.firestore.doc('/Tatto/Datos/DatosEmpresa/' + UsuarioUID + '/Chat/' + EmpresaUID );
    return ref.get().then(doc => {
      const data = doc.data();
      return data;
    });

  }

  getMensajes( UsuarioUID, EmpresaUID ) {

    // tslint:disable-next-line: max-line-length
    return this.db.collection('/Tatto').doc('/Datos').collection('DatosEmpresa').doc(EmpresaUID).collection('Chat').doc(UsuarioUID).collection('Mensajes').snapshotChanges().pipe(map(datos => {
      return datos.map(a => {
        const data = a.payload.doc.data() as DatosChat;
        return data;
      });
    }));

  }
  getMensajesEmpresa( UsuarioUID, EmpresaUID ) {

    // tslint:disable-next-line: max-line-length
    return this.db.collection('/Tatto').doc('/Datos').collection('DatosEmpresa').doc(UsuarioUID).collection('Chat').doc(EmpresaUID).collection('Mensajes').snapshotChanges().pipe(map(datos => {
      return datos.map(a => {
        const data = a.payload.doc.data() as DatosChat;
        return data;
      });
    }));

  }


}
