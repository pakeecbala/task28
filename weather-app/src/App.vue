<template>
  <v-app>
    <v-toolbar app class="p-3 mb-2 bg-info text-black">
      <v-toolbar-title class="headline text-uppercase">
        <span style="margin:auto;" class="font-weight-dark">Weather Application-MICHAEL & PAKEE</span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
    </v-toolbar>
    <br>
    <v-content>
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
        v-model="input"
        label="Oslo"
        color="blue"
        v-on:keyup.enter="$refs.mapRef.updateMap"
        style="width: 20rem; margin:auto"
      ></v-text-field>

      <Map ref="mapRef" :input="this.input"/>
      <br>
    </v-content>
  </v-app>
</template>

<script>
//this is the parent component for both Map and Weather
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