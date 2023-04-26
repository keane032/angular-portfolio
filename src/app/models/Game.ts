export class Game{
    id: number | undefined;
    nome: string | undefined;

    constructor(id: number, nome: string){
        this.id = id;
        this.nome = nome;
    }
}