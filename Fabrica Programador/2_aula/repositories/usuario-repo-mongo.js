// O REPOSITORY CUIDA DA MANIPULAÇÃO DE DADOS NO BANCO

import UsuarioModel from "../models/usuario-model.js"; // carregar o mod

class UsuarioRepositoryMongo {
  constructor() {
    // Quem eu vou carregar para essa classe será o model
    this.model = UsuarioModel;
  }

  adicionar(usuario) {
    this.model.create(usuario, function (err, suc) {
      if (err) return handleError(err);
      console.log("Usuario salvo!");
    });
  }

  alterar(usuario) {
    const query = { _id: usuario._id };
    this.model.findOneAndUpdate(query, usuario).exec();
  }

  excluir(_id) {
    const query = this.model.deleteOne({ _id });
    query.exec();
  }

  buscarTodos() {
    const query = this.model.find({});
    const promise = query.lean().exec();
    return promise;
  }
}

export default UsuarioRepositoryMongo;
