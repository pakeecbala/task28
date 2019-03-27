<template>
  <div>
    <div id="map" class="map w-100 p-3"/>
    <Weather :temp= this.temp :wind= this.wind :humidity= this.humidity :city = this.city :description = this.description :icon = this.icon />

  </div>
  
  

</template>

<script>
import axios from "axios";
import Weather from "@/components/Weather";
export default {
  props: {
    temp: '',
    minTemp: '',
    maxTemp:'',
    description: '',
    iconURL: '',
    pressure: '',
    humidity: '',
    wind: '',
    overcast: '', 
    icon: '',
    long: '',
    lat: '',
    city: '',
    temperatureArr: [],
    descriptionArr: [],
    
  },
  components:{
    Weather
  },

  beforeMount(){
    this.getWeather();

  },
  
  methods: {
    getWeather() {
      this.city= "paris";
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/forecast?q="+this.city+"&APPID=f750b0887be2c24fd1390dd30bec8f1a&units=metric"
        )
        .then(response => {
          this.temperatureArr = response.data.list[0];
          this.long = response.data.city.coord.lon;
          this.lat = response.data.city.coord.lat;
          this.temp = this.temperatureArr.main.temp;
          this.description = response.data.list[1].weather[0].description;
          this.icon = response.data.list[1].weather[0].icon;
          this.minTemp = this.temperatureArr.main.min_temp;
          this.maxTemp = this.temperatureArr.main.temp_max;
          this.pressure = this.temperatureArr.main.pressure;
          this.humidity = this.temperatureArr.main.humidity + '%';
          this.wind = this.temperatureArr.main.humidity + 'm/s';
          
          this.initMap();

        
  
        })
        .catch(error => {
          console.log(error);
        });
    },

    initMap() {
      console.log(this.lat, this.long)
      var mymap = L.map("map").setView([this.lat,this.long], 13);
      var marker = L.marker([this.lat, this.long]).addTo(mymap);


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
      ).addTo(mymap);
    },
   
  }
};
</script>
