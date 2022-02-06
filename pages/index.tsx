
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Letra from '../components/Letra'
import usePalavra from '../data/hooks/usePalavras'
import LetraModel from '../model/LetraModel'
import PalavraModel from '../model/PalavraModel'



const defaulPalavra = new PalavraModel(-1, 'default')

export default function Home() {

  const { palavra, mudarPalavra, preencheLetras } = usePalavra()
  const [letrasCertas, setLetrasCertas] = useState()

  const [teste, setTeste] = useState('')

  const letras: LetraModel[] = [
    new LetraModel('M', ''),
    new LetraModel('O', ''),
    new LetraModel('U', ''),
    new LetraModel('S', ''),
    new LetraModel('E', ''),
  ]

  function renderLetras() {
    return (
      letras.map((letra, index) => {
        return (
          <Letra key={index} letra={letra} />
        )
      })
    )
  }

  return (
    <Layout>
      <div className='flex flex-col justify-center items-center gap-y-10'>
        <div className='flex items-center justify-center'>
          {renderLetras()}
        </div>
        <div className='flex flex-col items-center gap-y-10'>
          <input type="text" maxLength={5} onChange={(e) => mudarPalavra(e)} />
          <button onClick={() => preencheLetras()} className='bg-red-500 rounded-lg w-10'>
            OK
          </button>
        </div>
      </div>
    </Layout>
  )
}
