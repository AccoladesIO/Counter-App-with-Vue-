<template>
    <div class="counter">
      <h2 class="heading-main">Counter: {{ count }}</h2>
      <div class="btn-wrapper">
        <button class="btn decrement" @click="decrement">
          -
        </button>
        <button class="btn increment" @click="increment">
          +
        </button>
      </div>
      <div class="input-wrapper">
        <input class="input-field" type="number" v-model="value" />
        <input class='submit' type='submit' @click='setValue(value)' value='Set Value'>
      </div>
      <button class="btn reset" @click="reset">
        Reset
      </button>
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
    .counter{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 100vw;
      margin: 0 auto;
      height: calc(100vh - 60px);
      flex-direction: column;
      animation: fadeIn 1s ease-in-out;
    }
    .heading-main{
      font-size: 5.2rem;
      margin-bottom: 16px;
      text-align: center;
      font-family: primaryFont;
      font-weight: bolder;
    }
    .btn-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin: 10px;
    }
    .btn{
      width: 100px;
      height: 50px;
      font-weight: 600;
      font-size: 18px;
      font-family: primaryFont;
      outline: none;
      border: none;
      border-radius: 10px;
      color: black;
      box-shadow:  3px 3px 6px #555;
    }
    .btn.reset{
      background-color: azure;
    }
    .btn.reset:hover{
      background-color: #4682B4;
      color: white;
      transition: all 0.4s;
    }

    .btn.increment{
      background-color: #4682B4;
    }
    .btn.increment:hover{
      background-color: #6495ED;
      color: white;
      font-weight: bolder;
      transition: all 0.4s;
    }

    .btn.decrement{
      background-color: #89CFF0;
    }
    .btn.decrement:hover{
      background-color: #6495ED;
      color: white;
      font-weight: bolder;
      transition: all 0.4s;
    }
    .input-wrapper{
      width: 98%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input{
      border: none;
      height: 50px;
      padding: 10px;
      width: 260px;
      margin: 20px 0 20px 0;
      font-family: primaryFont;
      font-size: 16px;
    }
    .input-field{
      border-radius: 10px 0 0 10px;
      outline: none;
    }
    .submit{
      border-radius: 0 10px 10px 0;
      margin-left:  -4px;
      border-left: 1px solid #fff;
      font-weight: bolder;
      width: 100px;
      padding: 10px;
    }
    .submit:hover{
      background-color: azure;
      transition: all 0.4s;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
</style>