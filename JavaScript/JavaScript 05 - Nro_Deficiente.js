/*
    CONSIGNA: Hacer un programa que muestre mediante una funcion llamada function EsDefectivo (n) 
              muestre el listado de los numeros defectivos hasta el numero ingresado.
*/

let numero, num;

numero = parseInt(prompt('Ingrese un numero: ',' '));
 
for(let i=1; i<=numero; i++)
{
    if(esDefectivo(i))
        document.write("<br>", i);
}

function esDefectivo(num)
{
    let cont=0;
    
    for(let i=1; i<num; i++)
    {
        if(num % i == 0)
            cont = cont + i;
    }

    if(cont < num)
        return true;
    else
        return false;
}
