import axios from "axios";

// work in local
const URL = "http://localhost:5000";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getObjectList() {
  return (await httpClient.get("/objects")).data;
}

export async function getObject(id = "") {
  return (await httpClient.get("/objects/" + id)).data;
}

export async function calObject({ height = 0, width = 0, depth = 0 }) {
  return (await httpClient.get(`/calculate/${height}/${width}/${depth}`)).data;
}
