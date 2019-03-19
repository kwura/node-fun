// import the express library
const express = require("express")

// create an express object
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log("Yo this app is listening on port ${port}!"))

