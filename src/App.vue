<template>
  <div id="app">
    <MyHeader/>
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
      endpoint: 'https://api.themoviedb.org/3/search/movie?api_key=be58c07a8c8934fa215a9404640edea5&query=jack&language=it-IT'
    }
  },
  components: {
    MyHeader,
    MyMain
  },
  methods: {
    getFilms() {
      axios.get(this.endpoint)
      .then((response) => {
        // handle success
        this.films = response.data.results;
        console.log(this.films);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  },
  created() {
    this.getFilms();
  }
}
</script>

<style lang="scss">

</style>
