import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state={
  online:[],
  userName:null
}
const mutations = {
  SETONLINE(state,online){
    state.online = online;
  },
  SETUSERNAME(state,userName){
    state.userName = userName;
  }
}
const actions={
  setOnline(context,online){
    context.commit("SETONLINE",online)
  },
  setUserName(context,userName){
    context.commit("SETUSERNAME",userName)
  }
}
const getters={
  getOnline(){
    return this.state.online;
  }
}
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
export default store;
