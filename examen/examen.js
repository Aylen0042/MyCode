const http = require('http')
const fs = require('fs')

const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
}

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL('http://localhost:8888' + pedido.url)
  let camino = 'public' + url.pathname
  if (camino == 'public/')
    camino = 'public/index.html'
  encaminar(pedido, respuesta, camino)
})

servidor.listen(8888)

function encaminar(pedido, respuesta, camino) {
  console.log(camino)
  switch (camino) {
    case 'public/recuperardatos': {
      recuperar(pedido, respuesta)
      break
    }
    default: {
      fs.stat(camino, error => {
        if (!error) {
          fs.readFile(camino, (error, contenido) => {
            if (error) {
              respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
              respuesta.write('Error interno')
              respuesta.end()
            } else {
              const vec = camino.split('.')
              const extension = vec[vec.length - 1]
              const mimearchivo = mime[extension]
              respuesta.writeHead(200, { 'Content-Type': mimearchivo })
              respuesta.write(contenido)
              respuesta.end()
            }
          })
        } else {
          respuesta.writeHead(404, { 'Content-Type': 'text/html' })
          respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
          respuesta.end()
        }
      })
    }
  }
}


function recuperar(pedido, respuesta) {
  let info = ''
  pedido.on('data', datosparciales => {
    info += datosparciales
  })
  pedido.on('end', () => {
    const formulario = new URLSearchParams(info)
    console.log(formulario)
    respuesta.writeHead(200, { 'Content-Type': 'text/html' })
    const pagina =
      `<!doctype html><html><head></head><body>
     Palabra:${formulario.get('palabra')}<br>
     </body></html>`
     respuesta.end(pagina)

     let palabra = formulario.get('palabra');

     for(let i=0; i<palabra.length; i++)
     {
         if(palabra.charAt(i) != 'a' && palabra.charAt(i) != 'e' && palabra.charAt(i) != 'i' && palabra.charAt(i) != 'o' && palabra.charAt(i) != 'u')
         console.log(palabra.charAt(i));
         else
         {
         switch(palabra.charAt(i))
         {
             case 'a': console.log(palabra.charAt(i) + "p" + palabra.charAt(i));
                 break;
             case 'e': console.log(palabra.charAt(i) + "p" + palabra.charAt(i));
                 break;
             case 'i': console.log(palabra.charAt(i) + "p" + palabra.charAt(i));
                 break;
             case 'o': console.log(palabra.charAt(i) + "p" + palabra.charAt(i));
                 break;
             case 'u': console.log(palabra.charAt(i) + "p" + palabra.charAt(i));
                 break;
             default: console.log("La palabra no tiene vocales");
         }
         }           
     }  
       })
}

console.log('Servidor web iniciado');