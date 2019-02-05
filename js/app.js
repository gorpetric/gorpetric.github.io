import router from './router'
import store from './vuex'

window._ = require('lodash')
window.Vue = require('vue')

Vue.component('app', require('./components/App.vue').default)
Vue.component('navigation', require('./components/Navigation.vue').default)

const app = new Vue({
    router: router,
    store: store,
    el: '#app'
})
