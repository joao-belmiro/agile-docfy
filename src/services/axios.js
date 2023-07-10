import axios from 'axios'
const http = axios.create({
  baseURL: 'https://web-medium-scraping.cyclic.app/'
})

const searchUsers = (path) => http.get(path)

export default searchUsers
