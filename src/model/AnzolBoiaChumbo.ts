import { Produto } from "./Produtos"

export class AnzolBoiaChumbo extends Produto{

    // Definir os atributos da Classa
    private _modelo: string;
    private _lugar: string;
    private _grama: number;


	constructor(numero: number, preco: number, id: number, tipo: number, nomeProduto: string, quantidade: number, descricaoProduto: string, 
                modelo: string, lugar: string, grama: number) {
        super(numero, preco, id, tipo, nomeProduto, quantidade, descricaoProduto)
		this._modelo = modelo;
		this._lugar = lugar;
		this._grama = grama;
	}


	public get modelo(): string {
		return this._modelo;
	}

	public get lugar(): string {
		return this._lugar;
	}

	public get grama(): number {
		return this._grama;
	}

	public set modelo(value: string) {
		this._modelo = value;
	}

	public set lugar(value: string) {
		this._lugar = value;
	}

	public set grama(value: number) {
		this._grama = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nModelo. ${this._modelo}`);
        console.log(`\nProduto para pescar no:  ${this._lugar}`);
        console.log(`\npeso. ${this._grama}`);
    }
}
