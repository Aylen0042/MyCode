/*
    CONSIGNA: Ingresar un valor N. Generar un vector de numeros aleatorios (menores a 600) llamado A de N elementos. Ordenar el 
              vector. Realizar una funcion que calcule la moda del vector (el valor que mas se repite). Mostrar vector y moda.
*/

let n = parseInt(prompt("Ingrese un numero", ''));
const a = new Array(n);
let arrayOrdenado;

for(let i=0; i<a.length; i++) 
{
    a[i] = Math.floor(Math.random() * 600); 

    function comparar(a, b) 
    {
      return a - b;
    }
    
    arrayOrdenado = a.join();  
    arrayOrdenado = a.sort();  
    arrayOrdenado = a.sort(comparar);  
}

let moda = calcularModa(arrayOrdenado);

if(moda == 0)
    moda = "no se repite ningun numero";
    
document.write("El vector es " + arrayOrdenado + ", y la moda es " + moda);

function calcularModa(arrayOrdenado)
{
    let i;
    let j;
    let moda=0;
    
    console.log(arrayOrdenado);
    for(i=0; i<arrayOrdenado.length; i++)
    {
        for(j=0; j<arrayOrdenado.length; j++)
        {
            console.log(arrayOrdenado[i]); 
            console.log(arrayOrdenado[j]); 

            if(arrayOrdenado[i]==arrayOrdenado[j] && i!=j)
                moda = arrayOrdenado[i];
        }
    } 

    return moda;
}