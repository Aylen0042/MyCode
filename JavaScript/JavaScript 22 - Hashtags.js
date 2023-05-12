/*
    CONSIGNA: Escriba una función que recupere las tres palabras más largas del titular de un periódico y las transforme en hashtags.
              Si varias palabras tienen la misma longitud, recupere la palabra que aparece primero.
              Si el título tiene menos de 3 palabras, simplemente ordene las palabras del título por longitud en orden descendente.
              La puntuación no cuenta para la longitud de una palabra.
*/

let frase = "El estudia en la facultad";

transformarFrase(frase);

function transformarFrase(frase)
{
    let mayor = buscarPalabraMayor(frase);
    let nuevaFrase = frase.replace(mayor, "");    
    
    let mayor2 = buscarPalabraMayor(nuevaFrase);
    let nuevaFrase2 = nuevaFrase.replace(mayor2, "");    

    let mayor3 = buscarPalabraMayor(nuevaFrase2);

    document.write("#" + mayor + ", #" + mayor2 + ", #" + mayor3);
}

function buscarPalabraMayor(frase)
{
    let palabrasSeparadas = frase.split(' ');
    let mayor=0;
    let palabraMayor;
    
    for(let i=0; i<palabrasSeparadas.length; i++)
    {
        if(palabrasSeparadas[i].length > mayor)
        {
            palabraMayor = palabrasSeparadas[i];
            mayor++;        
        }
    }

    return palabraMayor;
}