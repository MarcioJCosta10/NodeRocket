// -- CONTROLER É QUEM VAI GERENCIAR OS REQUEST E RESPONSE

import UsuarioService from "../services/usuario-service.js";
import Usuario from "../domains/usuario-domain.js";

class UsuarioController {
  constructor() {
    this.usuarioService = new UsuarioService();
  }

  adicionar(req, res) {
    const usuario = new Usuario(req.body.email, req.body.nome, req.body.senha,  req.requestTime); /*Esses dados são informado no body no insominia */
    this.usuarioService.adicionar(usuario);
    res.json(usuario);
  }
  async excluir(req, res) {
  await this.usuarioService.excluir(req.body._id);
    res.send("Ok, excluido com sucesso!");
  }

  async alterar(req, res) {
    await this.usuarioService.alterar(req.body); // Aqui o usuário é informado pelo body da requisição no insomnia
    res.send("Alterado");
  }  

  async buscarTodos(req, res) {
    const usuarios = await this.usuarioService.buscarTodos();
    console.log(usuarios);
    res.json(usuarios);
  }
}
export default UsuarioController;
