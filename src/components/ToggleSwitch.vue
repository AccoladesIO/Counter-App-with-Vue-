<template>
    <div class='toggle-position'>
      <label class="switch">
        <input type="checkbox" v-model="isDarkMode" @click="toggleMode">
        <span class="slider"></span>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    methods: {
      toggleMode() {
        this.isDarkMode = !this.isDarkMode;
        const body = document.querySelector("body");
        if (this.isDarkMode) {
          body.classList.add("dark-mode");
        } else {
          body.classList.remove("dark-mode");
        }
        localStorage.setItem("isDarkMode", this.isDarkMode);
      },
    },
    created() {
      const isDarkMode = localStorage.getItem("isDarkMode");
      if (isDarkMode) {
        this.isDarkMode = JSON.parse(isDarkMode);
        const body = document.querySelector("body");
        if (this.isDarkMode) {
          body.classList.add("dark-mode");
        } else {
          body.classList.remove("dark-mode");
        }
      }
    },
  };
  </script>
  
  <style>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .toggle-position{
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%)
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    border-radius: 30%;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #2196f3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  
  /* Dark mode */
  body.dark-mode {
    background-color: #333;
    color: #fff;
  }
  
  body.dark-mode .switch {
    background-color: #666;
  }
  
  body.dark-mode .slider:before {
    background-color: #333;
  }
  </style>
  