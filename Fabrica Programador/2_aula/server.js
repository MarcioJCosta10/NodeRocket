import express from "express";
import path from "path";
import usuarioRoutes from"./routes/usuario-routes.js";
import {fileURLToPath} from "url"

class Server {
  constructor() {
    //Configuração do server
    this.app = express();
    this.usuarioRoutes = new usuarioRoutes();
  }

  start() {
   
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    // Express middlewares
    this.app.use(express.static(path.join(__dirname, "public"))); //Usando uma rota estática para a pasta public
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json()); // Precisamos configurar o express para entender objetos json
    this.app.use(this.usuarioRoutes.router); //Adiconar o router CRUD

    // Configuração da porta
    this.port = process.env.PORT || 3080;
    this.app.listen(this.port, () => {
      console.log(`Server iniciado http://localhost:${this.port}`);
    });
  }
}

export default Server;
