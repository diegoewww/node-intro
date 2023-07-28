const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('Primer archivo: ', text)

console.log('----> Haciendo cosas mientras...')

console.log('Leyendo el primer archivo...')
const textSecond = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('Segundo archivo: ', textSecond)
