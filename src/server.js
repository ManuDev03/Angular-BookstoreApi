'use strict'
const path = require('path')
const dotenv = require('dotenv')
const webApi = require('./app')

//configuration
dotenv.config({path:path.resolve(process.cwd(),"src/config/.env")})

const port = process.env.PORT || 3000

webApi.listen(port, () => {
    console.log(`env port: ${process.env.port}`);
    console.log(`server is listening on port ${port}, http://localhost:${port}`)
})

