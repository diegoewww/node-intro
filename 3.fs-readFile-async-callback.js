const fs = require('fs')

console.log('Leyendo el primer archivo...')

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
  } else {
    console.log('primer texto:', text)
  }
})

console.log('Leyendo el primer archivo...')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error al leer el archivo2:', err)
  } else {
    console.log('segundo texto:', text)
  }
})
