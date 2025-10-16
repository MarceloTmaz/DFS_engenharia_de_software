class Tarefa{
    constructor(id,titulo,descricao,status,esforco,idUsuario ){
        if (!titulo || typeof titulo !== "string") {
            throw new Error("Titulo inválido");
        }
        if (!descricao || typeof descricao !== "string") {
            throw new Error("Descrição inválido");
        }
        if (typeof status !== "boolean") {
            throw new Error("Status inválido");
        }
        if (!Number.isInteger(esforco)|| esforco<1||esforco>5) {
            throw new Error("Esforço inválido");
        }
        this.id=id;
        this.titulo=titulo;
        this.descricao=descricao
        this.status=status
        this.esforco=esforco
        this.idUsuario=idUsuario;
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