import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0
    },
    setValue(state, value) {
      state.count = value
    }
  }
})
