import '../styles/globals.css'
import { PalavraProvider } from '../data/context/palavraContext'

function MyApp({ Component, pageProps }) {
  return (
    <PalavraProvider>
      <Component {...pageProps} />
    </PalavraProvider>
  )
}

export default MyApp
