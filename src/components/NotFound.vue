<template>
    <main class='not-found'>
      <div class='image_wrapper'>
        <img src='@/assets/404.svg' />
      </div>
      <h1 class='heading-main'>404 Not Found</h1>
      <p class='error__msg'>Sorry, the page you requested could not be found.</p>
    </main>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style>
  /* ... */
  .not-found{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: calc(100vh - 80px);
    width: 98%;
    margin: 0 auto;
  }
  .image_wrapper{
    width: 200px;
    height: 200px;
  }
  .image_wrapper img{
    width: 100%;
  }
  .heading-main{
    font-size: 48px;
    margin-bottom: 16px;
    text-align: center;
    font-family: primaryFont;
    font-weight: bolder;
  }
  .error__msg{
    font-family: terFont;
    font-size: 16px;
    text-align: center;
  }
  </style>
  