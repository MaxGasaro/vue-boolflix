<template>
  <main>
      <div class="container">
          <div class="row justify-content-center">
              <FilmsList v-for="(film, index) in films" :key="index"
              :film="film"
              />
          </div>
          <div class="row justify-content-center">
              <SeriesList v-for="(serie, index) in series" :key="index"
              :serie="serie"
              />
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
    h2 {
        color: #fff;
        text-transform: capitalize;
        font-size: 1.5rem;
    }
}

</style>