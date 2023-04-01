/*
    CONSIGNA: Para "japonizar" un nombre seguiremos el proceso siguiente: siempre que encontremos una consonante (distinta de la "n") 
              que no vaya seguida de vocal, insertaremos una vocal "u" a continuacion.
            
              Hacer una funcion llama ConvertirNombre(frase)
*/

let cadena = "";
let entrada = prompt("Ingrese una palabra", ' ');
    
document.write(ConvertirNombre(entrada));

function ConvertirNombre(entrada)
{
    for(let i=0; i<entrada.length; i++)
    {
        if(!vocalesyN(entrada.charAt(i)) && !vocalesyN(entrada.charAt(i+1)))
        {
            cadena = cadena + entrada.charAt(i);
            cadena = cadena + "u";
               
            continue;
        }
        
        cadena = cadena + entrada.charAt(i);
    }
        
    return cadena;
}
    
function vocalesyN(letra)
{
    switch(letra)
    {
        case 'a': return true;
        case 'e': return true;
        case 'i': return true;
        case 'o': return true;
        case 'u': return true;
        case 'n': return true;
        default: return false;
    }
}
  
