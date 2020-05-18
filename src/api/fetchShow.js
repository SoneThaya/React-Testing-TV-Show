import axios from "axios";


export const fetchShow = () => {
  return axios
    .get(
         "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
         )
    .then(res => {
      console.log(res.data)
      return res.data
    }) // or res.data, however you want to set that up
    .catch(err => {
      console.error("error fetching data from api", err.message)
      return err;
    })
}