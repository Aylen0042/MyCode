/*
    CONSIGNA: Hacer un programa que muestre mediante una funcion llamada function EsNarciso (n) 
              muestre el listado de los numeros narcisos hasta el numero ingresado.
*/

let numero;

numero = parseInt(prompt('Ingrese un numero: ',' '));
console.log(numero);

for(let i=0; i<=numero; i++)
{
    if(esNarciso(i))
        document.write("<br> ", i);  
}

function esNarciso(numero)
{
    let result = 0;
    numero = numero.toString();

        for(let i=0; i<numero.length; i++){
            
            result += Math.pow(parseInt(numero[i]), numero.length);
        }
        return result == numero;
}