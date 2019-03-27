<template>
  <div id="map" class="map w-100 p-3"></div>
</template>

<script>
export default {
  data: {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var mymap = L.map("map").setView([51.505, -0.09], 13);

      //this.marker = L.marker([0, 0]).addTo(mymap);

      var marker = L.marker([51.5, -0.09]).addTo(mymap);

      L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox.streets",
          accessToken:
            "pk.eyJ1Ijoid29raW5nIiwiYSI6ImNqdHByejVjcjA3Nm80ZHIwZTgydDA0aWYifQ.A7Nu-j7baTtMJnjPzrTlNA"
        }
      ).addTo(mymap);

      var circle = L.circle([51.508, -0.11], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 500
      }).addTo(mymap);
    }
  }
};
</script>
