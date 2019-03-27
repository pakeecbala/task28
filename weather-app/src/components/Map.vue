<template>
  <div>
    <div id="map" class="map w-100 p-3"/>
    <Weather
      @on-next="handleNext"
      :temp="this.temp"
      :minTemp="this.minTemp"
      :maxTemp="this.maxTemp"
      :humidity="this.humidity"
      :wind="this.wind"
      :icon="this.icon"
      :date="this.date"
      :description="this.description"
      :city="this.city"
    />
  </div>
</template>

<script>
import axios from "axios";
import Weather from "@/components/Weather";
export default {
  data: function() {
    return {
      mymap: null,
      index: 0,
      temp: 0,
      minTemp: "",
      maxTemp: "",
      humidity: "",
      wind: "",
      icon: "",
      date: "",
      long: "",
      lat: "",
      city: ""
    };
  },
  props: {},
  components: {
    Weather
  },
  mounted() {
    this.getWeather();
  },

  methods: {
    handleNext() {
      this.index += 1;
      this.getWeather();
    },
    getWeather() {
      this.city = "oslo";
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/forecast?q=" +
            this.city +
            "&APPID=f750b0887be2c24fd1390dd30bec8f1a&units=metric"
        )
        .then(response => {
          this.long = response.data.city.coord.lon;
          this.lat = response.data.city.coord.lat;
          if (this.mymap) {
            this.initMap();
          }

          this.temperatureArr = response.data.list;
          this.temp = this.temperatureArr[this.index].main.temp;
          this.description = this.temperatureArr[
            this.index
          ].weather[0].description;
          this.icon = this.temperatureArr[this.index].weather[0].icon;
          this.minTemp = this.temperatureArr[this.index].main.temp_min;
          this.maxTemp = this.temperatureArr[this.index].main.temp_max;
          this.humidity = this.temperatureArr[this.index].main.humidity + "%";
          this.wind = this.temperatureArr[this.index].main.humidity + "m/s";

          this.date = this.temperatureArr[this.index].dt_txt;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },

    initMap() {
      console.log(this.lat, this.long);
      this.mymap = L.map("map").setView([this.lat, this.long], 13);
      var marker = L.marker([this.lat, this.long]).addTo(this.mymap);

      L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox.streets",
          accessToken:
            "pk.eyJ1Ijoid29raW5nIiwiYSI6ImNqdHByejVjcjA3Nm80ZHIwZTgydDA0aWYifQ.A7Nu-j7baTtMJnjPzrTlNA"
        }
      ).addTo(this.mymap);
    }
  }
};
</script>
