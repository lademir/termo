import Api from './TermoApi'
import { getRandomIntInclusive } from '../functions/index'

const TermoPropertiesService = {
    getRandomWord: () => Api.get(`/api/palavras/${getRandomIntInclusive()}`)
}

export default TermoPropertiesService