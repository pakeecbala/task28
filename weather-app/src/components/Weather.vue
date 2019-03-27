<template>
  <div>
    <b-card-group deck class="p-3 mb-2 bg-light text-dark">
      <b-card style="max-width: 20rem;">
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
      <b-button block variant="outline-dark" @click="handlePrev">&lsaquo; Previous</b-button>
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
    },
    handlePrev() {
      this.$emit("on-prev");
    }
  }
};
</script>