// -- O SERVICE GERENCIA O DOMINIO DO NEGÓCIO

import UsuarioRepoArray from "../repositories/usuario-repo-array.js"; 
import UsuarioRepoMongo from "../repositories/usuario-repo-mongo.js"; 

class UsuarioService {
  constructor() {
    this.usuarioRepository = new UsuarioRepoMongo();
  }

  adicionar(usuario) {
    this.usuarioRepository.adicionar(usuario);
  }
  excluir(_id) {
    this.usuarioRepository.excluir(_id);
  }

  alterar(usuario) {
    this.usuarioRepository.alterar(usuario);
  }

  buscarTodos() {
    return this.usuarioRepository.buscarTodos();
  }
}

export default UsuarioService;
