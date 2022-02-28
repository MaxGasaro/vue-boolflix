<template>
  <div class="col ms_card m-3">
    <h1>{{film.title}}</h1>
    <h3>{{film.original_title}}</h3>
    <lang-flag :iso="film.original_language"/>
    <div>{{film.vote_average}}</div>
  </div>
</template>

<script>
export default {
    name: 'FilmsList',
    props: {
      'film': Object
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/general.scss';
  /*img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }*/
</style>
