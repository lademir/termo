import { createContext, useEffect, useState } from "react";
import LetraModel from "../../model/LetraModel";
import PalavraModel from "../../model/PalavraModel";
import Api from "../../services/TermoProperties";

interface PalavrasContextProps {
  children?: any;
  tentativa?: PalavraModel;
  mudarTentativa?: (newPalavra: any) => void;
  preencheLetras?: (palavra: PalavraModel) => void;
  comparaPalavra?: (tentatiava: PalavraModel) => void;
  log?: () => void;
  palavraAleatoria?: () => void;
  reiniciarTentativa?: () => void;
}

const PalavraContext = createContext<PalavrasContextProps>({});

export function PalavraProvider(props) {
  const [palavra, setPalavra] = useState<PalavraModel>(PalavraModel.vazio());
  const [tentativa, setTentativa] = useState<PalavraModel>(
    PalavraModel.vazio()
  );
  const [historico, setHistorico] = useState<any[]>();

  useEffect(() => {
    palavra.preencherLetras();
  }, [palavra]);

  useEffect(() => {
    tentativa.preencherLetras();
  }, [tentativa]);

  function mudarTentativa(e: any) {
    const input = new String(e.target.value).toString().toLocaleUpperCase();
    if (input.length === 5) {
      setTentativa(tentativa.mudarPalavra(input));
    }
  }

  function comparaPalavra(tentativa: PalavraModel) {
    setHistorico(palavra.compara(tentativa));
  }

  function reiniciarTentativa() {
    setTentativa(PalavraModel.vazio());
  }

  async function palavraAleatoria() {
    const res = await Api.getRandomWord();
    const data = res.data;
    setPalavra(PalavraModel.APartirDaPalavra(data.palavra));
    // console.log(data);
  }

  function log() {
    console.log(palavra.toJson(), tentativa.toJson());
    // historico.map(a => console.log(a))
  }

  return (
    <PalavraContext.Provider
      value={{
        log,
        tentativa,
        mudarTentativa,
        comparaPalavra,
        palavraAleatoria,
        reiniciarTentativa,
      }}
    >
      {props.children}
    </PalavraContext.Provider>
  );
}

export default PalavraContext;
