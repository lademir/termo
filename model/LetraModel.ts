export default class LetraModel {

    #letra: string
    // certa | errada | lugar | '' 
    #estado: string
    #revelada: boolean

    constructor(letra: string, estado: string, revelada = false ) {
        this.#letra = letra
        this.#estado = estado
        this.#revelada = revelada
    }

    get letra (){
        return this.#letra
    }
    get estado (){
        return this.#estado
    }
    get revelada (){
        return this.#revelada
    }

    naoRevelada() {
        return !this.#revelada
    }

    set revelada(newRelevada: boolean) {
        this.#revelada = newRelevada
    }

    set estado(newEstado) {
        this.#estado = newEstado
    }

    // Ao apertar
    revelar() : LetraModel {
        return new LetraModel(this.#letra, this.estado, this.naoRevelada())
    }


    toJson() {
        return {
            letra: this.#letra,
            estado: this.#estado,
            revelada: this.#revelada
        }
    }
}