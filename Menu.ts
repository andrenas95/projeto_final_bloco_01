import readlinesync = require("readline-sync");

import { colors } from './src/util/Colors'; 
import { ProdutoController } from "./src/Controller/ProdutoController";
import { Celulares } from "./src/model/Celulares";
import { Notebooks } from "./src/model/Notebooks";
import { Videogames } from "./src/model/Videogames";


export function main() {   

    let opcao, id, tipo, preco: number;
    let nome, marca, modelo, configuracao, games: string;
    let tipoProduto = ['Celulares', 'Video-Games', 'Notebooks'];

    // Objeto da Classe ProdutoController
    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Celulares(produtoController.gerarId(),
        "Samsung Galaxy S24", 1, 2000.00, "*8GB ram 128gb", "camera full HD", "FullHD"));

    produtoController.cadastrar(new Notebooks(produtoController.gerarId(),
        "Notebook Dell", 2, 3000.00, "Dell", "Inspiron 15", "SSD 256GB, 8GB RAM Precessador i7 3.00 Ghz 10ª geração"));

    produtoController.cadastrar(new Videogames(produtoController.gerarId(),
        "PS5 Edição Digital", 3, 4500.00, "Console PS5 Edição Digital é uma versão totalmente digital do console PS5, sem o leitor de discos Blu-ray™ Ultra HD. "));


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
              
                switch(tipo) {
                    case 1:
                        marca = readlinesync.question("Digite o Nome do Aparelho: ");
                        modelo = readlinesync.question("Digite o Nome do Aparelho: ");
                        configuracao = readlinesync.question("Digite o Nome do Aparelho: ");
                        produtoController.cadastrar(new Celulares(produtoController.gerarId(),
                            nome, tipo, preco, marca, modelo, configuracao));
                        break;
                    case 2:
                        modelo = readlinesync.question("Digite o Nome do Aparelho: ");
                        marca = readlinesync.question("Digite o Nome do Aparelho: ");
                        configuracao = readlinesync.question("Digite o Nome do Aparelho: ");
                        produtoController.cadastrar(new Notebooks(produtoController.gerarId(),
                            nome, tipo, preco, marca, modelo, configuracao));
                        break;    
                    case 3:
                        games = readlinesync.question("Digite o Nome do Aparelho: ");
                        produtoController.cadastrar(new Videogames(produtoController.gerarId(),
                           nome, tipo, preco, games));    
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

                produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                    console.log(colors.fg.whitestrong,
                        "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");    
    
                    let produto = produtoController.buscarNoArray(id)
    
                    if (produto !== null) {

                        nome = readlinesync.question("Digite o nome do Produto: ");

                        tipo = produto.tipo;

                        preco = readlinesync.questionFloat("Digite o preco: ");

                    switch (tipo) {
                        case 1:
                            modelo = readlinesync.question("Digite o modelo do Aparelho: ");
                            marca = readlinesync.question("Digite a Marca: ");
                            configuracao = readlinesync.question("Digite a Configuracao do Aparelho: ");
                            produtoController.atualizar(new Celulares(id,
                                nome, tipo, preco, marca, modelo, configuracao));
                            break;
                        case 2:
                            modelo = readlinesync.question("Digite o Modelo do Aparelho: ");
                            marca = readlinesync.question("Digite a Marca do Aparelho: ");
                            configuracao = readlinesync.question("Digite a configuração Aparelho: ");
                            produtoController.atualizar(new Notebooks(id,
                                nome, tipo, preco, marca, modelo, configuracao));
                            break;    
                        case 3:
                            modelo = readlinesync.question("Digite o Nome do Aparelho: ");
                            games = readlinesync.question("Digite o Nome do Aparelho: ");
                            
                            produtoController.atualizar(new Videogames(id,
                                nome, tipo, preco, games));    
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