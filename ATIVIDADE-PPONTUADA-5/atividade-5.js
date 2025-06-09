const readlineSync = require('readline-sync')

const estoque = []
//Adicionar Produto
function adicionarProduto() {
    const nome = readlineSync.question("Digite o nome do produto: ");
    const codigo = readlineSync.question("Digite o código do produto: ");
    const quantidade = parseInt(readlineSync.question("Digite a quantidade do produto: "));
    const produto = {
        nome: nome,
        codigo: codigo,
        quantidade: quantidade
    };
    console.log(`Produto ${nome} (Código: ${codigo}) adicionado com sucesso!`);
    estoque.push(produto);
}
//Listar Produtos
function listarProdutos() {
    if (estoque.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    } else {
        console.log("Lista de Produtos:");
        estoque.forEach((produto, index) => {
            console.log(`${index + 1}.
            Nome: ${produto.nome}
            Código: ${produto.codigo}
            Quantidade: ${produto.quantidade}`);
        });
    }
}

//Buscar Produto
function buscarProduto() {
    const codigo = readlineSync.question("Digite o código do produto que deseja buscar: ");
    const produto = estoque.find(produto => produto.codigo === codigo);
    if (produto) {
        console.log(`Produto encontrado: Nome: ${produto.nome}, Código: ${produto.codigo}, Quantidade: ${produto.quantidade}`);
    } else {
        console.log("Produto não encontrado.");
    }
}

//Remover Produto
function removerProduto() {
    const codigo = readlineSync.question("Digite o código do produto que deseja remover: ");
    const index = estoque.findIndex(produto => produto.codigo === codigo);
    if (index !== -1) {
        const produtoRemovido = estoque[index];
        console.log(`Produto removido: Nome: ${produtoRemovido.nome}, Código: ${produtoRemovido.codigo}, Quantidade: ${produtoRemovido.quantidade}`);
        estoque.splice(index, 1);
        console.log("Produto removido com sucesso.");
    } else {
        console.log("Produto não encontrado.");
    }
}
// Exibir Menu
function exibirMenu() {
    console.log("╔═════════════════════════╗")
    console.log("║              Menu       ║")
    console.log("╠═════════════════════════╣")
    console.log("║1. Adicionar Produto     ║")
    console.log("║2. Listar Produtos       ║")
    console.log("║3. Buscar Produto        ║")
    console.log("║4. Remover Produto       ║")
    console.log("║5. Sair                  ║")
    console.log("╚═════════════════════════╝")
}

// Processar Opção
function processarOpcao(opcao) {
    switch (opcao) {
        case '1':
            adicionarProduto();
            break;
        case '2':
            listarProdutos();
            break;
        case '3':
            buscarProduto();
            break;
        case '4':
            removerProduto();
            break;
        case '5':
            console.log("Saindo...");
            break;
            default:
                console.log("Opção inválida, tente novamente.");
                break;
        }
    }
    
    // Loop principal do programa
    let opcao = '';
    do {
        exibirMenu();
        opcao = readlineSync.question("Escolha uma opção: ");
        processarOpcao(opcao);
    } while (opcao !== '5');