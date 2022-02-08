import LetraModel from "./LetraModel";

export default class PalavraModel {
  #palavra: string;
  #id: number;
  #letras: LetraModel[];

  constructor(id: number, palavra: string, letras = []) {
    this.#id = id;
    this.#palavra = palavra;
    this.#letras = letras;
  }

  get palavra() {
    return this.#palavra;
  }
  get id() {
    return this.#id;
  }

  get letras() {
    return this.#letras;
  }

  set letras(newLetras: LetraModel[]) {
    this.#letras = newLetras;
  }

  mudarPalavra(newPalavra: string): PalavraModel {
    return new PalavraModel(this.#id, newPalavra, this.#letras);
  }

  completa(): boolean {
    // console.log('palavraModel.completa', this.#palavra.length, this.palavra)
    if (this.#palavra.length != 5) {
      return false;
    }
    return true;
  }

  preencherLetras() {
    if (this.completa()) {
      const arrLetras = [...this.palavra];
      arrLetras.map((letra, index) => {
        this.letras[index] = new LetraModel(letra, "");
      });
    }
  }

  hasOne(tentativa: LetraModel){
      for (let i = 0; i < this.letras.length; i++) {
        if(this.letras[i].letra === tentativa.letra && tentativa.estado === ''){
            // console.log(this.letras[i].letra, tentativa[j].letra)
            return true
        }
      }
      return false
  }

  compara(tentativa: PalavraModel) {
    const arr = [...this.letras];
    const arrTentativa = [...tentativa.letras];
    const out = [];
    

    arr.map((letra, index) => {
        if(letra.compara(arrTentativa[index])){
            arrTentativa[index].estado =  'certa'
        }
        else if(this.hasOne(arrTentativa[index])){
            console.log(arrTentativa[index].toJson(), letra.toJson())
            arrTentativa[index].estado = 'lugar'
        } else {
            arrTentativa[index].estado = 'errada'
        }
    })

    return out;
  }

  revelarLetras() {
    this.#letras.map((letra) => letra.revelar());
  }

  toJson() {
    return {
      palavra: this.#palavra,
      id: this.#id,
      letras: this.#letras.map((letra) => letra.toJson()),
    };
  }

  static vazio(): PalavraModel {
    const vazio = new PalavraModel(-1, "     ");
    vazio.preencherLetras();
    return vazio;
  }

  static APartirDaPalavra(palavra: string): PalavraModel {
    return new PalavraModel(10, palavra.toLocaleUpperCase());
  }
}
