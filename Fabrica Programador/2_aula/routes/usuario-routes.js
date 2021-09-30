// -----GERENCIAMENTO DAS ROTAS

import express from "express";
import UsuarioController from "../controllers/usuario-controller.js";

// lasse para as rotas

class UsuarioRoutes{
  constructor(){
    this.usuarioController = new UsuarioController();
    this.router = express.Router();
    this.loadRoutes();
  }
    loadRoutes(){
      this.router.get("/usuario", this.usuarioController.buscarTodos.bind(this.usuarioController));

      this.router.post("/usuario",this.usuarioController.adicionar.bind(this.usuarioController));

      this.router.put("/usuario", this.usuarioController.alterar.bind(this.usuarioController));

      this.router.delete("/usuario",this.usuarioController.excluir.bind(this.usuarioController));

    }

}
export default UsuarioRoutes;
