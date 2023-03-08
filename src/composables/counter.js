import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
  const store = useStore()

  const count = computed(() => store.state.count)

  const increment = () => {
    store.commit('increment')
  }

  const decrement = () => {
    store.commit('decrement')
  }

  const reset = () => {
    store.commit('reset')
  }

  const setValue = (value) => {
    store.commit('setValue', value)
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  }
}
