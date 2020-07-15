<template>
  <section class="contact flex" id="contact">
    <h3 class="project animated" data-animationtype="up" data-delay=".2s">
      Contact Me
    </h3>
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
  flex-direction: column;
  font-weight: 600;

  h3 {
    margin-bottom: 35px;
    font-size: 20px;
  }

  div {
    margin-bottom: 10px;
    h2 {
      display: inline-block !important;
      font-size: 21px;
      margin: 0;
    }

    .contact-icon {
      font-size: 21px;
      margin-right: 8px;
    }
  }
}

@media (min-width: 360px) {
  .contact {
    h3 {
      font-size: 23px;
    }

    div {
      h2 {
        font-size: 24px;
      }

      .contact-icon {
        font-size: 24px;
      }
    }
  }
}

@media (min-width: 768px) {
  .contact {
    h3 {
      font-size: 35px;
    }

    div {
      h2 {
        font-size: 50px;
      }

      .contact-icon {
        font-size: 40px;
      }
    }
  }
}
</style>
