import serveStatic from 'serve-static'
import http from 'http'
import config from './config'
import finalhandler from 'finalhandler'

let serve = serveStatic(config.root.dist, { extensions: ['html', 'htm'], cacheControl: false })

// Create server 
let server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res))
})

//clientErr event
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
})

// Listen 
server.listen(config.port.prod, () => {
  console.log(`listen at ${config.port.prod} success!`)
})
