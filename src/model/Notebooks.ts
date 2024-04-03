import { Produto } from "./Produto";

export class Notebooks extends Produto{

    private _marca: string;
    private _modelo: string;
    private _configuracao: string;

    constructor(id: number, nome: string, tipo: number, preco: number, marca: string, modelo: string, configuracao: string) {
	super(id, nome, tipo, preco) // Atributos da Classe Produto
              this._marca = marca;
              this._modelo = modelo;
              this._configuracao = configuracao;
	}


    /**
     * Getter marca
     * @return {string}
     */
	public get marca(): string {
		return this._marca;
	}

    /**
     * Getter modelo
     * @return {string}
     */
	public get modelo(): string {
		return this._modelo;
	}

    /**
     * Getter configuracao
     * @return {string}
     */
	public get configuracao(): string {
		return this._configuracao;
	}

    /**
     * Setter marca
     * @param {string} value
     */
	public set marca(value: string) {
		this._marca = value;
	}

    /**
     * Setter modelo
     * @param {string} value
     */
	public set modelo(value: string) {
		this._modelo = value;
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
    console.log(`Marca: ${this._marca}`);
    console.log(`Modelo: ${this._modelo}`)
    console.log(`configuracao: ${this._configuracao}`)

    }
}