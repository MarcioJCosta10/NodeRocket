// --------AQUI É A CARCAÇA---------

import mongoose from "mongoose";
import Usuario from "../domains/usuario-domain.js"; // preciso importar essa classe
const { Schema } = mongoose;

// Definindo o modelo (estrutura da collection)
const UsuarioSchema = new Schema({ // Esse é meu Eschema -- É a estrutura de Usuários que irá para o banco
  email: String,
  nome: String,
  senha: String,
  dataCadastro: Date,
});

//Objeto que contem os dados - Carregar a classe para dentro do mongoose,
//Objeto que vai carregar os dados para a estrutura

UsuarioSchema.loadClass(Usuario);

//Registrar esse modelo dentro do mongoose para que ele conheça e apartir de agora instanciar o obejto usuário
export default mongoose.model("usuario", UsuarioSchema); // Quem chamar esse arquivo vai ter um objeto que vai representar o modelo do banco
// Que importar esse arquivo vai receber essa classe mongoose.model('Usuario', UsuarioSchema);
// Esse cara aqui sabe controlar a collection usuario
// mongoose.model é quem faz o CRUD
