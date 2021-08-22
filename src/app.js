const express = require('express')
const app = express()
const port = process.env.port || 3000

app.post('/api/books', (req, res) => {
    res.status(200).json({message: "book is added to records"})
})
app.get('/api/books', (req, res) => {
    res.status(200).json({message: "All books records"})
})
app.get('/api/books/:id', (req, res) => {
    res.status(200).json({message: "individual book record"})
})
app.put('/api/books/:id', (req, res) => {
    res.status(200).json({message: "update individual book in the record"})
})
app.delete('/api/books/:id', (req, res) => {
    res.status(200).json({message: "delete individual book in the record"})
})
app.listen(port, () => {
    console.log('server is runing on port' + port);
})
