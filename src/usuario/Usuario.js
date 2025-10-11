const Tarefa=require("../tarefa/Tarefa")

const axios=require("axios");

class Usuario{
    constructor(email,senha,dbInstance){
        if (!email || typeof email !== "string") {
            throw new Error("Email inválido");
        }
        if (!senha || typeof senha !== "string") {
            throw new Error("Senha inválido");
        }

        this.email=email;
        this.senha=senha;
        this.id=0
        this.tarefas=[]
        this.esforco=0
        this.db = dbInstance || require("../../API/api_google"); // padrão para produção

    }

    setEmail(email){
        if (!email || typeof email !== "string") {
            throw new Error("email inválido");
        }
        this.email=email;
    }
    addTarefa(tarefa) {
        if (!tarefa || (Object.getPrototypeOf(tarefa).constructor.name !== "Tarefa")) {
            throw new Error("Tarefa inválido");
        }
        this.tarefas.push(tarefa);
        this.esforco+=tarefa.esforco
    }
    removeTarefa(tarefa){
        if (!tarefa || (Object.getPrototypeOf(tarefa).constructor.name !== "Tarefa")) {
            throw new Error("Tarefa inválido");
        }
        for (let index = 0; index < this.tarefas.length; index++) {
            if(this.tarefas[index].titulo==tarefa.titulo&& this.tarefas[index].descricao==tarefa.descricao&&this.tarefas[index].status==tarefa.status&&this.tarefas[index].esforco==tarefa.esforco){
                this.tarefas.splice(index,1);
                return "tarefa removida"
            }
        }
        throw Error("Tarefa invalida")
    }
    tarefasTodas(){
        return this.tarefas.length;
    }
    async login(email,senha){
        if (!email || typeof email !== "string") throw new Error("email inválido");
        if (!senha || typeof senha !== "string") throw new Error("senha inválido");

        const idTmp = await this.db.login(email, senha);
        if (!Number.isInteger(idTmp)) throw new Error("Usuario inválido");

        this.id = idTmp;
        this.email = email;
        this.senha = senha;
    
    }
  
}
  console.log("Exportando classe Usuario...");
module.exports = Usuario;