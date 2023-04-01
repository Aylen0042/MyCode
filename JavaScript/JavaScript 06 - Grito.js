/*
    CONSIGNA: El programa debera leer el/los mensaje/s recibido/s ingresados por el usuario. Estaran compuestos de entre 1 y 1.000
              caracteres, formados unicamente por letras del alfabeto ingles, espacios, signos de exclamacion (solo de
              cierre, por supuesto), y otros signos ortograficos.
          
              Por cada linea de la entrada, el programa escribira "ESGRITO" si el texto tiene mas signos de exclamacion
              que letras (del abecedario ingles), y "escrito" en caso contrario.

              Hacer una funcion llamada EsGrito(texto) que devuelva el valor que solicita el problema.
*/

let texto, cont=0, cont2=0;

texto = prompt('Ingrese una palabra: ',' ');
  
esGrito(texto);

function esGrito(texto)
{
    for(let i=1; i<texto.length; i++)
    {
        if(texto.charAt(i) == '!')
            cont++;
        else
            cont2++;
    }

    if(cont2 > cont)
        document.write('Escrito');
    else
        document.write('ESGRITO');
}