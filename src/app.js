const express = require('express')
const webApi = express()
const path = require('path')
const dotenv = require('dotenv')
const morganLogger = require('./middleware/logger')

//configuration
dotenv.config({path:path.resolve(process.cwd(),"src/config/.env")})
const port = process.env.PORT || 3000

//middleware
webApi.use(morganLogger)
webApi.use(express.json())

webApi.post('/api/books', (req, res) => {
    res.status(200).json({message: "book is added to records"})
})
webApi.get('/api/books', (req, res) => {
    res.status(200).json({message: "All books records"})
})
webApi.get('/api/books/:id', (req, res) => {
    res.status(200).json({message: "individual book record"})
})
webApi.put('/api/books/:id', (req, res) => {
    res.status(200).json({message: "update individual book in the record"})
})
webApi.delete('/api/books/:id', (req, res) => {
    res.status(200).json({message: "delete individual book in the record"})
})
webApi.listen(port, () => {
    console.log(`env port: ${process.env.port}`);
    console.log(`server is listening on port ${port}, http://localhost:${port}`)
})
