<template>
<<<<<<< HEAD
  <div>
    <b-card-group deck class="p-3 mb-2 bg-light text-dark">
      <b-card style="max-width: 20rem; margin:auto">
        <b-card-title>{{temperatureArr[index].dt_txt}}</b-card-title>
        <b-img :src="image" fluid alt="Responsive image"/>
        <b-card-text>{{temperatureArr[index].weather[0].description}}</b-card-text>
        <b-card-text>Temperature: {{temperatureArr[index].main.temp}} &deg;C</b-card-text>
        <b-card-text>Min-Temperature: {{temperatureArr[index].main.temp_min}} &deg;C</b-card-text>
        <b-card-text>Max-Temperature: {{temperatureArr[index].main.temp_max}} &deg;C</b-card-text>
        <b-card-text>Wind: {{temperatureArr[index].wind.speed}} m/s</b-card-text>
        <b-card-text>Humidity: {{temperatureArr[index].dt_txt}}</b-card-text>
      </b-card>

       <b-card style="max-width: 20rem; margin:auto">
        <b-card-title>{{temperatureArr[index+1].dt_txt}}</b-card-title>
        <b-img :src="image" fluid alt="Responsive image"/>
        <b-card-text>{{temperatureArr[index+1].weather[0].description}}</b-card-text>
        <b-card-text>Temperature: {{temperatureArr[index+1].main.temp}} &deg;C</b-card-text>
        <b-card-text>Min-Temperature: {{temperatureArr[index+1].main.temp_min}} &deg;C</b-card-text>
        <b-card-text>Max-Temperature: {{temperatureArr[index+1].main.temp_max}} &deg;C</b-card-text>
        <b-card-text>Wind: {{temperatureArr[index+1].wind.speed}} m/s</b-card-text>
        <b-card-text>Humidity: {{temperatureArr[index+1].dt_txt}}</b-card-text>
      </b-card>

       <b-card style="max-width: 20rem; margin:auto">
        <b-card-title>{{temperatureArr[index+2].dt_txt}}</b-card-title>
        <b-img :src="image" fluid alt="Responsive image"/>
        <b-card-text>{{temperatureArr[index+2].weather[0].description}}</b-card-text>
        <b-card-text>Temperature: {{temperatureArr[index+2].main.temp}} &deg;C</b-card-text>
        <b-card-text>Min-Temperature: {{temperatureArr[index+2].main.temp_min}} &deg;C</b-card-text>
        <b-card-text>Max-Temperature: {{temperatureArr[index+2].main.temp_max}} &deg;C</b-card-text>
        <b-card-text>Wind: {{temperatureArr[index+2].wind.speed}} m/s</b-card-text>
        <b-card-text>Humidity: {{temperatureArr[index+2].dt_txt}}</b-card-text>
      </b-card>
    </b-card-group>
    <br>
    <div>
      <b-button style="max-width: 10rem; margin:auto" block variant="outline-dark" @click="handlePrev">&lsaquo; (Be)forecast</b-button>
      <br>
      <b-button style="max-width: 10rem; margin:auto" block variant="outline-dark" @click="handleNext">Forecast - 3h &rsaquo;</b-button>
=======
  <div class="d-flex flex-row">
    <div class="d-flex justify-content-center d-flex align-items-center">
      <b-button variant="outline-dark" @click="handlePrev">&lsaquo; Previous</b-button>
      <b-card-group class="p-b-23 m bg-light text-dark">
        <b-card>
          <b-card-title>{{date}}</b-card-title>
          <b-img :src="image" fluid alt="Responsive image"/>
          <b-card-text>{{description}}</b-card-text>
          <b-card-text>Temperature: {{temp}} &deg;C</b-card-text>
          <b-card-text>Min-Temperature: {{minTemp}} &deg;C</b-card-text>
          <b-card-text>Max-Temperature: {{maxTemp}} &deg;C</b-card-text>
          <b-card-text>Wind: {{wind}}</b-card-text>
          <b-card-text>Humidity: {{humidity}}</b-card-text>
        </b-card>
      </b-card-group>

      <b-button variant="outline-dark" @click="handleNext">Next &rsaquo;</b-button>
      <br>
>>>>>>> 4ab73c97786afe90f25f2e47b511f85a52d51d9c
    </div>
  </div>
</template>

<script>
export default {
  /*this component shows a card with weather information that gets updated on basis of the api calls
  and controllers in the Map component*/
  data: function() {
    return {
      image: ""
    };
  },
  //Our props
  props: {
    temp: Number,
    wind: String,
    humidity: String,
    city: String,
    description: String,
    icon: String,
    date: String,
    minTemp: Number,
    maxTemp: Number,
    temperatureArr: Array,
    index: Number
  },
  updated() {
    /*we interprolate the url for the weather icons. 
    The this.icon part is taken from an object in the API that functions as a code
    of sorts for the respective icons*/
    this.image = "http://openweathermap.org/img/w/" + this.icon + ".png";
  },
  methods: {
    handleNext() {
      this.$emit("on-next");
    },
    handlePrev() {
      this.$emit("on-prev");
    }
  }
};
</script>