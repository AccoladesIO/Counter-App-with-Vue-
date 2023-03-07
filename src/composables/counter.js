import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
  const store = useStore()

  const count = computed(() => store.state.count)

  function increment() {
    store.commit('increment')
  }

  function decrement() {
    store.commit('decrement')
  }

  function reset() {
    store.commit('reset')
  }

  function setValue(value) {
    store.commit('setValue', value)
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  }
}
