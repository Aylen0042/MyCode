/*
    CONSIGNA: Hacer un formulario html para que se pueda ingresar la CPersona que contemple 
              las siguientes condiciones:

              -Sus atributos son: Nombre, FechaNacimiento, DNI, Genero, peso y altura.
              -Por defecto, todos los atributos menos el DNI seran valores por defecto segun su tipo
              (0 numeros, cadena vacia para String, etc.).
              -Se implantara el constructor:
              -Los metodos que se implementaran son:
              -calcularIMC(): calculara si la persona esta en su peso ideal 
              (peso en kg/(altura^2 en m)), si esta formula devuelve un valor menor que 20, la 
              funcion devuelve un -1, si devuelve un numero entre 20 y 25 (incluidos), significa que 
              esta por debajo de su peso ideal la funcion devuelve un 0 y si devuelve un valor mayor 
              que 25 significa que tiene sobrepeso, la funcion devuelve un 1.
              -esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano- Se contrasta con 
              hora-dia del sistema. 
              -ComprobarGenero(genero): comprueba que el genero introducido es correcto. Si no es 
              correcto, sera H. Sera visible al exterior.
*/

class CPersona
{
    constructor(nombre, fecha_nac, dni, genero, peso, altura, edad)
    {
        this.nombre = nombre;
        this.fecha_nac = fecha_nac;
        this.dni = dni;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.edad = edad;
    }

    calcularIMC()
    {
        if(this.peso / (this.altura * this.altura) < 20)
            return -1;
        else if(this.peso / (this.altura * this.altura) >= 20 && this.peso / (this.altura * this.altura) <= 25)
            return 0;
        else if(this.peso / (this.altura * this.altura) > 25)
            return 1;
    }

    esMayorDeEdad()
    {
        return this.edad > 17;
    }
    
    comprobarGenero()
    {
        if(this.genero == 'F' || this.genero == 'M' || this.genero == 'X')
            return "El genero es correcto.";
        else
            return "El genero es incorrecto.";
    }

    calcularIMC2(peso)
    {
        if(peso == -1)
            return "Esta por debajo de su peso ideal";
        else if(peso == 0)
            return "Posee un peso ideal";
        else if(peso == 1)
            return"Tiene sobrepeso";
    }
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) 
{
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const fecha_nac = document.getElementById('fecha_nac').value;
  const dni = document.getElementById('dni').value;
  const genero = document.getElementById('genero').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const edad = document.getElementById('edad').value;

  const persona = new CPersona(nombre, fecha_nac, dni, genero, peso, altura, edad);

  const datosPersona = document.getElementById('datosPersona');

  datosPersona.innerHTML = (persona.esMayorDeEdad() ? 'Es mayor de edad' : 'Es menor de edad')
                           + "<br>" + persona.comprobarGenero() + "<br>" + 
                           persona.calcularIMC2(persona.calcularIMC());
}
);

