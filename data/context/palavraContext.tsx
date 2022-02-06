import { createContext, useEffect, useState } from "react";
import LetraModel from "../../model/LetraModel";
import PalavraModel from "../../model/PalavraModel";
import { getRandomIntInclusive } from '../../functions'


interface PalavrasContextProps {
    children?: any
    tentativa?: PalavraModel
    posLetras?: string[]
    mudarTentativa?: (newPalavra: any) => void
    preencheLetras?: (palavra: PalavraModel) => void
    comparaPalavra?: (tentatiava: PalavraModel) => void
    log?: () => void
}

const BASE_URL = 'http://localhost:3000/api'

const PalavraContext = createContext<PalavrasContextProps>({})

const defaulPalavra = new PalavraModel(-1, 'INICI')

const palavraTeste = new PalavraModel(1, 'MOUSE');

export function PalavraProvider(props) {


    const palavra = palavraTeste
    const [tentativa, setTentativa] = useState<PalavraModel>(defaulPalavra)


    function mudarTentativa(e: any) {
        const input = new String(e.target.value).toString().toLocaleUpperCase()
        if (input.length === 5) {
            setTentativa(tentativa.mudarPalavra(input))
            console.log('mudarTentativa',tentativa.toJson())
        }
    }

    function comparaPalavra(tentativa: PalavraModel) {
        palavra.compara(tentativa)
    }

    useEffect(() => {
        palavra.preencherLetras()
    }, [palavra]);

 
    function log() {
        console.log(palavra.toJson(), tentativa.toJson())
    }
    
    return (
        <PalavraContext.Provider value={{
            log,
            tentativa,
            mudarTentativa,
            comparaPalavra
        }}>

            {props.children}
        </PalavraContext.Provider>
    )
}

export default PalavraContext


// async function carregarIdsDaPalavra() {
//     const randomId = getRandomIntInclusive()
//     const resp = await fetch(`${BASE_URL}/palavras/${randomId}`)
//     const json = await resp.json()
//     // console.log(json)
// }