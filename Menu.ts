import readlinesync = require("readline-sync");


import { colors } from './src/util/Colors';

export function main() {   

    let opcao, id, tipo, preco: number;
    let nome, marca, modelo, configuracoes: string;
    let tipoProduto = ['Celulares', 'Video-Games', 'Notebooks'];




    while (true) {

        console.log(colors.bg.black, colors.fg.white, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                ELETRONICS ANDRENAS WORLD            ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Consultar dados do Produto - por Id  ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong, 
                "\nEletronics Andrenas World - Iphones, Notebooks, Macbooks e Video Games... Seu desejo é aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", {cancel: false}) +1;

                preco = readlinesync.questionFloat("Digite o preço ");              
              
                switch(tipo){
                    case 1:
                        celulares = readlinesync.question("Digite o Nome do Aparelho: ");
                        produtoController.cadastrar(new celulares(produtoController.gerarId(),
                            nome, tipo, preco, marca, modelo));
                        break;
                    case 2:
                        Notebooks = readlinesync.question("Digite o Nome do Aparelho: ");
                        produtoController.cadastrar(new notebooks(produtoController.gerarId(),
                            nome, tipo, preco, marca, modelo));
                        break;    
                    case 3:
                        Video-Games = readlinesync.question("Digite o Nome do Aparelho: ");
                        produtoController.cadastrar(new videogames(produtoController.gerarId(),
                            nome, tipo, preco, marca, modelo));    
                }
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                // Chamada do Método listarTodas() da Classe ContaController
                produtoController.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ")

                produtoContoller.procurarPorId(id);

                keyPress()
                break;
            case 4:
                    console.log(colors.fg.whitestrong,
                        "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");    
    
                    console.log("Digite o Número da Conta: ")
                    numero = readlinesync.questionInt("")
    
                    let produto = produtoController.buscarNoArray(id)
    
                    if (produto !== null) {

                        nome = readlinesync.question("Digite o nome do Produto: ");

                        tipo = produto.tipo;

                        preco = readlinesync.questionFloat("Digite o preco: ");

                    switch (tipo) {
                        case 1:
                            celulares = readlinesync.question("Digite o Nome do Aparelho: ");
                            produtoController.atualizar(new celulares(id,
                                nome, tipo, preco, marca, modelo));
                            break;
                        case 2:
                            Notebooks = readlinesync.question("Digite a Marca e o Modelo do Notebook: ");
                            produtoController.atualizar(new notebooks(id,
                                nome, tipo, preco, marca, modelo));
                            break;    
                        case 3:
                            Video-Games = readlinesync.question("Digite a marca do VideoGame: ");
                            produtoController.atualizar(new videogames(id,
                                nome, tipo, preco, marca, modelo));    
                    }
                
                }else
                   console.log("Produto não Encontrado!")

                keyPress   
                break;                      

                       case 5:
                            console.log(colors.fg.whitestrong,
                                "\n\nApagar um Produto\n\n", colors.reset);
            
                            id = readlinesync.questionInt("Digite o Id do Produto: ");
                            produtoController.deletar(id);
            
                            keyPress()
                            break;
                            }
                        }
                        
}    
         
/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: André Luiz Nascimento Pinto");
    console.log("Generation Brasil - andrenas.nascimento95@gmail.com");
    console.log("https://github.com/andrenas95/Generation/tree/classe_conta");
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();