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

.primary-btn {
  position: relative;
  background: #d9d9d9;
  color: #1a1a1a;
  font-size: 12px;
  text-decoration: none;
  padding: 12px 33px;
  border-radius: 25px;
  font-weight: 600;
  top: 30px;
  -webkit-transition: 0.3s;
  transition: 0.3s;

  &:hover,
  &:focus {
    background: #1a1a1a;
    color: #fcfcfc;
    text-decoration: none;
  }
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
    transform: translateY(-15px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.hithere {
  animation: hithere 2s ease infinite;
}
@keyframes hithere {
  30% {
    transform: scale(1.2);
  }
  40%,
  60% {
    transform: rotate(-20deg) scale(1.2);
  }
  50% {
    transform: rotate(20deg) scale(1.2);
  }
  70% {
    transform: rotate(0deg) scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.bounce {
  animation: bounce 2s ease infinite;
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.flipAnimation {
  backface-visibility: visible !important;
  animation: flipAnimation 2.5s ease infinite;
}
@keyframes flipAnimation {
  0% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    transform: perspective(400px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
  }
  80% {
    transform: perspective(400px) rotateY(360deg) scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) scale(1);
    animation-timing-function: ease-in;
  }
}

.wobble {
  animation: wobble 2s ease infinite;
}
@keyframes wobble {
  0% {
    transform: translateX(0%);
  }
  15% {
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    transform: translateX(-5%) rotate(-1deg);
  }
  100% {
    transform: translateX(0%);
  }
}

.swing {
  transform-origin: top center;
  animation: swing 2s ease infinite;
}
@keyframes swing {
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.bounce-in-right {
  animation: bounce-in-right 2s ease infinite;
}
@keyframes bounce-in-right {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  60% {
    opacity: 1;
    transform: translateX(-30px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
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
