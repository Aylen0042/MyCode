/*
    CONSIGNA: Hacer un programa que muestre mediante una función llamada function EsFeliz (n) muestre el listado de los números felices
              hasta el número ingresado. 
*/

let num = prompt("Ingrese un numero", '');

if(esFeliz(num) == 1)
    document.write("El " + num + " es un numero feliz");

function esFeliz(num)
{
        let suma=0;

        if(num == 1)
            return num;

        for(let i=0; i<num.length; i++)
        {
            cuadrado = num[i] * num[i];
            suma = suma + cuadrado;
        }

        if(suma == 1)
            return suma;
        
        num = suma.toString();
        return esFeliz(num);
}
