import ManageDB from "./dbs/ManageDB.js";
import Server from "./Server.js";


//ES

class App {
  constructor() {}
  start() {
  
    // Conexão com o banco
    ManageDB.connect();
    //Fechar a conexão
    //ManageDB.close()

    // Server
    new Server().start();
  }
}

new App().start();

export default App;