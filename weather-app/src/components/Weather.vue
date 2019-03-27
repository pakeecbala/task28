<template>
  <div>
    <b-card-group deck>
      <b-card style="max-width: 20rem; margin:auto">
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
    <br>
    <div>
      <b-button style="max-width: 10rem; margin:auto" block variant="outline-dark" @click="handlePrev">&lsaquo; (Be)forecast</b-button>
      <br>
      <b-button style="max-width: 10rem; margin:auto" block variant="outline-dark" @click="handleNext">Forecast - 3h &rsaquo;</b-button>
    </div>
    <br>
  </div>
</template>

<script>
export default {
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
    maxTemp: Number
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