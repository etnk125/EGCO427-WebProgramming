import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getWeather(
  city,
  APIKEY = "e63495cb542cc3b7ba224d0bc7125601"
) {
  return await httpClient.get(
    "find?q=" + city + "&type=accurate&appid=" + APIKEY + "&units=metric"
  );
}
