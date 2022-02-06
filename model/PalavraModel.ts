import LetraModel from "./LetraModel"

export default class PalavraModel {
    #palavra: string
    #acertou: boolean
    #id: number
    #letras: LetraModel[]

    constructor(id: number, palavra: string, acertou = false, letras = []) {
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

    set acertou(newAcertou: boolean) {
        this.#acertou = newAcertou
    }

    mudarPalavra(newPalavra:string) : PalavraModel {
        return new PalavraModel( this.#id , newPalavra, this.#acertou, this.#letras)
    }

    completa(): boolean {
        // console.log('palavraModel.completa', this.#palavra.length, this.palavra)
        if (this.#palavra.length != 5) {
            return false
        }
        return true
    }

    preencherLetras() {
        if(this.completa()){
            const arrLetras = [...this.palavra]
            arrLetras.map((letra, index) => {
                this.letras[index] = new LetraModel(letra, '')
            })
        }
    }

    compara(tentativa: PalavraModel)  {
        // return this.#palavra.toLocaleUpperCase() === tentativa.palavra.toLocaleUpperCase()
        const arr = [...this.palavra]
        const arrTentativa = [...tentativa.letras]
        arr.map((letra, index) => {
            if (letra === arrTentativa[index].letra) {
                arrTentativa[index].estado = 'certa'
            } else if (arrTentativa.some(letter => letter.letra === letra)){
                arrTentativa[index].estado = 'lugar'
            } else {
                arrTentativa[index].estado = 'errada'
            }

        })
    }

    revelarLetras() {
        this.#letras.map(letra => letra.revelar()) 
    }

    toJson() {
        return {
            palavra: this.#palavra,
            id: this.#id,
            acertou: this.#acertou,
            letras: this.#letras.map(letra => letra.toJson())
        }
    }


}