/*
    CONSIGNA: Nuestra Presidenta tiene algunos números secretos, por lo que, en caso de emergencia, puede usarlo para ponerse en 
              contacto con la SIDE(Servicio Inteligencia Del Estado) y salvarla. Pero estos números tienen algunas características 
              especiales, son primos y la suma de los dígitos individuales son también primos. Como 23, es el número primo y la 
              suma de sus dígitos (2 + 3) = 5, también es un número primo.

              Así que su tarea es imprimir todos los números en un rango dado, a, b (ambos incluidos), en orden ascendente. 
              Utilizando función bool EsPrimo(int n).
*/

let a = 10;
let b = 50;
let numeros = numerosSecretos(a, b);

console.log(numeros.join(' '));

function esPrimo(num) 
{
    if(num < 2) 
        return false;

    for(let i=2; i<=Math.sqrt(num); i++) 
    {
        if(num % i == 0) 
            return false;
    }
    
    return true;
}
  
function sumaDigitos(num) 
{
    let suma=0;
    
    while(num > 0) 
    {
        suma = suma + num % 10;
        num = Math.floor(num / 10);
    }
 
    return esPrimo(suma);
}
  
function numerosSecretos(a, b) 
{
    let numerosSecretos = [];
    
    for (let i=a; i<=b; i++) 
    {
        if(esPrimo(i) && sumaDigitos(i)) 
            numerosSecretos.push(i);
    }

    return numerosSecretos;
}
  
  