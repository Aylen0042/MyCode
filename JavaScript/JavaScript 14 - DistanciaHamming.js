/*
    CONSIGNA: Realizar una función que calcule la diferencia de Hamming. Mostrar vectores y diferencia.
*/

let cadena = "1001010";
let cadena2 = "0110010";

document.write("La distancia de Hamming que hay entre <br>");
document.write(cadena + " y <br>" + cadena2 + " es de " + distanciaHamming(cadena, cadena2));

function distanciaHamming(cadena, cadena2) 
{
    let distance = 0;
    
    for(let i=0; i<cadena.length; i++) 
    {
        if (cadena[i] !== cadena2[i])
            distance++;
    }
    
    return distance;
}