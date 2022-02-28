<template>
  <div class="ms_card col m-3">
    <h1>{{serie.name}}</h1>
    <h3>{{serie.original_name}}</h3>
    <lang-flag :iso="serie.original_language"/>
    <div>{{serie.vote_average}}</div>
  </div>
</template>

<script>
export default {
    name: 'SeriesList',
    props: {
      'serie': Object
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/general.scss';

</style>