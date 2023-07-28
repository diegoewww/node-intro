const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desiredPort, () => {
      const { port } = server.address()
      console.log('Puerto disponible')
      console.log(`Se cierra http://localhost:${port}`)
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log('Puerto no disponible... reasignando')
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = {
  findAvailablePort
}
