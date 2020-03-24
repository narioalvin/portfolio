<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@font-face {
  font-family: "Glacial";
  src: url("./assets/font/GlacialIndifference-Regular.otf");
  src: local("GlacialIndifference Regular"),
    local("GlacialIndifference-Regular"),
    url("./assets/font/GlacialIndifference-Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Josefin";
  src: url("./assets/font/JosefinSans-Regular.ttf");
  src: local("JosefinSans Regular"),
    local("JosefinSans-Regular"),
    url("./assets/font/JosefinSans-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

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
  src: url("./assets/font/Montserrat-Bold.ttf");
  src: local("Montserrat Bold"),
    local("Montserrat-Bold"),
    url("./assets/font/Montserrat-Bold.ttf") format("opentype");
  font-weight: bold;
  font-style: normal;
}


* {
  font-family: "Montserrat", sans-serif;
}

.text-secondary {
  color: #535343;
  font-weight: bold;
  font-size: 13px;
}
</style>
