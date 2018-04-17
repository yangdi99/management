let mutations = {
  saveToken (state, payload) {
    state.token = payload
  },
  saveUser (state, payload) {
    state.username = payload
  }
}

export default mutations
