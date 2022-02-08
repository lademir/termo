import { useRouter } from "next/router";
import Layout from "../components/Layout";
import usePalavra from "../data/hooks/usePalavras";

export default function Home() {
  const router = useRouter();
  const { palavraAleatoria } = usePalavra();

  function handleClick() {
    palavraAleatoria();
    router.push("/game/");
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <button onClick={handleClick} className="bg-purple-400 p-5 rounded-md">
          Iniciar
        </button>
        <p className="text-xs mt-8">Jogo feito por mimizinho</p>
      </div>
    </Layout>
  );
}
