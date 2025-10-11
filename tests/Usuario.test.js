const Tarefa = require("../src/tarefa/Tarefa");
const Usuario = require("../src/usuario/Usuario");

describe("Usuario", () => {

  // Mock do db para login
  const mockDb = {
    login: jest.fn()
  };

  describe("Adição de tarefas", () => {
    it("deve incrementar uma tarefa válida", () => {
      const usuario = new Usuario("Joao@gmail.com", "joao123", mockDb);
      const tarefa = new Tarefa("Comprar pão", "Ir na padaria comprar 10 pães", "em andamento", 2);

      usuario.addTarefa(tarefa);
      expect(usuario.tarefas.length).toBe(1);  // Corrigi 'lenght' -> 'length'
    });

    it("deve lançar erro ao adicionar uma tarefa inválida", () => {
      const usuario = new Usuario("Joao@gmail.com", "joao123", mockDb);
      const tarefa = new Usuario("Joaquin", "paoDoce123", mockDb); // objeto errado

      expect(() => usuario.addTarefa(tarefa)).toThrow("Tarefa inválido");
    });
  });

  describe("Remoção de tarefas", () => {
    it("deve remover uma tarefa com sucesso", () => {
      const usuario = new Usuario("Joao@gmail.com", "joao123", mockDb);
      const tarefa = new Tarefa("Comprar pão", "Ir na padaria comprar 10 pães", "em andamento", 2);

      usuario.addTarefa(tarefa);
      const msg = usuario.removeTarefa(tarefa);

      expect(msg).toBe("tarefa removida");
      expect(usuario.tarefas.length).toBe(0);
    });

    it("deve lançar erro ao tentar remover uma tarefa que não existe", () => {
      const usuario = new Usuario("Joao@gmail.com", "joao123", mockDb);
      const tarefa = new Tarefa("Comprar pão", "Ir na padaria comprar 10 pães", "em andamento", 2);

      expect(() => usuario.removeTarefa(tarefa)).toThrow("Tarefa invalida");
    });
  });

  describe("Login", () => {

    it("deve fazer login válido", async () => {
      const usuario = new Usuario("Joao@gmail.com", "joao123", mockDb);

      mockDb.login.mockResolvedValueOnce(1); // mock retornando id 1

      await usuario.login("Joao@gmail.com", "joao123");

      expect(usuario.id).toBe(1);
      expect(usuario.email).toBe("Joao@gmail.com");
      expect(usuario.senha).toBe("joao123");
      expect(mockDb.login).toHaveBeenCalledWith("Joao@gmail.com", "joao123");
    });

    it("deve lançar erro ao tentar login inválido", async () => {
      const usuario = new Usuario("Joao@gmail.com", "joao123", mockDb);

      mockDb.login.mockResolvedValueOnce("Senha e/ou usuário inválido");

      await expect(usuario.login("Joao@gmail.com", "errada")).rejects.toThrow("Usuario inválido");
    });

    it.each([
      [null, "1234", "email inválido"],
      [123, "1234", "email inválido"],
      ["user", null, "senha inválido"],
      ["user", 1234, "senha inválido"],
    ])(
      "deve lançar erro ao tentar logar com email=%p e senha=%p",
      async (email, senha, mensagem) => {
        const usuario = new Usuario("teste@gmail.com", "1234", mockDb);

        await expect(usuario.login(email, senha)).rejects.toThrow(mensagem);
      }
    );

  });
});
