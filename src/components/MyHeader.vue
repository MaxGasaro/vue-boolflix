<template>
  <header>
      <div class="container-fluid">
          <div class="row justify-content-between align-items-center ms_header">
              <div class="col">
                  <h1 class="title">boolflix</h1>
              </div>
              <div class="col ms_input">
                  <input type="text" v-model="search" placeholder="Ricerca" @keyup.enter="$emit('goSearch', search)">
                  <!--<button type="submit" @keyup.enter="$emit('goSearch', search)">Cerca!</button>-->
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
    name: 'MyHeader',
    data() {
        return {
            search: ''
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/style/variables.scss';
.ms_header {
    height: 100px;
    background-color: $headerColor;
    .title {
        color: red;
        font-size: 2rem;
        text-transform: uppercase;
        text-align: left;
        font-weight: bolder;
    }
    .ms_input {
        text-align: right;
        input {
            border: 2px solid #fff;
            border-radius: 8px;
            padding: 5px 10px;
        }
    }
}
</style>