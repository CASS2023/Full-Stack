"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
// Crear registros de personas
var persona1 = new Persona_1.Persona('John', 'Doe', 25, '12345678A', new Date(1998, 0, 1), 'Azul', 'Masculino');
var persona2 = new Persona_1.Persona('Jane', 'Smith', 30, '87654321B', new Date(1993, 5, 15), 'Rojo', 'Femenino');
var persona3 = new Persona_1.Persona('Alex', 'Johnson', 40, '56789123C', new Date(1983, 8, 30), 'Verde', 'No binario');
// Agregar direcciones, mails y teléfonos a las personas
var direccion1 = new Direccion_1.Direccion('Calle 1', 123, '1A', '12345', 'Ciudad 1', 'Provincia 1');
var direccion2 = new Direccion_1.Direccion('Calle 2', 456, '2B', '54321', 'Ciudad 2', 'Provincia 2');
var direccion3 = new Direccion_1.Direccion('Calle 3', 789, '3C', '67890', 'Ciudad 3', 'Provincia 3');
persona1.agregarDireccion(direccion1);
persona2.agregarDireccion(direccion2);
persona3.agregarDireccion(direccion3);
persona1.agregarMail('john@example.com');
persona2.agregarMail('jane@example.com');
persona3.agregarMail('alex@example.com');
var telefono1 = new Telefono_1.Telefono('Móvil', '123456789');
var telefono2 = new Telefono_1.Telefono('Casa', '987654321');
var telefono3 = new Telefono_1.Telefono('Trabajo', '555555555');
persona1.agregarTelefono(telefono1);
persona2.agregarTelefono(telefono2);
persona3.agregarTelefono(telefono3);
// Mostrar registros de personas en la consola
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());
// Modificar un registro de persona
var dniBusqueda = '12345678A';
if (persona1.dni === dniBusqueda) {
    var nuevaDireccion = new Direccion_1.Direccion('Nueva Calle', 999, '4D', '11111', 'Nueva Ciudad', 'Nueva Provincia');
    var nuevoMail = 'newjohn@example.com';
    var nuevoTelefono = new Telefono_1.Telefono('Trabajo', '444444444');
    persona1.agregarDireccion(nuevaDireccion);
    persona1.agregarMail(nuevoMail);
    persona1.agregarTelefono(nuevoTelefono);
}
// Mostrar los registros actualizados
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());
