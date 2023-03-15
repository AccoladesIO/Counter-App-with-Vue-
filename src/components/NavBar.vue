<template>
    <nav>
      <div class="logo">Counter App</div>
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
    background-color: inherit;
    color: inherit;
    width: 100%;
    padding: 14px;
    margin: 0 auto;
    box-shadow: 1px 1px 3px #555;
  }
  
  .logo {
    font-size: 2.4rem;
    font-family: secFont;
    font-weight: light;
    letter-spacing: 2px;
    margin-left: 15px;
  }
  
  .nav-links {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
  }
  
  .nav-links a {
    font-size: 1.6rem;
    color: inherit;
    text-decoration: none;
    margin-right: 1rem;
    font-family: primaryFont;
    font-weight: bolder;
  }
  
  </style>
  