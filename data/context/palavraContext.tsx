import { createContext, useState } from "react";


interface PalavrasContextProps {
    palavra?: string
    children?: any
}

const PalavraContext = createContext<PalavrasContextProps>({})

export function PalavraProvider(props) {
    const [palavra, setPalavra] = useState('')

    return (
        <PalavraContext.Provider value={{
            palavra,
        }}>

            {props.children}
        </PalavraContext.Provider>
    )
}

export default PalavraContext