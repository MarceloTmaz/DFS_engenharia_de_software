const Tarefa=require("../src/tarefa/Tarefa")

describe("Tarefa",()=>{
    it("deve ser criada corretamente",()=>{
        const tarefa=new Tarefa(1,"Comprar pão","Ir na padaria do minguel compra 10 de sal", false,2,1);
        expect(tarefa.id).toBe(1)
        expect(tarefa.titulo).toBe("Comprar pão")
        expect(tarefa.descricao).toBe("Ir na padaria do minguel compra 10 de sal")
        expect(tarefa.status).toBe(false)
        expect(tarefa.esforco).toBe(2)
    })
    it("deve lançar erro caso a tarefa não possuia titulo",()=>{
        expect(()=>new Tarefa(2,"","desc", false,2,1)).toThrow("Titulo inválido")
    })
    it("deve lançar erro caso o titulo não seja string",()=>{
        expect(()=>new Tarefa(2,true,"desc", false,2,1)).toThrow("Titulo inválido")
    })
    it("deve lançar erro caso o esforço não seja numero",()=>{
        expect(()=>new Tarefa(2,"titulo","desc", false,true,1)).toThrow("Esforço inválido")
    })
    it("deve lançar erro caso não tenha esforço ",()=>{
        expect(()=>new Tarefa(2,"titulo","desc", false,undefined,1)).toThrow("Esforço inválido")
    })
})