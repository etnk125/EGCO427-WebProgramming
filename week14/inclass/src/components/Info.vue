<template>
  <!-- {{Weathers}} -->
  <div class="Info">
    <div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info" v-for="weather in Weathers">
          <div class="panel-heading">
            <h3 class="panel-title">{{weather.name}}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p>
                  <b>Weather:</b>
                  ({{weather.coord.lat}},{{weather.coord.lon}})
                </p>
                <p>
                  <b>Pressure:</b>
                  {{weather.main.pressure}}
                </p>
                <p>
                  <b>Main Weather:</b>Main Weather
                </p>
              </div>
              <div class="col-xs-86col-sm-6 col-md-6 col-lg-6">
                <p>
                  <b>Temperature:</b>
                  {{weather.main.temp}}
                </p>
                <p>
                  <b>Humidity:</b>
                  {{weather.main.humidity}}
                </p>
                <p>
                  <b>Description:</b>
                  {{weather.weather[0].description}}
                </p>
              </div>
            </div>
            <div class="row">
              <img :src="`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`" alt />
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
    </div>
  </div>
</template>
<script>
import { getWeather } from "../service/weather.service";
export default {
  name: "Weather",
  data() {
    return {
      Weathers: [],
      city: this.$route.params.city,
    };
  },
  async created() {
    console.log("Info");
    this.Weathers = (await getWeather(this.city)).data.list;
  },
};
</script>
<style scoped>
p {
  text-align: left;
}
img {
  margin: 0 auto;
  max-width: 80px;
}
</style>