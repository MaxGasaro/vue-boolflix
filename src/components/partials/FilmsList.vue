<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="ms_card d-flex justify-content-center m-3">

    <img :class="hover?'d-none':''" :src="`${urlImg}${film.poster_path}`">

    <div :class="hover?'d-block':'d-none'" class="info overflow-auto">

      <h1>Titolo: {{film.title}}</h1>
      <h3>Titolo Originale: {{film.original_title}}</h3>
      <lang-flag :iso="film.original_language"/>
      <div>
        <!--Voto: {{film.vote_average}}-->
        <i v-for="i in 5" :key="i" class="fa-star" :class="(i<getComputedStar)?'fa-solid':'fa-regular'"></i>
      </div>
      <p>Overview: {{film.overview}}</p>

    </div>
    
  </div>
</template>

<script>
export default {
    name: 'FilmsList',
    data() {
      return {
        urlImg: 'https://image.tmdb.org/t/p/w342',
        hover: false
      }
    },
    computed: {
      getComputedStar() {
        return Math.ceil(this.film.vote_average / 2);
      }
    },
    props: {
      'film': Object
    },
}
</script>

<style scoped lang="scss">
@import '../../assets/style/general.scss';
//img {
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  //   object-position: top;
//}
</style>
