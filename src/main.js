import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import LangFlag from 'vue-lang-code-flags';
Vue.component('lang-flag', LangFlag);
import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
