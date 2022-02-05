import { useState } from "react";
import LetraModel from "../model/LetraModel";


interface LetraProps {
    letra: LetraModel
    letraAtual?: string
}

export default function Letra(props: LetraProps) {
    const [letra, setLetra] = useState(props.letra)

    console.log(letra.letra)

    function handleClick() {
        setLetra(letra.revelar())
        // console.log(letra.toJson())
    }

    return (
        <div onClick={() => handleClick()} className=" cursor- pointer
        bg-rose-300 text-4xl font p-3 mx-3 rounded-md h-20 w-20 flex justify-center items-center
        border-4 border-b-8 border-rose-400
        ">
            <p title="letra" >
                {letra.revelada ? (
                    letra.letra
                ) : (
                    ''
                )}
            </p>
        </div>
    )
}