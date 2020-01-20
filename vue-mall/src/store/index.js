import Vue from 'vue'
import Vuex from 'vuex'
import pubData from './pubData'
import users from './users'

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        pubData,
        users
    }
})
