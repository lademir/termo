import LetraModel from "./LetraModel"

export default class PalavraModel {
    #palavra: string
    #acertou: boolean
    #id: number
    #letras: LetraModel[]

    constructor(id: number, palavra: string, acertou = false, letras = []){
        this.#acertou = acertou
        this.#id = id
        this.#palavra = palavra
        this.#letras = letras
    }

    get palavra() {
        return this.#palavra
    }
    get acertou() {
        return this.#acertou
    }
    get id() {
        return this.#id
    }

    get letras() {
        return this.#letras
    }


    set letras(newLetras: LetraModel[]) {
        this.#letras = newLetras
    }

    set acertou(newAcertou: boolean){
        this.#acertou = newAcertou
    }

    mudarPalavra(newPalavra:string) : PalavraModel {
        return new PalavraModel( this.#id , newPalavra)
    }

    completa() : boolean {
        if(this.#palavra.length != 5){
            return false
        }
        return true
    }

    toJson(){
        return {
            palavra: this.#palavra,
            id: this.#id,
            acertou: this.#acertou,
            letras: this.#letras.map(letra => letra.toJson())
        }
    }
    

}