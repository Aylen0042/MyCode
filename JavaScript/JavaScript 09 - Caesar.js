/*
    CONSIGNA: Ingresar una frase y convertirla a cesar con una funcion llamada ConvertirFrase(frase, cantDesplazamiento) 
              devolver la nueva frase.
*/

let cantDesplazamiento = 0; 
let frase;

frase = prompt("Ingrese una frase", ' ');
cantDesplazamiento = parseInt(prompt("Ingrese la cantidad de desplazamiento", ' '));

ConvertirFrase(frase, cantDesplazamiento);

function ConvertirFrase(frase, cantDesplazamiento)
{ 
    for(let i=0; i<frase.length; i++)
    {
        document.write(frase.charCodeAt(i) + cantDesplazamiento  + "<br>");
    }
}
