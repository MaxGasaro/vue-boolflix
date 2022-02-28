<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="col ms_card d-flex justify-content-center g-5">

    <img :class="hover?'d-none':''" :src="`${urlImg}${film.poster_path}`">

    <div :class="hover?'d-block':'d-none'" class="info">

      <h1>{{film.title}}</h1>
      <h3>{{film.original_title}}</h3>
      <lang-flag :iso="film.original_language"/>
      <div>{{film.vote_average}}</div>

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
    props: {
      'film': Object
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
//@import '../../assets/style/general.scss';
//img {
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  //   object-position: top;
//}
</style>
