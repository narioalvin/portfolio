import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BContainer, BRow, BCol, BButton, BSpinner } from 'bootstrap-vue'
import animate from 'animate.css';

library.add(fas, fab, far)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)
Vue.component('b-button', BButton)
Vue.component('b-spinner', BSpinner)

// Vue.component('my-component', {
//   components: {
//     'b-container': BContainer,
//     'b-row': BRow,
//     'b-col': BCol
//   }
// })

Vue.config.productionTip = false
Vue.use(ElementUI, animate)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')