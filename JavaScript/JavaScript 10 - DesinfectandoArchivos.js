/*
    CONSIGNA: Los archivos de texto de una computadora han sido afectados por un nuevo virus. Este virus daña los archivos de texto
              de la siguiente manera: elige dos caracteres cualesquiera, luego recorre el texto y cada vez que encuentra dos ocurrencias
              consecutivas del primer caracter le intercala el segundo caracter.

              Crear una funcion que desinfecte una frase infectada. 
*/

let caracter1;
let caracter2;
let fraseInfectada;

caracter1 = prompt("Ingrese el primer caracter", ' ');
caracter2 = prompt("Ingrese el segundo caracter", ' ');

fraseInfectada = prompt("Ingrese la frase infectada",' ');

document.write(DesinfectarArchivo(caracter1, caracter2, fraseInfectada));

function DesinfectarArchivo(caracter1, caracter2, fraseInfectada)
{
    for(let i=0; i<fraseInfectada.length; i++)
    {
        if((fraseInfectada.charAt(i) && fraseInfectada.charAt(i+2)) == caracter1)
        {
            if(fraseInfectada.charAt(i+1) == caracter2)
            {
                fraseInfectada = fraseInfectada.split('');
                fraseInfectada[i+1] = "";
                fraseInfectada = fraseInfectada.join("");
            }
        }
    }
    
  return fraseInfectada;
}
