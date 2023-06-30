/*
    CONSIGNA: Hacer una clase llamada CPassword que siga las siguientes condiciones:

              -Que tenga los atributos longitud y contrasenia. Por defecto, la longitud sera de 8.
              Los metodos que implementa seran:  
              -esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe tener
              mas de 2 mayusculas, mas de 1 minuscula y mas de 5 numeros.
              -o generarPassword(): genera la contrasenia con caracteres aleatorios con la longitud
              de 8 (se debe contemplar mayusculas, mas de 1 minuscula y mas de 5 numeros).
*/

class CPassword 
{
    constructor(longitud=8) 
    {
        this.longitud = longitud;
        this.contrasenia = this.generarPassword();
    }
  
    esFuerte() 
    {
        let mayusculas = 0;
        let minusculas = 0;
        let numeros = 0;
    
        for(let i=0; i<this.contrasenia.length; i++) 
        {
            if (this.contrasenia[i].match(/[A-Z]/)) 
                mayusculas++;
            else if (this.contrasenia[i].match(/[a-z]/)) 
                minusculas++;
            else if (this.contrasenia[i].match(/[0-9]/)) 
                numeros++;
        }
    
        return mayusculas > 2 && minusculas > 1 && numeros > 5;
    }
  
    generarPassword() 
    {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = "";
  
        for(let i=0; i<this.longitud; i++) 
        {
            const caracter = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            password += caracter;
        }
  
        return password;
    }
}
  
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function(event) 
  {
    event.preventDefault();
  
    const longitud = document.getElementById('longitud').value;
  
    const contrasenia = new CPassword(longitud);
  
    const datosPassword = document.getElementById('datosPassword');
    datosPassword.innerHTML = "Contraseña: " + contrasenia.contrasenia + 
                              "<br> Es fuerte?: " + contrasenia.esFuerte() +
                              "<br> Nueva contrasenia: " + contrasenia.generarPassword();
  }
  );
  
  