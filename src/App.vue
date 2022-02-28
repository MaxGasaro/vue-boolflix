<template>
  <div id="app">
    <MyHeader @goSearch="getFilms"/>
    <MyMain :films="films" :series="series"/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyMain from './components/MyMain.vue'

const axios = require('axios');

export default {
  name: 'App',
  data() {
    return {
      series: [],
      films: [],
      endpointMovies: 'https://api.themoviedb.org/3/search/movie?api_key=',
      endpointSeries: 'https://api.themoviedb.org/3/search/tv?api_key=',
      language: '&language=it-IT',
      apiKey: 'be58c07a8c8934fa215a9404640edea5'
    }
  },
  components: {
    MyHeader,
    MyMain
  },
  methods: {
    getFilms(searchText) {
      axios.get(`${this.endpointMovies}${this.apiKey}&query=${searchText}${this.language}`)
      .then((response) => {
        // handle success
        this.films = response.data.results;
        console.log(this.films);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      axios.get(`${this.endpointSeries}${this.apiKey}&query=${searchText}${this.language}`)
      .then((response) => {
        this.series = response.data.results;
        console.log(this.series);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  },
  /*created() {
    this.getFilms();
  }*/
}
</script>

<style lang="scss">

</style>
