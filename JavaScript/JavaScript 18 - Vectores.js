/*
    CONSIGNA: Generar un vector llamado A de N elementos (N ingresado por teclado) con números aleatorios menores a 32000.

              Realizar y mostrar las siguientes funciones:
               Calcular el promedio de los elementos del vector --- devuelve un float –
               Generar un vector llamado B con los elementos mayores al promedio del vector A. -Devuelve un vector -
               Contar la cantidad de elementos que son múltiplos a la vez de 2 y 3. --- devuelve un int –
               Calcular la suma de todos los elementos del vector – devuelve un int –
               Generar un vector llamado C con los elementos del vector A multiplicado por 2. --devuelve un vector -
               Mostrar los resultados de todas las funciones y los vectores A, B y C.

*/

let N = parseInt(prompt("Ingrese la cantidad de elementos del array", ''));
const A = new Array(N);

for(let i=0; i<A.length; i++)
{
    A[i] = Math.floor(Math.random() * 32000); 
}

let promedio = calcularPromedio(A);
let mayoresAlPromedio = elementosMayoresAlPromedioDeA(A, promedio);
let multiplo2y3 = multiplosDe2y3ALaVez(A);
let suma = calcularSuma(A);
let APor2 = AMultiplicadoPor2(A);

document.write("Vector A: " + A + "<br>");
document.write("Promedio: " + promedio + "<br>");
document.write("Elementos de A mayores al promedio (vector B): " + mayoresAlPromedio + "<br>");
document.write("Multiplos de 2 y 3 a la vez: " + multiplo2y3 + "<br>");
document.write("Suma de los elementos de A: " + suma + "<br>");
document.write("El doble de los elementos de A (vector C): " + APor2);

function calcularPromedio(A)
{
    let suma=0;
    let promedio;

    for(let i=0; i<N; i++)
    {
        suma = suma + A[i];        
    }

    promedio = suma/N;

    return parseFloat(promedio);
}

function elementosMayoresAlPromedioDeA(A, promedio)
{
    const B = [];

    for(let i=0; i<N; i++)
    {
        if(A[i] > promedio)
            B[i] = A[i];
    }
    
    return B;
}

function multiplosDe2y3ALaVez(A)
{
    let multiplo2 = [];
    let multiplo3 = [];
    let result = [];

    for(let i=0; i<N; i++)
    {
        if(A[i]%2 == 0)
            multiplo2[i] = A[i]; 
        
        if(A[i]%3 == 0)
            multiplo3[i] = A[i]; 
        
        if(multiplo2[i] == multiplo3[i])
            result = multiplo2 + " " + multiplo3;

    }

    return result;
}

function calcularSuma(A)
{
    let suma=0;

    for(let i=0; i<N; i++)
    {
        suma = suma + A[i];        
    }

    return suma;
    
}

function AMultiplicadoPor2(A)
{
    const C = [];

    for(let i=0; i<N; i++)
    {
        C[i] = A[i]*2;
    }
    
    return C;
}
