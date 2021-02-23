import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
  headers: {
        'x-rapidapi-key': '9f24bbc846msh784bdc8aac0fae0p1615c9jsne2997e4472ae',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
})

export const newsAPI = {
  getNews(q = 'taylor swift',
          pageNumber = 1,
          pageSize = 10,
          autoCorrect = true,) {
    return instance.get(`/?q=${q}&pageNumber=${pageNumber}&pageSize=${pageSize}&autoCorrect=${autoCorrect}`)
      .then((res) => res.data)
  }
}