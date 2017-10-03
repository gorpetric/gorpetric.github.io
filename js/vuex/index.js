import Vue from 'vue'
import Vuex from 'vuex'
import home from '../app/home/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home: home
    }
})
