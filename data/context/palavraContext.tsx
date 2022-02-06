import { createContext, useState } from "react";
import LetraModel from "../../model/LetraModel";
import PalavraModel from "../../model/PalavraModel";


interface PalavrasContextProps {
    palavra?: PalavraModel
    mudarPalavra?: (newPalavra: any) => void
    preencheLetras?: () => void
    children?: any
}

const BASE_URL = 'http://localhost:3000/api'

const PalavraContext = createContext<PalavrasContextProps>({})

const defaulPalavra = new PalavraModel(-1, 'default')

export function PalavraProvider(props) {
    const [palavra, setPalavra] = useState<PalavraModel>(defaulPalavra)


    function getRandomIntInclusive() {
        // min = Math.ceil(min);
        // max = Math.floor(max);
        const min = 1
        const max = 5
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function mudarPalavra(e: any) {
        const input = new String(e.target.value)
        if (input.length === 5) {
            setPalavra(palavra.mudarPalavra(input.toString().toLocaleUpperCase()))
        }
    }

    // preenche o array de letras da palavra
    function preencheLetras() {
        if (palavra.completa()) {
            const arrLetras = [...palavra.palavra]
            arrLetras.map((letra, index) => {
                palavra.letras.push(new LetraModel(letra, ''))
            })
            console.log(palavra.toJson())
        }
    }

    async function carregarIdsDaPalavra() {
        const randomId = getRandomIntInclusive()
        const resp = await fetch(`${BASE_URL}/palavras/${randomId}`)
        const json = await resp.json()
        // console.log(json)
    }

    return (
        <PalavraContext.Provider value={{
            palavra,
            mudarPalavra,
            preencheLetras
        }}>

            {props.children}
        </PalavraContext.Provider>
    )
}

export default PalavraContext