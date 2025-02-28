interface IVeiculo{
    marca: string;
    modelo: string;
    ano: number;
    andar():void;
}

class Carro implements IVeiculo{

    constructor(public marca: string, public modelo: string, public ano: number){}

    andar(): void {
        console.log("Vrum Vrum!")
    }
}