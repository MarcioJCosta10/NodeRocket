class UsuarioRepositoryArray{
    constructor() {
      this.usuarios = [];
    }
  
    adicionar(usuario) {
      this.usuarios.push(usuario);
    }
  
    
    alterar(usuario) {
      this.usuarios.forEach((objetoDeUsuarios) => {
        if (objetoDeUsuarios.email == usuario.email) {
          objetoDeUsuarios.nome = usuario.nome ? usuario.nome : objetoDeUsuarios.senha;
          objetoDeUsuarios.senha = usuario.senha ? usuario.senha : objetoDeUsuarios.senha;
        }
      });
    }
    excluir(email) {
      // Para excluir precisamos localizar o indice dele no array
      const i = this.usuarios.findIndex((objetoDeUsuarios) => objetoDeUsuarios.email == email);
  
      // Após localizar vamos excluir com o splice
      this.usuarios.splice(i, 1);
    }
    buscar(usuario) {}
  
    buscarTodos() {
      return this.usuarios;
    }
  }
  
  export default  UsuarioRepositoryArray;
  