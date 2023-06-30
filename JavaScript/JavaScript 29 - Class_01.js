/*
    CONSIGNA: Escribir un formulario en html y un script en JS para imprimir el area del 
              rectangulo creando una clase llamada 'CRectangulo' con una funcion  llamada
              'CalcularArea' que devuelve el area.

              La longitud y la altura se pasan como parametros a su constructor.
*/

class CRectangulo
{
    constructor(A, B)
    {
        this.A = A;
        this.B = B;
    }

    CalcularArea()
    {
        return (this.A*2) + (this.B*2);
    }
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) 
{
  event.preventDefault();

  const A = document.getElementById('longitud').value;
  const B = document.getElementById('altura').value;

  const rectangulo = new CRectangulo(A, B);

  const datosRectangulo = document.getElementById('datosRectangulo');
  datosRectangulo.innerHTML = rectangulo.CalcularArea();
}
);
