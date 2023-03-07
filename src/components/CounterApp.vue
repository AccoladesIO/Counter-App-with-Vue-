<template>
    <div class="counter">
      <h2 class="counter__heading">Counter: {{ count }}</h2>
      <div class="counter__buttons">
        <button class="counter__button counter__button--increment" @click="increment">
          +
        </button>
        <button class="counter__button counter__button--decrement" @click="decrement">
          -
        </button>
      </div>
      <div class="counter__controls">
        <input class="counter__input" type="number" v-model="value" />
        <button class="counter__button counter__button--set" @click="setValue(value)">
          Set Value
        </button>
        <button class="counter__button counter__button--reset" @click="reset">
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
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    color: #444;
  }
  
  .counter__heading {
    margin-top: 0;
    font-size: 3rem;
    font-weight: bold;
  }
  
  .counter__buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .counter__button {
    background-color: #3f51b5;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem 2rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .counter__button:hover {
    background-color: #2c3e50;
  }
  
  .counter__button--increment {
    background-color: #4caf50;
  }
  
  .counter__button--decrement {
    background-color: #f44336;
  }
  
  .counter__controls {
    display: flex;
    justify-content: center;
  }
  
  .counter__input {
    width: 8rem;
    height: 3rem;
    font-size: 2rem;
    text-align: center;
    margin-right: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    outline: none;
  }
  

</style>