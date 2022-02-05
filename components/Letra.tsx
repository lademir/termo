import LetraModel from "../model/LetraModel";


interface LetraProps {
    letra: LetraModel
    letraAtual?: string
}

export default function Letra(props: LetraProps) {
    const letra = props.letra

    return (
        <div className=" cursor-pointer
        bg-rose-300 text-4xl font p-3 mx-3 rounded-md h-20 w-20 flex justify-center items-center
        border-4 border-b-8 border-rose-400
        ">
            <p className="">
                {letra.revelada ? (
                    letra.letra
                ) : (
                    ''
                )}
            </p>
        </div>
    )
}