<template>
    <div class="counter">
      <h2 class="heading-main">Counter: {{ count }}</h2>
      <div class="btn-wrapper">
        <button class="btn increment" @click="increment">
          +
        </button>
        <button class="btn decrement" @click="decrement">
          -
        </button>
      </div>
      <div class="input-wrapper">
        <input class="input-field" type="number" v-model="value" />
        <button class="btn set-value" @click="setValue(value)">
          Set Value
        </button>
        <button class="btn reset" @click="reset">
          Reset
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import useCounter from '@/composables/counter'
  
  export default {
    setup() {
      const { count, increment, decrement, reset, setValue } = useCounter()
  
      return {
        count,
        increment,
        decrement,
        reset,
        setValue,
        value: 0,
      }
    },
  }
  </script>
  
  <style scoped>
 
</style>