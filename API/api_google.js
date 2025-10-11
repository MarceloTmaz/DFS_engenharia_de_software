const Usuario = require("../src/usuario/Usuario");

const u1 = new Usuario("Joao@gmail.com", "joao123");
const u2 = new Usuario("Maria@gmail.com", "Maria123");
const u3 = new Usuario("Lucas@gmail.com", "lucasjr");
const u4 = new Usuario("Jose@gmail.com", "zezinho");

const ids = [1, 2, 3, 4];
const usuarios = [u1, u2, u3, u4];

async function login(email, senha) {
  for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].email === email && usuarios[index].senha === senha) {
      return ids[index];
    }
  }
  return "Senha e/ou usuário inválido";
}

module.exports = login;
