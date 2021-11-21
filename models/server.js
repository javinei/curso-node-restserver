const express = require('express')
const cors = require('cors')


class Server {

    // las propiedades se pueden declarar en el constructor
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares - Funciones que siempre se van a llamar
        this.middlewares();

        // rutas de mi aplicación
        this.routes();
    }

    
    middlewares() {

        // CORS
        this.app.use(cors());

        // lectura y parseo del body
        this.app.use(express.json());

        
        // Directorio Público
        this.app.use(express.static('public'));
    }
    
    // definición de rutas
    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
    


}


module.exports = Server;