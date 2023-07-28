const { readFile } = require('node:fs/promises')

async function init () {
  console.log('Leyendo el primer archivo...')

  const text = await readFile('./archivo.txt', 'utf-8')
  console.log('primer texto: ', text)

  console.log('----> Haciendo cosas archivo...')

  console.log('Leyendo el segundo archivo...')
  const text2 = await readFile('./archivo2.txt', 'utf-8')
  console.log('segundop texto: ', text2)
}

init()

// (
//     async () => {

//         console.log('Leyendo el primer archivo...')

//         const text = await readFile('./archivo.txt', 'utf-8')
//         console.log("primer texto: ", text)

//         console.log('----> Haciendo cosas archivo...')

//         console.log('Leyendo el segundo archivo...')
//         const text2 = await readFile('./archivo2.txt', 'utf-8')
//         console.log("segundop texto: ", text2)
//     }
// )()
