<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">MICHAEL & PAKEE - GROUPTASK 28</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
        v-model="input"
        label="Oslo"
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