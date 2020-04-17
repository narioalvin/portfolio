<template>
  <div id="main">
    <div class="logo">
      <img class="me" src="../assets/image/logo.png" />
    </div>
    <div style="font-weight: 600">contact</div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
#main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  position: relative;
  animation-name: navbar;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

.logo img {
  width: 35px;
}

@keyframes navbar {
    0% {
        bottom: 50px;
        opacity: 0;
    }
    100% {
        bottom: 0;
    }
}
</style>