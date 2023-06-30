/*
    CONSIGNA: Escriba un programa que imprima la informacion (nombre, anio de ingreso, salario, 
              direccion) creando una clase llamada 'CEmpleado'. La salida debe ser la siguiente:

              Name        Year of joining        Address

              Robert      2014                   64C- WallStreet


              Imprimir los anios de antiguedad.
              Imprimir si el empleado vive en la calle Wall Street.
*/

class CEmpleado
{
    constructor(nombre, anio_ingreso, salario, direccion)
    {
        this.nombre = nombre;
        this.anio_ingreso = anio_ingreso;
        this.salario = salario;
        this.direccion = direccion;
    }

    mostrarDatos()
    {
        return "Nombre: " + this.nombre + "<br> Anio de ingreso: " + this.anio_ingreso 
                + "<br> Salario: " + this.salario + "<br> Direccion: " + this.direccion;
    }

    calcularAntiguedad()
    {
        return 2022 - this.anio_ingreso;
    }

    viveWallStreet()
    {
        return this.direccion == 'Wall Street';
    }
}

var nombre = prompt("Ingrese su nombre", '');
var anio_ingreso = prompt("Ingrese su anio de ingreso", '');
var salario = prompt("Ingrese su salario", '');
var direccion = prompt("Ingrese su direccion", '');

const empleado = new CEmpleado(nombre, anio_ingreso, salario, direccion);

document.write(empleado.mostrarDatos());
document.write("<br> Su antiguedad es de " + empleado.calcularAntiguedad() + " anios. <br>");
document.write((empleado.viveWallStreet() ? 'Vive en Wall Street' : 'No vive en Wall Street'));