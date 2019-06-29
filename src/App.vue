<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search Restaurants</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!--<v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>-->
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Test SCG</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <div id="layoutbody">
        <router-view />
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
}

</script>

<style>
  #layoutbody {
    margin: 1%;
  }

  #layoutsearch{
    margin: 3%;
  }

  input[type=text], select {
  width: 100%;
  padding: 5px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

<style>
@import '~vuetify/src/stylus/main'
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
