<template>
  <div>
    <b-card-group deck>
      <b-card>
        <b-card-text>{{this.date}}</b-card-text>
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
  // To use props, they must be declared
  data: function() {
    return {
      image: ""
    };
  },
  props: {
    temp: Number,
    wind: String,
    humidity: String,
    city: String,
    description: String,
    icon: String,
    date: String,
    minTemp: String,
    maxTemp: String
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