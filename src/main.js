import Vue from 'vue';
import App from './App.vue';
import CloudyDay from '@/assets/svg/CloudyDay.vue';

Vue.component('CloudyDay', CloudyDay);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
