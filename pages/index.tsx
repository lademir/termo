
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Letra from '../components/Letra'
import usePalavra from '../data/hooks/usePalavras'
import LetraModel from '../model/LetraModel'
import PalavraModel from '../model/PalavraModel'


export default function Home() {

  const { tentativa, mudarTentativa, comparaPalavra, log } = usePalavra()

  function renderLetras() {
    // console.log('renderLetras',tentativa.letras.map(_ => _.toJson()))
    return (
      tentativa && tentativa.letras.map((letra, index) => {
        return (
          <div key={index} className=" cursor-pointer
        bg-rose-300 text-4xl font mx-3 rounded-md h-20 w-20 flex justify-center items-center
        border-4  border-rose-400
        ">
            <Letra key={index} letra={letra} />
          </div>
        )
      })
    ) 
  } 

  useEffect(() => {
    tentativa.preencherLetras()
  }, [tentativa]);

 
  function handleClick() {
    comparaPalavra(tentativa)
    tentativa.revelarLetras()
    console.log(tentativa.letras.map(letra => letra.toJson()))
  }

  return (
    <Layout>
      <div className='flex flex-col justify-center items-center gap-y-10'>
        <div className='flex items-center justify-center'>
          {renderLetras()}
        </div>
        <div className='flex flex-col items-center gap-y-10'>
          <input type="text" maxLength={5} onChange={(e) => mudarTentativa(e)} />
          <button onClick={handleClick} className='bg-red-500 rounded-lg w-10'>
            OK
          </button>
          {tentativa.palavra}
          <button className='bg-white rounded-lg' onClick={() => log()}>
            log
          </button>
        </div>
      </div>
    </Layout>
  )
}
