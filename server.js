const express = require('express')
const biblioRouter = require('./routes/Biblioteca')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.paths = {
            biblio:"/api/biblio"
        }
        this.middlewares()
        this.routes()
    }
    routes(){
        this.app.use(this.paths.biblio, biblioRouter)
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log("Backend en ejecución en el puerto", process.env.PORT)
        })
    }
}
module.exports = Server