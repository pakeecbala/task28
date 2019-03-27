<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="fixScrollUp">Weather App{{Map.temp}}</span>
        <span class="font-weight-light">  MICHAEL &  PAKEE</span>
        
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      
      <HelloWorld/>
      <Map/>
      <br>
      <Weather/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Map from './components/Map'
import Weather from "./components/Weather";

export default {
  name: "App",
  components: {
    HelloWorld,
    Map,
    Weather
  },
  data() {
    return {};
  }
};
</script>