class Tarefa{
    constructor(titulo,descricao,status,esforco ){
        if (!titulo || typeof titulo !== "string") {
            throw new Error("Titulo inválido");
        }
        if (!descricao || typeof descricao !== "string") {
            throw new Error("Descrição inválido");
        }
        if (!status || typeof status !== "string") {
            throw new Error("Status inválido");
        }
        if (!Number.isInteger(esforco)|| esforco<1||esforco>5) {
            throw new Error("Esforço inválido");
        }
        this.titulo=titulo;
        this.descricao=descricao
        this.status=status
        this.esforco=esforco
    }

    setStatus(status){
        if (!status || typeof status !== "string") {
            throw new Error("Status inválido");
        }
        this.status=status
    }
    setTitulo(titulo){
         if (!titulo || typeof titulo !== "string") {
            throw new Error("Titulo inválido");
        }
        this.titulo=titulo;
    }
    setDescricao(descricao){
        if (!descricao || typeof descricao !== "string") {
            throw new Error("Descrição inválido");
        }
        this.descricao=descricao
    }
    setEsforco(esforco){
        if (!Number.isInteger(esforco)|| esforco<1||esforco>5) {
            throw new Error("Esforço inválido");
        }
        this.esforco=esforco
    }
}
module.exports=Tarefa