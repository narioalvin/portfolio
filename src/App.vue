<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "App"
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("./assets/font/Montserrat-Regular.ttf");
  src: local("Montserrat Regular"),
    local("Montserrat-Regular"),
    url("./assets/font/Montserrat-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("./assets/font/Montserrat-Medium.ttf");
  src: local("Montserrat Medium"),
    local("Montserrat-Medium"),
    url("./assets/font/Montserrat-Medium.ttf") format("opentype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("./assets/font/Montserrat-Bold.ttf");
  src: local("Montserrat Bold"),
    local("Montserrat-Bold"),
    url("./assets/font/Montserrat-Bold.ttf") format("opentype");
  font-weight: bold;
  font-style: normal;
}


* {
  font-family: "Montserrat", sans-serif;
  margin: 0;
}

.text-secondary {
  color: #535343;
  font-weight: bold;
  font-size: 13px;
}
</style>
