
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Letra from '../components/Letra'
import LetraModel from '../model/LetraModel'
import PalavraModel from '../model/PalavraModel'

const BASE_URL = 'http://localhost:3000/api'

const defaulPalavra = new PalavraModel(-1, 'default')

export default function Home() {

  const [palavra, setPalavra] = useState<PalavraModel>(defaulPalavra)
  const [letrasCertas, setLetrasCertas] = useState()

  const [teste, setTeste] = useState('')

  const letras: LetraModel[] = [
    new LetraModel('M', ''),
    new LetraModel('O', ''),
    new LetraModel('U', ''),
    new LetraModel('S', ''),
    new LetraModel('E', ''),
  ]

  function getRandomIntInclusive() {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    const min = 1
    const max = 5
    return Math.floor(Math.random() * (max - min)) + min;
  }

  async function carregarIdsDaPalavra() {
    const randomId = getRandomIntInclusive()
    const resp = await fetch(`${BASE_URL}/palavras/${randomId}`)
    const json = await resp.json()
    // console.log(json)
  }

  function renderLetras() {
    return (
      letras.map((letra, index) => {
        return (
          <Letra key={index} letra={letra} />
        )
      })
    )
  }

  function handleClick() {
    if(palavra.completa()) {
      const arrLetras = [...palavra.palavra]
      arrLetras.map((letra,index) => {
        palavra.letras.push(new LetraModel(letra,''))
      })
      console.log(palavra.toJson())
    }
  }

  function handleChange(e: any) {
    const input = new String(e.target.value)
    if (input.length === 5) {
      setPalavra(palavra.mudarPalavra(input.toString().toLocaleUpperCase()))
    }
  }



  return (
    <Layout>
      <div className='flex flex-col justify-center items-center gap-y-10'>
        <div className='flex items-center justify-center'>
          {renderLetras()}
        </div>
        <div className='flex flex-col items-center gap-y-10'>
          <input type="text" maxLength={5} onChange={(e) => handleChange(e)} />
          <button onClick={() => handleClick()} className='bg-red-500 rounded-lg w-10'>
            OK
          </button>
        </div>
      </div>
    </Layout>
  )
}
