
const express = require('express')
const Contenedor = require('./contenedor')

const DBfile = 'products.json'
const app = express()
const PORT = process.env.PORT || 8080
const contenedor = new Contenedor(DBfile)


app.get('/products', ( request, response) => {
   const data = contenedor.getAll()
   response.json(data) 
})

app.get('/productsRandom', ( request, response) => {
    const data = contenedor.getAll()
    const num = Math.floor(Math.random() * data.length)
    const item = data[num]
    response.json(item) 
 })


 const server = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}...`)
})
server.on('error', error => console.log('Error on server', error))

