export abstract class Produto{

    //Definir os Atributos da classe (Caracteristicas)

    private _numero: number;
    private _preco: number;
    private _id: number;
    private _tipo: number;
    private _nomeProduto: string;
    private _quantidade: number;
    private _descricaoProduto: string;

    // Definimos o Método construtor, responsável por criar os objetos da classe.   


	constructor(numero: number, preco: number, id: number, tipo: number, nomeProduto: string, quantidade: number, descricaoProduto: string) {
		this._numero = numero;
		this._preco = preco;
		this._id = id;
		this._tipo = tipo;
		this._nomeProduto = nomeProduto;
		this._quantidade = quantidade;
		this._descricaoProduto = descricaoProduto;
	}


	public get numero(): number {
		return this._numero;
	}

	public get preco(): number {
		return this._preco;
	}

	public get id(): number {
		return this._id;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get nomeProduto(): string {
		return this._nomeProduto;
	}

	public get quantidade(): number {
		return this._quantidade;
	}

	public get descricaoProduto(): string {
		return this._descricaoProduto;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set nomeProduto(value: string) {
		this._nomeProduto = value;
	}

	public set quantidade(value: number) {
		this._quantidade = value;
	}

	public set descricaoProduto(value: string) {
		this._descricaoProduto = value;
	}

    // Método para retirar Produtos

    public retirar(valor: number): boolean{
        if(this._quantidade < valor){
            console.log("Quantidade Insuficiente!!");
            return false;
        }

        this._quantidade = this._quantidade - valor;
        return true;
    }

    // Método Inserir Quantidade ao Produto
    public depositar(valor: number): void{
        this._quantidade = this._quantidade + valor;
        
    }


    //Método para vizualizar todos os dados do Produto
    public visualizar(): void{
        
        


        let tipo: string = "";

        switch(this._tipo){
            case 1:
                tipo = "Varas";
            break;
            case 2:
                tipo = "Anzol, Boias, Chumbo";
            break;
        }
        console.log("\n************************************");
        console.log("\n Dados do Produto");
        console.log("\n************************************");
        console.log(`\nNumero do Produto: ${this._numero}`);
        console.log(`\nNumeroda id: ${this._id}`);
        console.log(`\nTipo da Produto: ${tipo}`);
        console.log(`\nNome do Produto: ${this._nomeProduto}`);
        console.log(`\npreço: ${this._preco.toFixed(2)}`);
        console.log(`\nQuantidade: ${this._quantidade}`);
        console.log(`\nDescrição: ${this._descricaoProduto}`);
    }
}