/*
    CONSIGNA: La entrada estara de una palabra o frase de no mas de 100 caracteres. En ella puede haber tanto letras mayusculas como
              minusculas del alfabeto ingles y uno o varios espacios separando palabras (eso si, las lineas empezaran y
              terminaran siempre con letra, nunca con espacios). A riesgo de comprometer la ortografia y la semantica,
              las palabras no contendran tildes y los signos de puntuacion se omiten.

              Por cada caso de prueba se escribira "SI" si la palabra o frase es palindroma y "NO" en caso contrario.
              Hacelo con una funcion EsPalindromo(frase).

*/

let texto, cont=0, cont2=0, ultimo=0;

texto = prompt('Ingrese una palabra: ',' ');

if(esPalindromo(texto))
    document.write('SI');
else
    document.write('NO');

function esPalindromo(texto)
{
    for(let i=texto.length-1; i>=0; i--)
    {
        if(texto.charAt(i) == texto.charAt(ultimo))
            cont++;
            
        ultimo++;
    }

    if(texto.length == cont)
        return true;
    else
        return false;
}
