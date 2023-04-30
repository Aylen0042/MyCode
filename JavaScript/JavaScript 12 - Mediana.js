/*
    CONSIGNA: Dado un conjunto (o muestra) de valores positivos ordenados, se define la mediana como el valor que
              ocupa la posicion central de los datos dados. Calcular la mediana. 
*/

var vector = new Array(4, 7, 2, 8, 5, 3);
let vectorOrdenado;
let num;

function comparar(a, b) 
{
    return a - b;
}  
    
vectorOrdenado = vector.join();  
vectorOrdenado = vector.sort();  
vectorOrdenado = vector.sort(comparar);  

let mediana = calcularMediana(vectorOrdenado);

console.log(vectorOrdenado);
console.log(mediana);

function calcularMediana(vectorOrdenado)
{
    vectorOrdenado.sort((a,b) => a-b);

    var mediana = vectorOrdenado.length;

    if(mediana%2 == 0)
        mediana = vectorOrdenado.slice(mediana/2-1, mediana/2+1).reduce((a,b) => a+b)/2
    else
        mediana = vectorOrdenado.slice((mediana/2), mediana/2+1)[0];

    return mediana;
}
