const express = require('express')
const morganLogger = require('./middleware/logger')

//Initalized the application
const webApi = express()




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

module.exports = webApi