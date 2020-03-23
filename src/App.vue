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
  font-family: "Avenir";
  src: url("./assets/font/avenir.otf") format("otf");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: "Avenir", sans-serif;
}

.text-secondary {
  color: #535343;
  font-weight: bold;
  font-size: 13px;
}
</style>
