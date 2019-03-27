<template>
  <div>
    <div id="map" class="map w-100 p-3"/>
    <Weather
      @on-next="handleNext"
      @on-prev="handlePrev"
      :temp="temp"
      :minTemp="minTemp"
      :maxTemp="maxTemp"
      :humidity="humidity"
      :wind="wind"
      :icon="icon"
      :date="date"
      :description="description"
      :city="city"
    />
  </div>
</template>
 
<script>
import axios from "axios";
//we import the Wheather component because we'll send props to it
import Weather from "./Weather";
export default {
  props: {
    input: String //defined a prop because we're taking in data from the parent "App"
  },
  data: function() {
    return {
      //variables we'll use througout the program
      mymap: null,
      index: 0,
      temp: 0,
      temperatureArr: [],
      //description of the weather. I.E cloudy, sunny..etc
      description: "",
      minTemp: 0,
      maxTemp: 0,
      humidity: "",
      wind: "",
      /*will be passed to the Weather component. Icon contains a
      string which will be put in a URL where we get our weather icons
      */
      icon: "",
      date: "",
      long: "",
      lat: "",
      city: "oslo" //the default city where the map and weather loads
    };
  },
  components: {
    Weather
  },
  beforeMount() {
    /*calls the getWeather method before we mount.
     In this method we do the API call and assign
     the variables above*/
    this.getWeather();
  },
 
  methods: {
    updateMap() {
      /*in this method we first remove the map that's initialized in initMap()
        we then assign city to "input" which is passed as a prop from the parent "App.vue"
        we then call getWeather again to reassign the variables to the right city*/
      this.mymap.remove();
      this.city = this.input;
      this.getWeather(0);
    },
 
    handleNext() {
      /*we have two buttons, NEXT and PREV that goes through the
      API when pressed and shows the wheather 3 hours from now or 
      3 hours prior. This is done by incrementing decrementing the array index of List
      (which is a json-array in the api) 
      */      

      if (this.index + 1 < this.temperatureArr.length) {
        this.index++;
        this.setData();
      }
    },
    handlePrev() {
      if (this.index >= 1) {
        this.index--;
        this.setData();
      }
    },
    getWeather() {
      //here we make a dynamic api call by using the city variable
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/forecast?q=" +
            this.city +
            "&APPID=fb7ab8e839d245357544158716e0b60c&units=metric"
        )
        .then(response => {
          //variables assigned
          this.long = response.data.city.coord.lon;
          this.lat = response.data.city.coord.lat;
          this.temperatureArr = response.data.list;
          this.index = 0;
         
          this.initMap();
          this.setData();
        })
        .catch(error => {
          console.log(error);
        });
    },
    setData() {
      //Assign variables
      this.temp = this.temperatureArr[this.index].main.temp;
      this.description = this.temperatureArr[this.index].weather[0].description;
      this.icon = this.temperatureArr[this.index].weather[0].icon;
      this.minTemp = this.temperatureArr[this.index].main.temp_min;
      this.maxTemp = this.temperatureArr[this.index].main.temp_max;
      this.humidity = this.temperatureArr[this.index].main.humidity + "%";
      this.wind = this.temperatureArr[this.index].wind.speed + " m/s";
      this.date = this.temperatureArr[this.index].dt_txt;
    },
    initMap() {
      //We set the coordinates for where the map is centered. Zoom is set to 13
      this.mymap = L.map("map").setView([this.lat, this.long], 13);
      //We set a marker
      var marker = L.marker([this.lat, this.long]).addTo(this.mymap);
 
      //here we give our map a layout
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