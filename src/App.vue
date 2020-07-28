<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Home from './views/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/font/Montserrat-Regular.ttf');
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
    url('./assets/font/Montserrat-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/font/Montserrat-Medium.ttf');
  src: local('Montserrat Medium'), local('Montserrat-Medium'),
    url('./assets/font/Montserrat-Medium.ttf') format('opentype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/font/Montserrat-Bold.ttf');
  src: local('Montserrat Bold'), local('Montserrat-Bold'),
    url('./assets/font/Montserrat-Bold.ttf') format('opentype');
  font-weight: bold;
  font-style: normal;
}

body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  background: #f2f2f2;
}
</style>
