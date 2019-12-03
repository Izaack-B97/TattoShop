export interface Anuncio {
    id: string;
    Titulo: string;
    Descripcion: string;
    DescripcionEspecifica: string;
    FechaInicio: string;
    Exclusivo: string;
    Categoria: string;
    Ciudad: string;
    Zona: string;
    Alcance: string;
    Imagen: string;
    Lat: string;
    Lon: string;
    Activo: string;
    Propietario: string;
    Telefono: string;
    Direccion: string;
}

export interface Usuario {
    UID: string;
    Categoria: string;
    Ciudad: string;
    Zona: string;
    Genero: string;
    Imagen: string;
    Lat: string;
    Lon: string;
    Nombre: string;
    Telefono: string;
    TipoCuenta: string;
    Direccion: string;
  }

export interface DatosImagen {
  name: string;
  filepath: string;
  size: number;
  }

export interface Municipios {
  id: string;
  }

export interface DatosChat {
  UsuarioUNO: string;
  UsuarioUNOImagen: string;
  UsuarioUNONombre: string;
  UsuarioDOS: string;
  UsuarioDOSImagen: string;
  UsuarioDOSNombre: string;
  Mensajes: any [];
}
