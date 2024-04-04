import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{

 // Collection Array que aramzenará os Objetos das Classes
    // produtoCorrente e produtoPoupanca
    private listaProdutos: Array<Produto> = new Array<Produto>();

    // Atributo que será utilizado para controlar o id das
    // produtos
    public id: number = 0;

    // Método para Listar os dados de uma produto
    // inseridas na Collection listaprodutos
    procurarPorId(id: number): void {
        let buscaproduto = this.buscarNoArray(id);

        if(buscaproduto !== null)
            buscaproduto.visualizar()
        else
            console.log("\nproduto não foi Encontrado!")
    }

    // Método para Listar os dados de todas as produtos
    // inseridas na Collection listaprodutos
    listarTodas(): void {
       for (let produto of this.listaProdutos){
            produto.visualizar();
       }
    }

     // Método para adicionar Objetos das Classes 
     // produtoCorrente e produtoPoupanca
    // na Collection listaprodutos
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("O produto foi adicionado!")
    }

    // Método para atualizar os dados de uma produto
    // inseridas na Collection listaprodutos
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !== null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`O produto número ${produto.id} foi Atualizado com êxito!`)
        }else
            console.log("\nproduto não foi Encontrado!")
    }

    // Método para deletar uma produto
    // inseridas na Collection listaprodutos
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
            console.log(`O produto número ${id} foi Excluído com êxito!`)
        }else
            console.log("\nProduto não foi Encontrado!")
    }


    // Métodos Auxiliares

    // Método para gerar um número para uma nova produto
    public gerarId(): number{
        return ++ this.id
    }
    
    // Método para procurar uma produto pelo id
    public buscarNoArray(id: number): Produto | null{
        for (let produto of this.listaProdutos){
            if (produto.id === id)
                return produto;
       }

       return null;
    }


}