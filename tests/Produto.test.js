const Tarefa=require("../src/tarefa/Tarefa")

describe("Tarefa",()=>{
    it("deve ser criada corretamente",()=>{
        const tarefa=new Tarefa("Comprar pão","Ir na padaria do minguel compra 10 de sal", "em andamento",2);
        expect(tarefa.titulo).toBe("Comprar pão")
        expect(tarefa.descricao).toBe("Ir na padaria do minguel compra 10 de sal")
        expect(tarefa.status).toBe("em andamento")
        expect(tarefa.esforco).toBe(2)
    })
    it("deve lançar erro caso a tarefa não possuia titulo",()=>{
        expect(()=>new Tarefa("","desc", "status",2)).toThrow("Titulo inválido")
    })
    it("deve lançar erro caso o titulo não seja string",()=>{
        expect(()=>new Tarefa(true,"desc", "status",2)).toThrow("Titulo inválido")
    })
    it("deve lançar erro caso o esforço não seja numero",()=>{
        expect(()=>new Tarefa("titulo","desc", "status",true)).toThrow("Esforço inválido")
    })
    it("deve lançar erro caso não tenha esforço ",()=>{
        expect(()=>new Tarefa("titulo","desc", "status",)).toThrow("Esforço inválido")
    })
})