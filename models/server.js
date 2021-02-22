const express = require("express");
var cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios'

    //middlewares
    this.middlewares();

    //My routes
    this.routes();
  }
  //========================
  //Métodos del server
  //========================

  middlewares() {
    //CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());


    //Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    ////////////////////////////////////////
    //CONTROLADORES
    ////////////////////////////////////////

    /////usuarios
    this.app.use(this.usuariosPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("GonnzDevServer running on port: " + this.port);
    });
  }
}

module.exports = Server;
