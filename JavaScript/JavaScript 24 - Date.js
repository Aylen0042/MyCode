/*
    CONSIGNA: Diseñar en Javascript que se ingrese una fecha.
              a) Hacer una función que calcule la cantidad de días que falta para año nuevo. Con una función llamada 
              CantidadDiasAnioNuevo($fecha).
              b) Hacer una función que calcule la cantidad de días que somos campeones del Mundo de futbol con una 
              función llamada CantidadDiasCatar2022($fecha).
              c) Hacer una función que reciba dos fechas y calcule la cantidad de años completos transcurridos entre ambas.
              d) Hacer una función que reciba una fecha  y determine si es un día laborable (de lunes a viernes) o no.
*/

let fecha = new Date();
let fecha1 = new Date(2016, 3, 26);
let fecha2 = new Date(2019, 5, 7);

document.write("Faltan " + CantidadDiasAnioNuevo(fecha) + " días para Año Nuevo. <br>"); 
document.write("Somos campeones del mundo hace " + CantidadDiasCatar2022(fecha) + " días. <br>"); 
document.write("Entre el 26 de abril del 2016 y el 7 de junio del 2019 pasaron " + CantidadAniosEntreAmbas(fecha1, fecha2) + " años completos. <br>"); 

if(esDiaLaborable(fecha) == true)
    document.write("Hoy es día laborable");
else    
    document.write("Hoy no es día laborable");

function CantidadDiasAnioNuevo(fecha)
{
    fecha = new Date(2024, 00, 1, 0, 0, 0, 0);

    let hoy = new Date();

    let diasFaltan = fecha.getTime() - hoy.getTime();
    
    diasFaltan = Math.round(diasFaltan / (1000*60*60*24)); 

    return diasFaltan;
}

function CantidadDiasCatar2022(fecha)
{
    fecha = new Date(2022, 11, 18);

    let hoy = new Date();

    let diasDesdeEntonces = hoy.getTime() - fecha.getTime();
    
    diasDesdeEntonces = Math.round(diasDesdeEntonces / (1000*60*60*24)); 

    return diasDesdeEntonces;    
}

function CantidadAniosEntreAmbas(fecha1, fecha2)
{
    let aniosTranscurridos = new Date(fecha2.getTime() - fecha1.getTime());
    
    aniosTranscurridos = Math.round(aniosTranscurridos / (1000*60*60*24*31*12)); 

    return aniosTranscurridos;    
}

function esDiaLaborable(fecha)
{
    if((fecha.getDay() == 0) || (fecha.getDay() == 6))
        return false;
    else
        return true;
}