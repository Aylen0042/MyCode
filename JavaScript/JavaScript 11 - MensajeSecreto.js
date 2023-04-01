let mensaje = prompt("Ingrese el mensaje secreto (al reves)",' ');

document.write(DescifrarCodigo(mensaje));

function DescifrarCodigo(mensaje)
{
    let P_Apertura, P_Cierre;

    for(let i=0; i<mensaje.length; i++)
    {
        if(mensaje.charAt(i) == '(')
            P_Apertura = i;
       
        if(mensaje.charAt(i) == ')')
            P_Cierre = i;
            
        for(let j=0; P_Apertura <= P_Cierre; j++)
        {
            let aux;
            aux = aux + mensaje.charAt(j);
        }
    }
}
