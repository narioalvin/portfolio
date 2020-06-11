<template>
  <section class="contact" id="contact">
    <h4 class="project animated" data-animationtype="up" data-delay=".2s">
      Contact Me
    </h4>
    <div class="project animated" data-animationtype="up" data-delay=".4s">
      <font-awesome-icon class="contact-icon" :icon="['fas', 'phone']" />
      <h2>09052322714</h2>
    </div>
    <div class="project animated" data-animationtype="up" data-delay=".5s">
      <font-awesome-icon class="contact-icon" :icon="['fas', 'paper-plane']" />
      <h2>narioalvin94@gmail.com</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
.contact {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  h4 {
    margin-bottom: 35px;
    font-size: 4vw;
  }

  div {
    margin-bottom: 10px;
    h2 {
      display: inline-block !important;
      font-size: 5vw;
      margin: 0;
    }

    .contact-icon {
      font-size: 4vw;
      margin-right: 8px;
    }
  }
}
</style>
