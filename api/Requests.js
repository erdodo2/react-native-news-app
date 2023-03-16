import axios from "axios";

const key0 = 'e0efff095ec14dd4b78aaf8dbbf9f4e9';
const key1 ='077a3bb4ee364d009a29e2b07f3bb210'
const key2 = 'ed3d0e40f2dc4f079476843e90c4e5ed'

const keys = [key0, key1, key2]

const say = 0
export default {
  async headlines(key=keys[say]) {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}&pageSize=10`;
    return await axios.get(url).catch((err) => {
      this.headlines(keys[say+1]);
    })

  },
  async homeNews() {
    const url = `https://newsapi.org/v2/everything?q=general&apiKey=${api}`;
    return await axios.get(url).catch((err) => {
      this.headlines(keys[say+1]);
    })
  },
  async searchNews(query) {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${api}`;
    return await axios.get(url).catch((err) => {
      this.headlines(keys[say+1]);
    })
  }
}
