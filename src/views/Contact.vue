<template>
  <section class="contact flex" id="contact">
    <h3 class="project animated" data-animationtype="up" data-delay=".2s">
      Contact Me
    </h3>
    <div class="project animated" data-animationtype="up" data-delay=".4s">
      <img
        class="contact-icon"
        src="../assets/images/phone-call.svg"
        alt="phone-call"
      />
      <h2>+639052322714</h2>
    </div>
    <div class="project animated" data-animationtype="up" data-delay=".5s">
      <img class="contact-icon" src="../assets/images/paper-plane.svg" alt="email" />
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
    display: flex;
    h2 {
      display: inline-block !important;
      font-size: 21px;
      margin: 0;
    }

    .contact-icon {
      width: 21px;
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
        width: 24px;
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
        width: 40px;
      }
    }
  }
}
</style>
