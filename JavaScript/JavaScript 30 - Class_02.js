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
        var hoy = new Date();
        var anio = hoy.getFullYear();        

        return anio - this.anio_ingreso;
    }

    viveWallStreet()
    {
        return this.direccion.includes('Wall Street') || this.direccion.includes('wall street');
    }
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) 
{
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const anio_ingreso = document.getElementById('anio_ingreso').value;
  const salario = document.getElementById('salario').value;
  const direccion = document.getElementById('direccion').value;

  const empleado = new CEmpleado(nombre, anio_ingreso, salario, direccion);

  const datosEmpleado = document.getElementById('datosEmpleado');
  datosEmpleado.innerHTML = empleado.mostrarDatos() + "<br> Su antiguedad es de " 
                            + empleado.calcularAntiguedad() + " anios. <br>" +
                            (empleado.viveWallStreet() ? 'Vive en Wall Street' : 'No vive en Wall Street');
}
);