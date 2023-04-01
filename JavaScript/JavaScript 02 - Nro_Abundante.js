/*
    CONSIGNA: Realizar un programa que liste todos los numeros abdundantes hasta un numero ingresado con una funcion llamada 
              EsAbundante(n) que devuelve un valor boolean.
*/

let numero, num;

numero = parseInt(prompt('Ingrese un numero: ',' '));
    
for(let i=1; i<=numero; i++)
{
    if(esAbundante(i))
        document.write("<br>", i);
}

function esAbundante(num)
{
    let a = 0;
    
    for(let i=1; i<num; i++)
    {
        if(num % i == 0)
            a = a + i;
    }
    
    if(a > num)
        return true;
    else
        return false;
}