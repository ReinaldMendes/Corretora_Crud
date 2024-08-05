const prompt = require("prompt-sync")();
const {
  criar: criar,
  atualizar: atualizar,
  remover: remover,
  listarcorretora: listarcorretora,
} = require("./corretora.js");
const {
  criarcorretor: criarcorretor,
  atualizarcorretor: atualizarcorretor,
  removercorretor: removercorretor,
  listarcorretor: listarcorretor,
} = require("./corretor.js");

while (true) {
  console.log(`
    1 - Criar Corretora
    2 - Listar Corretoras
    3 - Atualizar Corretora
    4 - Remover Corretora
    5 - Criar Corretor
    6 - Listar Corretors
    7 - Atualizar Corretor
    8 - Remover Corretor
    9 - Sair
  `);

  const opcao = prompt("Qual opção deseja? : ");

  switch (opcao) {
    case "1":
      criar();
      break;
    case "2":
      listarcorretora();
      break;
    case "3":
      atualizar();
      break;
    case "4":
      remover();
      break;
    case "5":
      criarcorretor();
      break;
    case "6":
      listarcorretor();
      break;
    case "7":
      atualizarcorretor();
      break;
    case "8":
      removercorretor();
    case "9":
      process.exit();
    default:
      console.log("Opção inválida, tente novamente.");
      break;
  }
}
