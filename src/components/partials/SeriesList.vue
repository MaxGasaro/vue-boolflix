<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="ms_card d-flex justify-content-center m-3">

    <img :class="hover?'d-none':''" :src="`${urlImg}${serie.poster_path}`">

    <div :class="hover?'d-block':'d-none'" class="info">

      <h1>{{serie.name}}</h1>
      <h3>{{serie.original_name}}</h3>
      <lang-flag :iso="serie.original_language"/>
      <div>{{serie.vote_average}}</div>

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
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/general.scss';

</style>