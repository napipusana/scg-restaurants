<template>
  <section>
    <v-card>
      <v-card-title class="headline font-weight-regular blue-grey white--text">Search</v-card-title>
      <v-card-text>
        <vue-google-autocomplete
            ref="address"
            id="map"
            v-model="selectedAddress"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData => selectedAddress = getAddressData"
            country="TH"
        >
        </vue-google-autocomplete>
        <div>
          <v-btn small @click="clicklalong">Search</v-btn>
      </div>
      </v-card-text>
    </v-card>
    <br>
    <v-card>
      <v-card-title class="headline font-weight-regular blue-grey white--text">Result</v-card-title>
      <v-card-text>
         <table id="customers">
          <thead>
            <tr>
              <th>ชื่อร้าน</th>
              <th>สถานีที่ใกล้เคียง</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in places.data">
              <td>{{row.name}}</td>
              <td>{{row.vicinity}}</td>
            </tr>
          </tbody>
        </table>

      </v-card-text>
    </v-card> 
  </section>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
// import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
const helper = {
    BASE_API: `http://localhost:5000`
}
export default {
  components: { VueGoogleAutocomplete },
  name: 'HelloWorld',
  data () {
    return {
        address: ''
        ,selectedAddress: 'Bang Sue, Bangkok'
        ,places: []
        ,lalong: ''
        ,location: '13.82220,100.525507'
    }
  },
  watch: {
    selectedAddress: function (val) {
      let latitude = Number.parseFloat(val.latitude).toFixed(5)
      let longitude = Number.parseFloat(val.longitude).toFixed(5)
      this.location = latitude + ',' + longitude.toString()
    }
  },
  // computed: {
  //   ...mapGetters('getPlaces')
  // },
  created () {
    this.hello = this.getHelloWroldObject
    // this.places = this.getGooglePlacesAction('13.7473366,100.537578')
  },
  mounted() {
            // To demonstrate functionality of exposed component functions
            // Here we make focus on the user input
            this.$refs.address.focus();
            this.getGooglePlacesAction(this.location)
        },
  methods: {
    // ...mapActions('getGooglePlacesAction'),
    getAddressData: function (addressData, placeResultData, id, latitude, longitude) {
                 this.address = addressData;     
    },
    async getGooglePlacesAction(location) {
      await axios({
        url: `${helper.BASE_API}/google/places?location=${location}`,
        method: 'GET'
      }).then(response => {
        if(response.status) {
          this.places = response.data
          // console.log(response.data)
        }
      }).catch( err => { console.log(err) })
    },
    clicklalong: function(){
    this.getGooglePlacesAction(this.location)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
