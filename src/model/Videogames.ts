import { Produto } from "./Produto";

export class Videogames extends Produto{

    private _games: string;
    private _configuracao: string;

    constructor(id: number, nome: string, tipo: number, preco: number, games: string, configuracao: string) {
	super(id, nome, tipo, preco) // Atributos da Classe Produto
              this._games = games;
              this._configuracao = configuracao;
	}

    /**
     * Getter games
     * @return {string}
     */
	public get games(): string {
		return this._games;
	}

    /**
     * Getter configuracao
     * @return {string}
     */
	public get configuracao(): string {
		return this._configuracao;
	}

    /**
     * Setter games
     * @param {string} value
     */
	public set games(value: string) {
		this._games = value;
	}

    /**
     * Setter configuracao
     * @param {string} value
     */
	public set configuracao(value: string) {
		this._configuracao = value;
	}
    

    public visualizar(): void {
    super.visualizar();
    console.log(`console: ${this._games}`);
    console.log(`configuracao: ${this._configuracao}`)

    }
}