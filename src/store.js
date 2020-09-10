import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        hintText: ""
    },
    getters: {
        hintText: state => state.hintText
    },
    mutations: {
        sendHint: (state, payload)=> state.hintText = payload
    },
    actions:{
        sendHint: (context, payload) => context.commit('sendHint', payload),

    }
})

