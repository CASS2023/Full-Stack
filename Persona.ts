import {Direccion} from './Direccion';
import { Telefono } from './Telefono';
export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleaños: Date;
    colorFavorito: string;
    sexo: string;
    direcciones: Direccion[];
    mails: string[];
    telefonos: Telefono[];
    notas: string;
  
    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date, colorFavorito: string, sexo: string) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.dni = dni;
      this.cumpleaños = cumpleaños;
      this.colorFavorito = colorFavorito;
      this.sexo = sexo;
      this.direcciones = [];
      this.mails = [];
      this.telefonos = [];
      this.notas = '';
    }
  
    agregarDireccion(direccion: Direccion) {
      this.direcciones.push(direccion);
    }
  
    agregarMail(mail: string) {
      this.mails.push(mail);
    }
  
    agregarTelefono(telefono: Telefono) {
      this.telefonos.push(telefono);
    }
  
    obtenerDatos() {
      return {
        nombre: this.nombre,
        apellidos: this.apellidos,
        edad: this.edad,
        dni: this.dni,
        cumpleaños: this.cumpleaños,
        colorFavorito: this.colorFavorito,
        sexo: this.sexo,
        direcciones: this.direcciones,
        mails: this.mails,
        telefonos: this.telefonos,
        notas: this.notas,
      };
    }
  }
  