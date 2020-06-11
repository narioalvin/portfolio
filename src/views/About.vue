<template>
  <section class="full-height flex p-40" id="about">
    <div class="about">
      <h4 class="intro animated" data-animationtype="up" data-delay="0s">
        <b>It all started with one Hello World</b>
      </h4>
      <br />
      <div>
        <p class="animated" data-animationtype="up" data-delay=".2s">
          Now I'm a Web Developer with two years of experience building amazing
          experience for the users and continuously learning and improving
          myself by practicing day by day with three cups of coffee.
          <br />
          <br />
          <span class="animated" data-animationtype="up" data-delay=".3s"
            >I love what I do just as I love my dog.</span
          >
        </p>
        <br />
        <div class="animated" data-animationtype="up" data-delay=".4s">
          <a class="download-btn" :href="`${publicPath}resume.pdf`" download
            >DOWNLOAD CV</a
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
  text-align: center;
  flex-direction: column;
    display: flex;
    align-items: center;
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

.download-btn {
  position: relative;
  background: #fcfcfc;
  color: #1a1a1a;
  font-size: 12px;
  text-decoration: none;
  padding: 12px 33px;
  border-radius: 5px;
  border: 1px solid #1a1a1a;
  font-weight: bold;
  top: 30px;
  transition: 0.3s;

  &:hover,
  &:focus {
    background: #1a1a1a;
    color: #fcfcfc;
  }
}

.intro {
  font-size: 3vw;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
