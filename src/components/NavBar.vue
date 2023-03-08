<template>
    <nav>
      <div class="logo">My App</div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/counter">Counter</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    width: 100%;
    height: 60px;
    padding: 1rem;
    margin: 0 auto;
  }
  
  .logo {
    font-size: 1.5rem;
  }
  
  .nav-links {
    display: flex;
  }
  
  .nav-links a {
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
  }
  
  </style>
  