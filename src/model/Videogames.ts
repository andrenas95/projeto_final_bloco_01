import { Produto } from "./Produto";

export class Videogames extends Produto{

    private _games: string;

    constructor(id: number, nome: string, tipo: number, preco: number, games: string) {
	super(id, nome, tipo, preco) // Atributos da Classe Produto
              this._games = games;
              
	}


    /**
     * Getter games
     * @return {string}
     */
	public get games(): string {
		return this._games;
	}

    /**
     * Setter games
     * @param {string} value
     */
	public set games(value: string) {
		this._games = value;
	}

   
    

    public visualizar(): void {
    super.visualizar();
    console.log(`console: ${this._games}`);

    }
}