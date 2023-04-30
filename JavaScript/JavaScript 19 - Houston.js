/*
    CONSIGNA: En lugar de conversiones de  ́angulos, el c ́alculo bien podr ́ıa haber sido el producto escalar de dos
              vectores. Esta operaci ́on consiste en multiplicar los componentes de cada vector uno a uno y sumar sus
              resultados.
              Por ejemplo, si tenemos dos vectores A y B con 5 componentes: A=(2,5,5,4,4) y B=(1,1,3,3,3), el
              producto escalar de ambos es: A · B = 2 × 1 + 5 × 1 + 5 × 3 + 4 × 3 + 4 × 3 = 2 + 5 + 15 + 12 + 12 = 46
                                                                    A 2 5 5 4 4
                                                                      × × × × ×
                                                                    B 1 1 3 3 3
                                                                      = = = = =
                                                                      2 5 15 12 12
                                                                           +
                                                                          46
*/

let N = parseInt(prompt("Ingrese un numero", ''));
const vectorA = new Array(N);
const vectorB = new Array(N);

for(let i=0; i<N; i++) 
{
    vectorA[i] = Math.floor(Math.random() * 30000); 
}

for(let i=0; i<N; i++) 
{
    vectorB[i] = Math.floor(Math.random() * 30000); 
}

document.write("Vector A: " + vectorA + "<br>");
document.write("Vector B: " + vectorB + "<br>");
document.write("Suma de cada elemento de A * cada elemento de B: " + SumaDeAPorB(vectorA, vectorB));

function SumaDeAPorB(vectorA, vectorB)
{
    let mult = [];
    let suma=0;
    
    for(let i=0; i<N; i++) 
    {
        mult[i] = vectorA[i] * vectorB[i];
        suma = suma + mult[i];
    }
    
    return suma;
}

