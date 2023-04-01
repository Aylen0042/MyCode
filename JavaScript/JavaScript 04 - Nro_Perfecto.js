/*
    CONSIGNA: Realizar un programa que liste TODOS los numeros perfectos hasta un numero ingresado.
              Utilizar la función Esperfecto( n)
*/

let numero, num;

numero = parseInt(prompt('Ingrese un numero: ',' '));
    
for(let i=1; i<=numero; i++)
{
    if(esPerfecto(i))
        document.write("<br>", i);
}

function esPerfecto(num)
{
    let a = 0;
    
    for(let i=1; i<num; i++)
    {
        if(num % i == 0)
            a = a + i;
    }
    
    if(a == num)
        return true;
    else
        return false;
}
