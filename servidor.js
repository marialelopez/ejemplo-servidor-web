let http = require ('http');
let host = '127.0.0.1'
let puerto = '9000'

const data = {
    nombre: 'Alejandra Lopez',
    areasDeConocimiento: ['HTML', 'CSS', 'JavaScript']
  }; 

const servidor = http.createServer(function(llamado,respuesta){
    respuesta.writeHead(200,{'Content-Type' : 'text/html'});
    respuesta.end((JSON.stringify(data)))
});

servidor.listen(puerto,host,function(){
    console.log ('el servidor esta corriendo : ' + host +":" + puerto);
});