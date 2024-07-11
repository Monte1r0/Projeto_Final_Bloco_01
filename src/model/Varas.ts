import { Produto } from "./Produtos";

export class Varas extends Produto{
    
    private _peso: number;
    private _fabricante: string;
    private _material: string;
    private _capacidadeKg: number;


	constructor(numero: number, preco: number, id: number, tipo: number, nomeProduto: string, quantidade: number, descricaoProduto: string,
                peso: number, fabricante: string, material: string, capacidadeKg: number) {
        super(numero, preco, id, tipo, nomeProduto, quantidade, descricaoProduto)
		this._peso = peso;
		this._fabricante = fabricante;
		this._material = material;
		this._capacidadeKg = capacidadeKg;
	}

	public get peso(): number {
		return this._peso;
	}

	public get fabricante(): string {
		return this._fabricante;
	}

	public get material(): string {
		return this._material;
	}

	public get capacidadeKg(): number {
		return this._capacidadeKg;
	}

	public set peso(value: number) {
		this._peso = value;
	}

	public set fabricante(value: string) {
		this._fabricante = value;
	}

	public set material(value: string) {
		this._material = value;
	}

	public set capacidadeKg(value: number) {
		this._capacidadeKg = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nPeso: ${this._peso.toFixed(2)}Kg` );
        console.log(`\nFabricante: ${this._fabricante}`);
        console.log(`\nMaterial: ${this._material}`);
        console.log(`\nCapacidade em Quilo Gramas que o produto suporta: ${this._capacidadeKg}Kg`);
    }
}