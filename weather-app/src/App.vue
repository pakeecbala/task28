<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Weather App{{Map.temp}}</span>
        <span class="font-weight-light">  MICHAEL &  PAKEE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      
      <HelloWorld/>
      <Map/>
      
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Map from './components/Map'
import MapForecast from './components/MapForecast'
import Cities from './components/Cities'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Map
  },
  data () {
    return {
      
    }
  }
}
</script>
