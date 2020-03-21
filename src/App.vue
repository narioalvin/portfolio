<template>
  <div id="app">
    <router-view /> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@font-face {
    font-family: 'Monaco';
    src: url('./assets/font/monaco-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

* {
    font-family: 'Monaco', sans-serif;
}
</style>
