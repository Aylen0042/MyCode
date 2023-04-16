/*
    CONSIGNA: Bino y Cino son amigos cercanos. A Bino le gusta crear desafios matematicos para que Cino los resuelva. Esta vez, Bino creo
              una lista de numeros y le pregunto a Cino: Cuales numeros son multiplos de 2, 3, 4 y 5?
              Este desafio parece simple, pero si la lista contiene muchos numeros, Cino cometera algunos errores de calculo. 
              Para ayudar a Cino, haga un programa que resuelva el Desafio de Bino.

              Hacer una funcion para cada numero.
*/

let CantNum = prompt("Ingrese la cantidad de numeros en la lista de Bino", ' ');
let num;

for (let i=0; i<CantNum; i++) 
{
    num = prompt("Ingrese los numeros en la lista de Bino", ' ');
    var vector = new Array(CantNum);
    vector.push([num]);

    ContarMultiplosDe2(num, CantNum);
    ContarMultiplosDe3(num, CantNum);
    ContarMultiplosDe4(num, CantNum);
    ContarMultiplosDe5(num, CantNum);
}


function ContarMultiplosDe2(num, CantNum)
{
    let multiploDe2;
    let comparacion;
        
    multiploDe2 = num%2 == 0;
    
    if(multiploDe2 == true)
        comparacion = CantNum + "," + num; 
            
    if(vector == comparacion)
        document.write(num + " (Multiplo de 2) <br>");
    else    
        document.write(num + "<br>");
}

function ContarMultiplosDe3(num, CantNum)
{    
    let multiploDe3;
    let comparacion;
        
    multiploDe3 = num%3 == 0;
    
    if(multiploDe3 == true)
        comparacion = CantNum + "," + num; 
            
    if(vector == comparacion)
        document.write(num + " (Multiplo de 3) <br>");
    else    
        document.write(num + "<br>");
}

function ContarMultiplosDe4(num, CantNum)
{    
    let multiploDe4;
    let comparacion;
        
    multiploDe4 = num%4 == 0;
    
    if(multiploDe4 == true)
        comparacion = CantNum + "," + num; 
            
    if(vector == comparacion)
        document.write(num + " (Multiplo de 4) <br>");
    else    
        document.write(num + "<br>");
}

function ContarMultiplosDe5(num, CantNum)
{    
    let multiploDe5;
    let comparacion;
        
    multiploDe5 = num%5 == 0;
    
    if(multiploDe5 == true)
        comparacion = CantNum + "," + num; 
            
    if(vector == comparacion)
        document.write(num + " (Multiplo de 5) <br>");
    else    
        document.write(num + "<br>");
}
