import axios from "axios";

// work in local
const URL = "http://localhost:5001";
// const URL = "http://localhost:5000";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getDrugList() {
  return (await httpClient.get("/drugs")).data;
}

export async function getDrug(id = "") {
  return (await httpClient.get("/drugs/" + id)).data;
}

export async function calDrug(props) {
  return (await httpClient.get(`/calculate/${props.package}/${props.unit}`))
    .data;
}
