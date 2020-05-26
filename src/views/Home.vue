<template>
  <div id="page">
    <section id="home" class="full-height p-40">
      <Navbar />
      <div class="flex home">
        <div class="section-content">
          <div class="info">
            <div class="info-content">
              <h1
                class="name animated"
                data-animationtype="left"
                data-delay=".3s"
              >
                Alvin Nario
              </h1>
              <div class="animated" data-animationtype="left" data-delay=".4s">
                <span class="job">Software Web Developer</span>
              </div>
              <div class="animated" data-animationtype="left" data-delay=".5s">
                <span class="place">Makati City Philippines</span>
              </div>
            </div>
          </div>
          <div
            class="info-img animated"
            data-animationtype="right"
            data-delay=".3s"
          >
            <img class="me" src="../assets/image/me.jpg" />
          </div>
        </div>
      </div>
      <div class="bottom">
        <ul class="brand-list" style="list-style-type:none; padding: 0">
          <li>
            <a href="https://github.com/narioalvin" target="_blank">
              <font-awesome-icon
                class="brand-icon animated"
                data-animationtype="up-brand"
                data-delay=".3s"
                :icon="['fab', 'github']"
              />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/narioalvin" target="_blank">
              <font-awesome-icon
                class="brand-icon animated"
                data-animationtype="up-brand"
                data-delay=".4s"
                :icon="['fab', 'dribbble']"
              />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/narioalvin" target="_blank">
              <font-awesome-icon
                class="brand-icon animated"
                data-animationtype="up-brand"
                data-delay=".5s"
                :icon="['fab', 'behance']"
              />
            </a>
          </li>
          <li style="margin-bottom: 0">
            <a
              href="https://www.linkedin.com/in/alvin-nario-498a20193"
              target="_blank"
            >
              <font-awesome-icon
                class="brand-icon animated"
                data-animationtype="up-brand"
                data-delay=".6s"
                :icon="['fab', 'linkedin-in']"
              />
            </a>
          </li>
        </ul>
        <div class="info-img animatedArrow fadeOutDown infinite">
          <font-awesome-icon class="arrow-down" :icon="['fas', 'angle-down']" />
        </div>
      </div>
    </section>
    <section class="full-height flex p-40" id="about">
      <div class="about">
        <h4 class="intro animated" data-animationtype="up" data-delay="0s">
          <b>It all started with one Hello World</b>
        </h4>
        <br />
        <div>
          <p class="animated" data-animationtype="up" data-delay=".2s">
            Now I'm a Web Developer with two years of experience building
            amazing experience for the users and continuously learning and
            improving myself by practicing day by day with three cups of coffee.
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
    <section id="projects">
      <div class="animated" data-animationtype="up" data-delay=".3s">
        <b-row class="two-cols">
          <b-col class="b-col" md>
            <div class="flip project" @click="test">
              <div class="front project-one">
                <!-- style="background-image: url(https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80)" -->
                <h1 class="text-shadow white-text">Weather Vibe</h1>
                <CloudyDay3 class="project-icon" />
              </div>
              <div
                class="back"
                style="padding-top: 50px"
              >
                <h2 class="dark-text" style="margin-bottom: 20px">Vue</h2>
                <p>
                  A simple weather app with dynamic background and relaxing
                  music.
                </p>
                <a
                  href="https://narioalvin.github.io/weather-vibe/"
                  target="_blank"
                >
                  <button class="project-btn">
                    <font-awesome-icon
                      class="chevron"
                      :icon="['fas', 'chevron-right']"
                    />
                  </button>
                </a>
              </div>
            </div>
          </b-col>
          <b-col class="b-col" md>
            <div class="flip project" @click="test">
              <div class="front project-two">
                <h1 class="text-shadow white-text">Multi-Step Form</h1>
                <img
                  width="70"
                  class="project-icon"
                  src="../assets/image/avatar.png"
                />
              </div>
              <div
                class="back"
                style="padding-top: 50px"
              >
                <h2 class="dark-text">Full Stack</h2>
                <p>
                  Multi-Step Registration and Login form with complete
                  validation and email verification using Express, MongoDB and
                  multiple JS Frameworks.
                </p>
                <a
                  href="https://narioalvin.github.io/vue-multi-step-form/#/"
                  target="_blank"
                >
                  <button class="project-btn">
                    <font-awesome-icon
                      class="chevron"
                      :icon="['fas', 'chevron-right']"
                    />
                  </button>
                </a>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="three-cols">
          <b-col class="b-col" sm>
            <div class="flip" @click="test">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1513595207829-9f414c0665f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"
              >
                <h1 class="text-shadow white-text">COMING SOON</h1>
              </div>
              <div class="back">
                <h2 class="dark-text" style="margin-bottom: 20px">Angular</h2>
                <p>
                  Good tools make application development quicker and easier to
                  maintain than if you did everything by hand..
                </p>
              </div>
            </div>
          </b-col>
          <b-col class="b-col" sm>
            <div class="flip" @click="test">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1486746290722-483e8f1e44d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=601&q=80)"
              >
                <h1 class="text-shadow white-text">COMING SOON</h1>
              </div>
              <div class="back">
                <h2 class="dark-text">Angular</h2>
                <p>
                  Good tools make application development quicker and easier to
                  maintain than if you did everything by hand..
                </p>
              </div>
            </div>
          </b-col>
          <b-col class="b-col" sm>
            <div class="flip" @click="test">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)"
              >
                <h1 class="text-shadow">COMING SOON</h1>
              </div>
              <div class="back">
                <h2 class="dark-text">Angular</h2>
                <p>
                  Good tools make application development quicker and easier to
                  maintain than if you did everything by hand..
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <section class="contact" id="contact">
      <h4 class="project animated" data-animationtype="up" data-delay=".2s">
        Contact Me
      </h4>
      <div class="project animated" data-animationtype="up" data-delay=".4s">
        <font-awesome-icon class="contact-icon" :icon="['fas', 'phone']" />
        <h2>09052322714</h2>
      </div>
      <div class="project animated" data-animationtype="up" data-delay=".5s">
        <font-awesome-icon
          class="contact-icon"
          :icon="['fas', 'paper-plane']"
        />
        <h2>narioalvin94@gmail.com</h2>
      </div>
    </section>
    <footer>
      <span class="project animated" data-animationtype="left" data-delay=".6s">
        <font-awesome-icon
          style="margin-right: 10px"
          :icon="['far', 'copyright']"
        />
        <b>2020 ALVIN NARIO</b>
      </span>
      <ul
        class="links project animated"
        data-animationtype="right"
        data-delay=".6s"
      >
        <li>
          <font-awesome-icon class="contact-icon" :icon="['fab', 'github']" />
        </li>
        <li>
          <font-awesome-icon class="contact-icon" :icon="['fab', 'dribbble']" />
        </li>
        <li>
          <font-awesome-icon class="contact-icon" :icon="['fab', 'behance']" />
        </li>
        <li>
          <font-awesome-icon
            class="contact-icon"
            :icon="['fab', 'linkedin-in']"
          />
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import CloudyDay3 from '@/components//CloudyDay3.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    CloudyDay3,
  },
  data() {
    return {
      showLandingPage: false,
      showAboutPage: false,
      showProjectsPage: false,
      showContactPage: false,
      innerWidth: window.innerWidth,
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    test() {},
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    const items = document.querySelectorAll('.animated');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          switch (entry.target.dataset.animationtype) {
            case 'up':
              entry.target.style.animation = `animUp .5s ${entry.target.dataset.delay} forwards ease-out`;
              break;
            case 'left':
              entry.target.style.animation = `animLeft .5s ${entry.target.dataset.delay} forwards ease-out`;
              break;
            case 'right':
              entry.target.style.animation = `animRight .5s ${entry.target.dataset.delay} forwards ease-out`;
              break;
            case 'up-brand':
              entry.target.style.animation = `animUpBrands .5s ${entry.target.dataset.delay} forwards ease-out`;
              break;
          }
        }
      });
    });

    items.forEach((item) => {
      observer.observe(item);
    });
  },
};
</script>

