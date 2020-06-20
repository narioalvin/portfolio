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
  padding: 0;
  box-sizing: border-box;
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
  padding: 0 15px;
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
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.shake {
  -webkit-animation-name: wobble;
  animation-name: wobble;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform-origin: 50% 100%;
}

@keyframes wobble {
  0% {
    -webkit-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: none;
    transform: none;
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@media only screen and (min-width: 360px) and (max-width: 812px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2) {
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

@media screen and (min-width: 768px) {
  .about {
    div {
      p {
        font-size: 18px !important;
      }
    }
  }
}
</style>
