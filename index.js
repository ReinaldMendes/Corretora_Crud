const prompt = require("prompt-sync")();
const crudCorretora = require("./corretora.js");
const crudCorretor = require("./corretor.js");
const crudImovel = require("./imovel.js");
const crudCliente = require("./cliente.js");
const crudVenda = require("./venda.js");

const opcoes = `
Escolha uma opção:
1. Criar corretora
2. Atualizar corretora
3. Remover corretora
4. Listar corretoras
5. Criar corretor
6. Atualizar corretor
7. Remover corretor
8. Listar corretores
9. Criar imóvel
10. Atualizar imóvel
11. Remover imóvel
12. Listar imóveis
13. Criar cliente
14. Atualizar cliente
15. Remover cliente
16. Listar clientes
17. Criar venda
18. Atualizar venda
19. Remover venda
20. Listar vendas
21. Sair
`;

while (true) {
  console.log(opcoes);
  const opcao = parseInt(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      crudCorretora.criar();
      break;
    case 2:
      crudCorretora.atualizar();
      break;
    case 3:
      crudCorretora.remover();
      break;
    case 4:
      crudCorretora.listarcorretora();
      break;
    case 5:
      crudCorretor.criarcorretor();
      break;
    case 6:
      crudCorretor.atualizarcorretor();
      break;
    case 7:
      crudCorretor.removercorretor();
      break;
    case 8:
      crudCorretor.listarcorretor();
      break;
    case 9:
      crudImovel.criarImovel();
      break;
    case 10:
      crudImovel.atualizarImovel();
      break;
    case 11:
      crudImovel.removerImovel();
      break;
    case 12:
      crudImovel.listarImovel();
      break;
    case 13:
      crudCliente.criarCliente();
      break;
    case 14:
      crudCliente.atualizarCliente();
      break;
    case 15:
      crudCliente.removerCliente();
      break;
    case 16:
      crudCliente.listarCliente();
      break;
    case 17:
      crudVenda.criarVenda();
      break;
    case 18:
      crudVenda.atualizarVenda();
      break;
    case 19:
      crudVenda.removerVenda();
      break;
    case 20:
      crudVenda.listarVenda();
      break;
    case 21:
      console.log("Saindo...");
      process.exit();
    default:
      console.log("Opção inválida, tente novamente.");
  }
}
