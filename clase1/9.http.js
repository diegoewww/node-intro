const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const PORT = process.env.PORT ?? 8080

console.log(process.env.PORT)

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

findAvailablePort(PORT)
  .then(port => {
    server.listen(port, () => {
      console.log(`server listen on http://localhost:${port}`)
    // console.log(`server listen http://localhost:${server.address().port}`)
    })
  })
