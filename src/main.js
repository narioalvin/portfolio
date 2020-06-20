import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CloudyDay3 from '@/components/CloudyDay3.vue';
import {
  BContainer,
  BRow,
  BCol,
  BButton,
  BSpinner,
  BNavbar,
  BNavbarToggle,
  BNavbarBrand,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue';

library.add(fas, fab, far);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('b-container', BContainer);
Vue.component('b-row', BRow);
Vue.component('b-col', BCol);
Vue.component('b-button', BButton);
Vue.component('b-spinner', BSpinner);
Vue.component('b-navbar', BNavbar);
Vue.component('b-collapse', BCollapse);
Vue.component('b-navbar-nav', BNavbarNav);
Vue.component('b-nav-item', BNavItem);
Vue.component('b-navbar-toggle', BNavbarToggle);
Vue.component('b-navbar-brand', BNavbarBrand);

Vue.component('CloudyDay3', CloudyDay3);

// Vue.component('my-component', {
//   components: {
//     'b-container': BContainer,
//     'b-row': BRow,
//     'b-col': BCol
//   }
// })

Vue.config.productionTip = false;

new Vue({
  // router,
  render: (h) => h(App),
}).$mount('#app');
