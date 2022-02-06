import { useState } from "react";
import LetraModel from "../model/LetraModel";


interface LetraProps {
    letra: LetraModel
}

export default function Letra(props: LetraProps) {
    const letra = props.letra

    function renderBackground() {
        if (letra.estado === 'certa') {
            return 'bg-green-400'
        } else if (letra.estado === 'lugar'){
            return 'bg-yellow-400'
        } else if (letra.estado === 'errada') {
            return 'bg-rose-900'
        } else {
            false
        }
        
    }

    return (
        <div className={`${renderBackground()}  w-full h-full flex justify-center items-center`}>
            {letra.revelada ? (
                letra.letra
            ) : (
                '' 
            )}
        </div>
    )
}