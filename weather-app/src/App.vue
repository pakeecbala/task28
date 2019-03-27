<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MP -</span>
        <span class="font-weight-light">GROUP TASK 28</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <Map/>
      <Weather/>
    </v-content>
  </v-app>
</template>

<script>
import Map from "./components/Map";
import MapForecast from "./components/MapForecast";
import Weather from "./components/Weather";

export default {
  name: "App",
  components: {
    Map,
    MapForecast,
    Weather
  },
  data() {
    return {};
  }
};
</script>