"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo) {
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
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.obtenerDatos = function () {
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
            notas: this.notas
        };
    };
    return Persona;
}());
exports.Persona = Persona;
