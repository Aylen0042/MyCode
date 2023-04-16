
let mensaje = "Hoy (.sh 22 sal a) (ed asac ne sominuer son) Marcelo.";

document.write(DescifrarCodigo(mensaje));

function DescifrarCodigo(mensaje)
{
    let valores = DetectarParentesis(mensaje);

    let arregloApertura = [];
    let arregloCierre = [];

    for(let i=0; i<valores.length; i++)
    {
        if(i%2 == 0)
            arregloApertura[i] = valores[i];
        if(i%2 == 1) 
            arregloCierre[i] = valores[i];
    }

    let Apertura = arregloApertura.flat(2);
    let Cierre = arregloCierre.flat(2);
    
    let mensajeDescifrado = "";

    for(let j=0; j<valores.length/2; j++)
    {
        let arregloAux = [Apertura[j], Cierre[j]];
        mensajeDescifrado = mensajeDescifrado + DarVueltaMensaje(arregloAux);
    }

    return mensajeDescifrado;
}

function DetectarParentesis(mensaje)
{
    let P_Apertura;
    let P_Cierre;
    let mensajeJunto = [];
    let cont=0;

    for(let i=0; i<mensaje.length; i++)
    {
        if(mensaje.charAt(i) == '(')
        {
            P_Apertura = i+1;
            cont++;
        }    

        for(let j=P_Apertura+1; j<mensaje.length; j++)
        {
            if(mensaje.charAt(i) == ')')
            {
                P_Cierre = i-1;

                let array = [P_Apertura, P_Cierre];
                mensajeJunto[cont] = array.map((cadaMensaje)=>cadaMensaje);
                break;
            } 
        }
    }
    
    return mensajeJunto.flat(2); // 2 = la profundidad, cuántos subarreglos hay
}

function DarVueltaMensaje(valores)
{
    let guardar = "";
    let P_Apertura = valores[0];
    let P_Cierre = valores[1]; 

    for(let j=P_Cierre; j>P_Apertura; j--)
    {
        guardar = guardar + mensaje[j];
    }
    
    return guardar;
}
