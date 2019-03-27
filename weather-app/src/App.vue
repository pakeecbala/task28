<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">MICHAEL & PAKEE</span>
      </v-toolbar-title>
      <div class="col-md-3 input-group pull-right">
        <input placeholder="search places">
      </div>
    </v-toolbar>

    <v-content>
      <Map/>
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
    return {};
  }
};
</script>