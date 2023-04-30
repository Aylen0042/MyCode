/*
    CONSIGNA: Cree una función que devuelva un número entero correspondiente a la cantidad de dígitos en el número entero dado.
              Ejemplos:
                num_de_digitos(1000) ➞ 4
                num_de_digitos(12) ➞ 2
*/
let num = parseInt(prompt("Ingrese un numero", ''));

document.write(numDigitos(num));

function numDigitos(num)
{
    return num.toString().length;
}
