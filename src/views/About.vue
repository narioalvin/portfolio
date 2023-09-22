<template>
  <section class="about flex p-40" id="about">
    <div class="about-content flex">
      <h4 class="intro animated" data-animationtype="up" data-delay="0s">
        <b>It all started with one 'Hello World!'</b>
      </h4>
      <br />
      <div>
        <p class="animated" data-animationtype="up" data-delay=".2s">
          Now, I'm a Software Developer with more than five years of
          experience building immersive and responsive software, enjoying and
          learning new languages, frameworks and technologies.
          <br />
          <br />
          <span class="animated" data-animationtype="up" data-delay=".3s"
            >I love what I do as much I love my dog and my coffee.</span
          >
        </p>
        <br />
        <div class="animated" data-animationtype="up" data-delay=".4s">
          <a class="primary-btn" :href="`${publicPath}resume.pdf`" download
            >Download CV</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scope>
.about {
  height: 100vh;
  .about-content {
    text-align: center;
    flex-direction: column;
    margin: 60px 0;

    .intro {
      line-height: 1.6em;
      font-size: 18px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    div {
      max-width: 560px;
      p {
        font-weight: 600;
        font-size: 15px;
        line-height: 25px;
        letter-spacing: 0.05rem;
      }
    }
  }
}

@media (min-width: 400px) {
  .about .about-content .intro {
    font-size: 23px;
  }
}

@media (min-width: 992px) {
  .about .about-content {
    height: 100vh;

    .intro {
      font-size: 32px;
    }

    div p {
      font-size: 18px;
    }
  }
}
</style>
