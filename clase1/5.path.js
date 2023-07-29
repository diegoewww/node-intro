const path = require('node:path')

// Unir rutas con path.join
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolter', 'test.txt')

console.log(filePath)

const base = path.basename('/tmp/diego-secrets-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/diego-secrets-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)
