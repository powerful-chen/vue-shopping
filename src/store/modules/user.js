const state = {
    id: 0,
    username: ''
}
const getters = {
    isLogin (state) {
        return state.id !== 0
      }    
}
const actions = {}
const mutations = {
    setUser (state, user) {
        state.id = user.id
        state.username = user.username
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
