<template>
<v-container>
    <v-btn
        flat
        href="#"
        
      >
        <span class="mr-2">Today{{temp}}</span>
      </v-btn>

       <v-btn
        flat
        href="#"
    
      >
        <span class="mr-2">Tomorrow</span>
      </v-btn>

       <v-btn
        flat
        href="#"
        
      >
        <span class="mr-2">Next Week</span>
      </v-btn>
      
  <div id="map" class="map"></div>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
    temp: '',
    minTemp: '',
    maxTemp:'',
    sunrise: '',
    sunset: '',
    pressure: '',
    humidity: '',
    wind: '',
    overcast: '', 
    icon: '',
    temperatureArr: []
    }
  },

  mounted() {
    this.initMap();
    this.getWeather();  
  },
  methods: {
    
  getWeather(){
      axios
      .get('http://api.openweathermap.org/data/2.5/forecast?q=oslo,no&APPID=f750b0887be2c24fd1390dd30bec8f1a&units=metric')
      .then(response => {
          this.temperatureArr = response.data.list[0];
          this.temp = this.temperatureArr.main.temp;
          this.minTemp = this.temperatureArr.main.min_temp;
          this.maxTemp = this.temperatureArr.main.temp_max;
          this.pressure = this.temperatureArr.main.pressure;
          this.humidity = this.temperatureArr.main.humidity + '%';
          this.wind = this.temperatureArr.main.humidity + 'm/s';
        })
        .catch(error => {
        console.log(error);
      });
    },
  
    initMap() {
      
    var mymap = L.map('map').setView([51.505, -0.09], 13);
    var marker = L.marker([51.5, -0.09]).addTo(mymap);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoid29raW5nIiwiYSI6ImNqdHByejVjcjA3Nm80ZHIwZTgydDA0aWYifQ.A7Nu-j7baTtMJnjPzrTlNA'
    }).addTo(mymap);

    var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(mymap);

    },
    beforeMount() {
    this.getWeather();
  },
  }
  
};
</script>
