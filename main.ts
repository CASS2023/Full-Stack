import { Persona } from './Persona';
import { Direccion } from './Direccion';
import { Telefono } from './Telefono';

// Crear registros de personas
const persona1 = new Persona('John', 'Doe', 25, '12345678A', new Date(1998, 0, 1), 'Azul', 'Masculino');
const persona2 = new Persona('Jane', 'Smith', 30, '87654321B', new Date(1993, 5, 15), 'Rojo', 'Femenino');
const persona3 = new Persona('Alex', 'Johnson', 40, '56789123C', new Date(1983, 8, 30), 'Verde', 'No binario');

// Agregar direcciones, mails y teléfonos a las personas
const direccion1 = new Direccion('Calle 1', 123, '1A', '12345', 'Ciudad 1', 'Provincia 1');
const direccion2 = new Direccion('Calle 2', 456, '2B', '54321', 'Ciudad 2', 'Provincia 2');
const direccion3 = new Direccion('Calle 3', 789, '3C', '67890', 'Ciudad 3', 'Provincia 3');

persona1.agregarDireccion(direccion1);
persona2.agregarDireccion(direccion2);
persona3.agregarDireccion(direccion3);

persona1.agregarMail('john@example.com');
persona2.agregarMail('jane@example.com');
persona3.agregarMail('alex@example.com');

const telefono1 = new Telefono('Móvil', '123456789');
const telefono2 = new Telefono('Casa', '987654321');
const telefono3 = new Telefono('Trabajo', '555555555');

persona1.agregarTelefono(telefono1);
persona2.agregarTelefono(telefono2);
persona3.agregarTelefono(telefono3);

// Mostrar registros de personas en la consola
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());

// Modificar un registro de persona
const dniBusqueda = '12345678A';
if (persona1.dni === dniBusqueda) {
  const nuevaDireccion = new Direccion('Nueva Calle', 999, '4D', '11111', 'Nueva Ciudad', 'Nueva Provincia');
  const nuevoMail = 'newjohn@example.com';
  const nuevoTelefono = new Telefono('Trabajo', '444444444');

  persona1.agregarDireccion(nuevaDireccion);
  persona1.agregarMail(nuevoMail);
  persona1.agregarTelefono(nuevoTelefono);
}

// Mostrar los registros actualizados
console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());
