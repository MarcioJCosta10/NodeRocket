import mongoose from "mongoose";

class ManageDB {
  
    static async connect() {
        // Conexão com o banco mongo
        await mongoose.connect(
        process.env.MONGODB_REMOTO_KEY,
        { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => {
        console.log(`Erro na conexão ${err}`);
      });
    console.log("Conectado no MongoDB");
  }
  
  static async close() {
      //Fechar a conexão
    await mongoose.connection.close().catch(err=>{
        console.log(`Erro ao fechar ${err}`)
    })
    console.log("Banco Fechado com sucesso")
  }
}

export default ManageDB
