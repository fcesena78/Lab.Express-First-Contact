const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send(`
      <html>
       <head>
         <title>Puppies and Kittens Site</title>
       </head>
       <body>
         <h1>Puppies and Kittens Galore!!!</h1>
       </body>
      </html>
    `)
  })

  app.get('/puppies', (req, res) => {
    res.send(`
      <html>
       <head>
         <title>Puppies and Kittens Site</title>
       </head>
       <body>
         <h1>Puppies!!!</h1>
       </body>
      </html>
    `)
  })

  app.get('/kittens', (req, res) => {
    res.send(`
      <html>
       <head>
         <title>Puppies and Kittens Site</title>
       </head>
       <body>
         <h1>Kittens!!!</h1>
       </body>
      </html>
    `)
  })




const PORT = 1337;


app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})