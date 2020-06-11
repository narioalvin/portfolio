<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

body {
  background: #f2f2f2;
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

* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}

.text-secondary {
  color: #535343;
  font-weight: bold;
  font-size: 13px;
}

.p-40 {
  padding: 15px;
}

.full-height {
  height: 100vh;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  width: 100%;
}

.dark-text {
  color: #202020;
}

.white-text {
  color: #fefefe;
}

.animated {
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  opacity: 0;
}

.animatedArrow {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  opacity: 1;
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

.infinite {
  animation-iteration-count: infinite;
}

@keyframes animUp {
  from {
    transform: translateY(60px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes animUpBrands {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes animLeft {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes animRight {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes animDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media only screen and (min-width: 360px) and (max-width: 812px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2) {
  .navbar {
    padding: 0;
  }

  .home {
    height: 93vh;
    margin: 70px 0;
  }

  #home {
   margin-bottom: 210px;
  }

  #about {
    margin-bottom: 200px;
  }

  .back,
  .front {
    height: 100vh !important;
  }
}
</style>
