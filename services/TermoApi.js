import axios from 'axios'

export const BASE_URL = "http://localhost:3000/api/palavras/";

const Api = axios.create({ BASE_URL })
export default Api