<template>
  <main>
      <div class="container">
          <h2></h2>
          <div class="row">
              <FilmsList v-for="(film, index) in films" :key="index"
              :film="film"
              />
          </div>
          <h2></h2>
          <div class="row">
              <SeriesList/>
          </div>
      </div>
  </main>
</template>

<script>
import FilmsList from './partials/FilmsList.vue'
import SeriesList from './partials/SeriesList.vue'
export default {
    name: 'MyMain',
    components: {
        FilmsList,
        SeriesList
    },
    props: {
        'films': Array,
        'series': Array
    }

}
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';

main {
    height: calc(100vh - 100px);
    background-color: $mainColor;
    overflow: auto;
}

</style>