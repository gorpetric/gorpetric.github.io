import router from './router'
import store from './vuex'

window._ = require('lodash')
window.Vue = require('vue')

Vue.component('app', require('./components/App.vue'))
Vue.component('navigation', require('./components/Navigation.vue'))

const app = new Vue({
    router: router,
    store: store,
    el: '#app'
})
