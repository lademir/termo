import palavras from "../bd"


export default function services(req, res) {
    const idSelecionado = +req.query.id
    console.log(idSelecionado)
    const unicaPalavra = palavras.filter(palavra => palavra.id === idSelecionado)

    if(unicaPalavra.length === 1){
        const palavraSelecionada = unicaPalavra[0]
        res.status(200).json(palavraSelecionada.toJson())
    } else {
        res.status(204).send()
    }
}