<style lang="scss" scoped>
#page {
  overflow: hidden;
  background-color: #fcfcfc;
  color: #202020;
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
}

.download-btn:hover,
.download-btn:focus {
  background: #1a1a1a;
  color: #fcfcfc;
}

.brand-icon:hover {
  animation: bounce 0.5s infinite;
  cursor: pointer;
}

.about div {
  max-width: 560px;
}

.about div p {
  font-weight: 600;
  font-size: 15px;

  line-height: 25px;
  letter-spacing: 0.05rem;
}

.download {
  font-size: 12px;
  font-weight: bold;
  min-width: 200px;
}

.intro {
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.project-btn {
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  background: #202020;
}

.project-btn .chevron {
  font-size: 18px;
  color: #ffffff;
}

.project-btn:hover {
  opacity: 0.8;
}

.project-one {
  background-color: #e6c84f !important;
  background-image: linear-gradient(315deg, #e6c84f 0%, #e8807f 74%) !important;
}

.project-two {
  background-color: #8d5185 !important;
  background-image: linear-gradient(315deg, #8d5185 0%, #a1bafe 74%) !important;
}

.project-icon {
  position: relative;
  top: 50px;
}

.flip {
  position: relative;
  > .front,
  > .back {
    display: block;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 1.5s;
    transition-property: transform, opacity;
  }
  > .front {
    transform: rotateY(0deg);
  }
  > .back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg);
  }
  &:hover {
    > .front {
      transform: rotateY(180deg);
    }
    > .back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
  &.flip-vertical {
    > .back {
      transform: rotateX(-180deg);
    }
    &:hover {
      > .front {
        transform: rotateX(180deg);
      }
      > .back {
        transform: rotateX(0deg);
      }
    }
  }
}

.flip {
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
  > .front,
  > .back {
    display: block;
    width: inherit;
    background-size: cover !important;
    background-position: center !important;
    height: 50vh;
    padding: 1em 2em;
    background-color: #f6f6f6;
    background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
    p {
      font-size: 0.9125rem;
      line-height: 160%;
      color: #202020;
    }
  }
}

.p-40 {
  padding: 15px;
}

.full-height {
  height: 100vh;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  height: 73vh;
  position: relative;
  top: 30px;
}

.about {
  text-align: center;
}

.two-cols .b-col,
.three-cols .b-col {
  min-height: 50vh;
  padding: 0;
}

.contact {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
}

.contact h4 {
  margin-bottom: 35px;
  font-size: 18px;
}

.contact div {
  margin-bottom: 10px;
}

.contact div h2 {
  display: inline-block !important;
  font-size: 23px;
  margin: 0;
}

.contact div .contact-icon {
  font-size: 20px;
  margin-right: 8px;
}

.section-content {
  width: 653px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.me {
  width: 300px;
  position: relative;
  left: 45px;
  border-radius: 50%;
}

.job {
  font-weight: 600;
}

.place {
  font-size: 15px;
}

.name {
  margin: 0;
  font-weight: bold;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}

.brand-list li {
  margin-bottom: 15px;
}

.brand-icon {
  font-size: 15px;
  color: #1a1a1a;
}

.info {
  position: relative;
  width: 250px;
  z-index: 9999;
  top: 45%;
}

.info-content {
  position: relative;
  left: 130px;
}

.info-img {
  position: relative;
}

.arrow-down {
  font-size: 22px;
  position: relative;
  bottom: 10px;
  animation: arrowAnimation 1.5s infinite;
}

footer {
  background-color: #e6e6e6;
  color: #1a1a1a;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
}

footer span {
  font-size: 11px;
}

footer ul {
  margin: 0;
}

footer .links {
  list-style-type: none;
  padding: 0;
}

footer .links li {
  display: inline;
  margin-right: 12px;
}

footer .links li:last-child {
  margin-right: 0;
}

footer .links li .contact-icon {
  font-size: 14px;
}

// MEDIA QUERIES

@media screen and (min-width: 360px) {
  .name {
    font-size: 45px;
  }

  .info {
    width: 280px;
  }

  .info-content {
    position: relative;
    top: 20px;
  }

  .home {
    height: 61vh;
  }

  .brand-icon {
    font-size: 18px;
  }

  footer span {
    font-size: 15px;
  }

  footer .links li .contact-icon {
    font-size: 20px;
  }

  .contact h4 {
    font-size: 20px;
  }
}

@media screen and (min-width: 480px) {
  .name {
    font-size: 39px;
  }

  .job {
    font-size: 16px;
  }

  .place {
    font-size: 15px;
  }

  .info {
    width: 265px;
  }

  .brand-list li {
    display: inline;
    margin-right: 35px;
  }

  .home {
    height: 92vh;
    top: 0;
  }

  .me {
    left: -50px;
    width: 280px;
  }

  .info-content {
    left: 60px;
    top: 40px;
  }

  .about div p {
    font-size: 1rem;
    line-height: 2rem;
  }

  .intro {
    font-size: 1.25rem;
  }

  footer .links li {
    margin-right: 20px;
  }

  .contact div .contact-icon {
    font-size: 25px;
    margin-right: 15px;
  }

  .contact div h2 {
    font-size: 28px;
  }

  .contact h4 {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 600px) and (orientation: portrait) {
  .brand-list li .brand-icon {
    font-size: 20px;
  }

  .p-40 {
    padding: 40px;
  }

  .home {
    height: 85vh;
  }

  footer {
    padding: 0 40px;
  }
}

@media screen and (min-width: 768px) {
  .info-content {
    left: 50px;
    top: 50px;
  }

  .name {
    font-size: 50px;
    letter-spacing: 1px;
  }

  .job {
    font-size: 21px;
  }

  .place {
    font-size: 19px;
  }

  .info {
    width: 320px;
  }

  .me {
    left: -50px;
    width: 330px;
  }

  .contact div h2 {
    font-size: 3rem;
  }

  footer .links li {
    margin-right: 35px;
  }

  .contact div .contact-icon {
    font-size: 40px;
  }
}
</style>
