<template>
  <div>
    <b-card-group deck>
      <b-card style="max-width: 20rem;">
        <b-card-title>{{this.date}}</b-card-title>
        <b-img :src="image" fluid alt="Responsive image"/>
        <b-card-text>{{this.description}}</b-card-text>
        <b-card-text>Temperature: {{this.temp}}</b-card-text>
        <b-card-text>Min-Temperature: {{this.minTemp}}</b-card-text>
        <b-card-text>Max-Temperature: {{this.maxTemp}}</b-card-text>
        <b-card-text>Wind: {{this.wind}}</b-card-text>
        <b-card-text>Humidity: {{this.humidity}}</b-card-text>
      </b-card>
    </b-card-group>
    <br>
    <div>
      <b-button block variant="outline-dark">&lsaquo; Previous</b-button>
      <b-button block variant="outline-dark" @click="handleNext">Next &rsaquo;</b-button>
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
    this.image = "http://openweathermap.org/img/w/" + this.icon + ".png";
  },
  methods: {
    handleNext() {
      this.$emit("on-next");
    }
  }
};
</script>