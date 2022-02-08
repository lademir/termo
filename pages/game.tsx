import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Letra from "../components/Letra";
import usePalavra from "../data/hooks/usePalavras";

export default function Game() {
  const { tentativa, mudarTentativa, comparaPalavra, reiniciarTentativa } =
    usePalavra();
  const [pressOk, setPressOk] = useState(false);

  const router = useRouter();

  function renderLetras() {
    // console.log('renderLetras', tentativa.letras.map(_ => _.toJson()))
    return (
      tentativa &&
      tentativa.letras.map((letra, index) => {
        return (
          <div
            key={index}
            className=" cursor-pointer
        bg-rose-300 text-4xl font mx-3 rounded-md h-20 w-20 flex justify-center items-center
        border-4  border-rose-400
        "
          >
            <Letra key={index} letra={letra} />
          </div>
        );
      })
    );
  }

  useEffect(() => {}, [pressOk]);

  function handleReiniciar() {
    reiniciarTentativa();
    router.push("/");
  }

  function handleClick() {
    comparaPalavra(tentativa);
    tentativa.revelarLetras();
    setPressOk(!pressOk);
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-y-10">
        <div className="flex w-3/4 items-center justify-center">{renderLetras()}</div>
        <div className="flex flex-col items-center gap-y-10">
          <input
            className="w-16 text-center focus:border-rose-900"
            type="text"
            maxLength={5}
            onChange={(e) => mudarTentativa(e)}
          />
          <button
            onClick={() => handleClick()}
            className="bg-red-500 rounded-lg w-10"
          >
            OK
          </button>
          <button
            onClick={handleReiniciar}
            className="bg-purple-400 p-2 rounded-md"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </Layout>
  );
}
