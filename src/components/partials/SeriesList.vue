<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="ms_card d-flex justify-content-center m-3">

    <img :class="hover?'d-none':''" :src="`${urlImg}${serie.poster_path}`">

    <div :class="hover?'d-block':'d-none'" class="info overflow-auto">

      <h1>Titolo: {{serie.name}}</h1>
      <h3>Titolo originale: {{serie.original_name}}</h3>
      <lang-flag :iso="serie.original_language"/>
      <div>
        <i v-for="i in 5" :key="i" class="fa-star" :class="(i<getComputedStar)?'fa-solid':'fa-regular'"></i>
      </div>
      <p>Overview: {{serie.overview}}</p>

    </div>
  </div>
</template>

<script>
export default {
    name: 'SeriesList',
    data() {
      return {
        urlImg: 'https://image.tmdb.org/t/p/w342',
        hover: false
      }
    },
    props: {
      'serie': Object
    },
    computed: {
      getComputedStar() {
        return Math.ceil(this.serie.vote_average / 2);
      }
    },
}
</script>

<style scoped lang="scss">
@import '../../assets/style/general.scss';

</style>