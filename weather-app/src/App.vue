<template>
  <v-app class="p-3 mb-2 bg-light text-dark">
    <v-toolbar app class="p-3 mb-2 bg-dark text-white">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">MICHAEL & PAKEE</span>
      </v-toolbar-title>
    </v-toolbar>
    <br>
    <v-content>
      <v-text-field
        hide-details
        prepend-icon="search"
        label="Oslo"
        single-line
        v-model="input"
        v-on:keyup.enter="$refs.mapRef.updateMap"
      ></v-text-field>

      <Map ref="mapRef" :input="this.input"/>
      <br>
    </v-content>
  </v-app>
</template>

<script>
import Map from "./components/Map";
import Weather from "./components/Weather";

export default {
  name: "App",
  components: {
    Map,
    Weather
  },
  data() {
    return {
      input: ""
    };
  }
};
</script>