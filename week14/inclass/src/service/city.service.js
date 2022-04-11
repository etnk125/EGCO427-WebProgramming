import axios from "axios";

// const URL = "https://egci427-practice.firebaseio.com/";
const URL = "http://localhost:5000/";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getCityList() {
  // return await httpClient.get("/cities.json");
  return await httpClient.get("/cities");
}
// export async function getCity(id) {
//   return (await httpClient.get(`/cities/${id}.json`)).data;
// }
// https://egci427-practice.firebaseio.com//cities/-L7yBLiuu9oVLYEeH2SU.json
