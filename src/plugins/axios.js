import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjA2MTA3YzQyZGFjZTA4ZWM4ZGFkNDlmMGFiZTQwZSIsInN1YiI6IjY1MDQ2ODdlZWEzN2UwMDEzYTRmMjQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ECcYQKWsiStzg-RHY5ZDt0HSjIpWcd8Kjh9pBMn-iuU`
  }
})

export default api
