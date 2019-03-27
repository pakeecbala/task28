<template>
  <div>
    <b-card-group deck>
      <b-card title="Yesterday's weather">
        <b-img :src="image" fluid alt="Responsive image"/>
        <b-card-text>{{description}}</b-card-text>
        <b-card-text>Temperature: {{this.temp}}</b-card-text>
        <b-card-text>Wind: {{this.wind}}</b-card-text>
        <b-card-text>Humidity: {{this.humidity}}</b-card-text>
      </b-card>

      <b-card title="Current weather">
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"/>
        <b-card-text>Temperature: N/A</b-card-text>
        <b-card-text>Wind: N/A</b-card-text>
        <b-card-text>Humidity: N/A</b-card-text>
      </b-card>

      <b-card title="Tomorrow's weather">
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"/>
        <b-card-text>Temperature: N/A</b-card-text>
        <b-card-text>Wind: N/A</b-card-text>
        <b-card-text>Humidity: N/A</b-card-text>
      </b-card>
    </b-card-group>
    <br>
    <div>
      <b-button block variant="outline-dark">&lsaquo; Previous</b-button>
      <b-button block variant="outline-dark">Next &rsaquo;</b-button>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  // To use props, they must be declared
  props: {
    temp: Number,
    wind: String,
    humidity: String,
    city: String,
    description: String,
    icon: String,
    image: "",

  },


  created(){
    this.image ='http://openweathermap.org/img/w/'+ this.icon+'.png'
  },

  updated(){
    this.image ='http://openweathermap.org/img/w/' + this.icon + '.png'
  }
  
};
</script>