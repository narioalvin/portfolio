import Vue from 'vue';
import App from './App.vue';
import CloudyDay from '@/assets/svg/CloudyDay.vue';
import {
  BRow,
  BCol,
  BSpinner,
  BNavbar,
  BNavbarToggle,
  BNavbarBrand,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BModal,
} from 'bootstrap-vue';

Vue.component('b-row', BRow);
Vue.component('b-col', BCol);
Vue.component('b-spinner', BSpinner);
Vue.component('b-navbar', BNavbar);
Vue.component('b-collapse', BCollapse);
Vue.component('b-navbar-nav', BNavbarNav);
Vue.component('b-nav-item', BNavItem);
Vue.component('b-navbar-toggle', BNavbarToggle);
Vue.component('b-navbar-brand', BNavbarBrand);
Vue.component('b-modal', BModal);

Vue.component('CloudyDay', CloudyDay);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
