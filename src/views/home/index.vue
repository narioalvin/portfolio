<template>
  <div id="page">
    <section class="full-height p-40">
      <Navbar />
      <div class="flex home">
        <div class="section-content">
          <div
            class="info"
            v-bind:class="[showLandingPage ? 'animated fadeOutLeft fast' : 'animated fadeInLeft fast']"
          >
            <div class="info-content">
              <h1 class="name">Alvin Nario</h1>
              <span class="job">Software Web Developer</span>
              <br />
              <span class="place">Makati City Philippines</span>
            </div>
          </div>
          <div
            class="info-img"
            v-bind:class="[showLandingPage ? 'animated fadeOutRight fast' : 'animated fadeInRight fast']"
          >
            <img class="me" src="../../assets/image/me.jpg" />
          </div>
        </div>
      </div>
      <div class="bottom">
        <ul
          class="brand-list"
          style="list-style-type:none; padding: 0"
          v-bind:class="[showLandingPage ? 'animated fadeOutLeft fast' : 'animated fadeInLeft fast']"
        >
          <li>
            <font-awesome-icon class="brand-icon" :icon="['fab', 'github']" />
          </li>
          <li>
            <font-awesome-icon class="brand-icon" :icon="['fab', 'dribbble']" />
          </li>
          <li>
            <font-awesome-icon class="brand-icon" :icon="['fab', 'behance']" />
          </li>
          <li style="margin-bottom: 0">
            <font-awesome-icon class="brand-icon" :icon="['fab', 'linkedin-in']" />
          </li>
        </ul>
        <div
          v-bind:class="[showLandingPage ? 'animated fadeOutDown fast' : 'animated fadeInUp fast']"
        >
          <font-awesome-icon
            class="arrow-down animated fadeOutDown slow infinite"
            :icon="['fas', 'angle-down']"
          />
        </div>
      </div>
    </section>
    <section class="full-height flex p-40" id="about">
      <div
        class="about"
        v-bind:class="[showAboutPage ? 'animated fadeInUp fast' : 'contact-custom']"
      >
        <h5 class="intro">
          <b>It all started with one Hello World</b>
        </h5>
        <br />
        <div>
          <p>
            Now I'm a Web Developer with two years of experience
            building amazing experience for the users
            and continuosly learning and
            improving myself by practicing with three cups of coffee day by day.
            <br />
            <br />I love what I do just as I love my dog.
          </p>
          <br />

          <b-button variant="outline-dark" class="download">
            DOWNLOAD CV
            <b-spinner small style="position: relative; left: 15px;"></b-spinner>
            <span class="sr-only">Loading...</span>
          </b-button>
        </div>
      </div>
    </section>
    <section id="projects">
      <div
        class="project"
        v-bind:class="[showProjectsPage ? 'animated fadeInUp fast' : 'animated fadeOutDown fast']"
      >
        <b-row class="two-cols">
          <b-col class="b-col" md>
            <div class="flip">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80)"
              >
                <h1 class="text-shadow">COMING SOON</h1>
              </div>
              <div class="back">
                <h2>Angular</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
              </div>
            </div>
          </b-col>
          <b-col class="b-col" md>
            <div class="flip">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"
              >
                <h1 class="text-shadow">COMING SOON</h1>
              </div>
              <div class="back">
                <h2>Angular</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="three-cols">
          <b-col class="b-col" sm>
            <div class="flip">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1513595207829-9f414c0665f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"
              >
                <h1 class="text-shadow">COMING SOON</h1>
              </div>
              <div class="back">
                <h2>Angular</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
              </div>
            </div>
          </b-col>
          <b-col class="b-col" sm>
            <div class="flip">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1486746290722-483e8f1e44d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=601&q=80)"
              >
                <h1 class="text-shadow">COMING SOON</h1>
              </div>
              <div class="back">
                <h2>Angular</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
              </div>
            </div>
          </b-col>
          <b-col class="b-col" sm>
            <div class="flip">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)"
              >
                <h1 class="text-shadow">COMING SOON</h1>
              </div>
              <div class="back">
                <h2>Angular</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <section class="contact" id="contact">
      <div
        v-bind:class="[showContactPage ? 'animated fadeInUp fast' : 'animated fadeOutDown fast']"
      >
        <ul class="links">
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
            <font-awesome-icon class="contact-icon" :icon="['fab', 'linkedin-in']" />
          </li>
        </ul>
        <br />
        <font-awesome-icon style="margin-right: 10px" :icon="['far', 'copyright']" />
        <span style="font-size: 14px;">
          <b>2020 ALVIN NARIO</b>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  components: { Navbar },
  data() {
    return {
      showLandingPage: false,
      showAboutPage: false,
      showProjectsPage: false,
      showContactPage: false,
      innerWidth: window.innerWidth
    };
  },
  methods: {
    handleScroll() {
      //BREAKPOINTS WHEN THE ANIMATIONS WILL SHOW
      this.showLandingPage = window.scrollY > 200;
      this.showAboutPage = window.scrollY >= 350 && window.scrollY < 850;
      this.showProjectsPage = window.scrollY >= 850;

      if (this.innerWidth < 576) {
        this.showContactPage = window.scrollY > 2300;
      } else if (this.innerWidth >= 576 && this.innerWidth < 768) {
        this.showContactPage = window.scrollY > 1800;
      } else if (this.innerWidth > 768) {
        this.showContactPage = window.scrollY > 1400;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
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

.about div {
  max-width: 560px;
}

.about div p {
  font-weight: 600;
  font-size: 15px;
  line-height: 2rem;
}

.download {
  font-size: 12px;
  font-weight: bold;
  min-width: 200px;
}

.intro {
  font-size: 1.1rem;
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
    color: white;
    width: inherit;
    background-size: cover !important;
    background-position: center !important;
    height: 50vh;
    padding: 1em 2em;
    background: #313131;
    p {
      font-size: 0.9125rem;
      line-height: 160%;
      color: #999;
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
}

.contact div {
  text-align: center;
}

.contact .links {
  list-style-type: none;
  padding: 0;
}

.contact .links li {
  display: inline;
  margin-right: 40px;
}

.contact .links li:last-child {
  margin-right: 0;
}

.contact .links li .contact-icon {
  font-size: 40px;
  color: #cccccc;
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
  left: 35px;
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
  // padding: 0 15px;
  align-items: flex-end;
  position: relative;
  // animation-name: bottom;
  // animation-duration: 1s;
  // animation-timing-function: ease-out;
}

.contact-custom {
  position: relative;
  animation-name: contact;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  opacity: 0;
}

.brand-list li {
  margin-bottom: 15px;
}

.brand-icon {
  font-size: 15px;
}

.info {
  position: relative;
  width: 250px;
  z-index: 9999;
  top: 45%;
  // animation: infoAnimation 0s 1s forwards;
  // animation-duration: 0.7s;
  // opacity: 0;
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

// ANIMATION
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.infinite {
  animation-iteration-count: infinite;
}

.animated.fast {
  -webkit-animation-duration: 800ms;
  animation-duration: 800ms;
}

@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@media (print), (prefers-reduced-motion: reduce) {
  .animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-transition-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }
}

@media (min-width: 360px) {
  .name {
    font-size: 45px;
  }

  .info {
    width: 280px;
  }

  .info-content {
    position: relative;
    // left: 150px;
    top: 20px;
  }

  .home {
    height: 63vh;
  }

  .brand-icon {
    font-size: 18px;
  }
}

@media (min-width: 480px) {
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
  }

  .intro {
    font-size: 1.25rem;
  }
}

@media (min-width: 600px) {
  .brand-list li .brand-icon {
    font-size: 20px;
  }

  .p-40 {
    padding: 40px;
  }

  .home {
    height: 85vh;
  }
}

@media (min-width: 768px) {
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
}

@keyframes contact {
  0% {
    top: 0;
    opacity: 1;
  }
  100% {
    top: -50px;
  }
}

@keyframes bottom {
  0% {
    top: 100px;
    opacity: 0;
  }
  100% {
    top: 0;
  }
}

@keyframes infoAnimation {
  to {
    opacity: 1;
  }

  0% {
    left: -200px;
  }
  100% {
    left: 15px;
  }
}

@keyframes imgAnimation {
  to {
    opacity: 1;
  }

  0% {
    left: 100px;
  }
  100% {
    left: 0;
  }
}
</style>