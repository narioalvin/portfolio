<template>
  <div id="page">
    <section id="home" class="full-height p-40">
      <Navbar />
      <div class="flex home">
        <div class="section-content">
          <div class="info">
            <div class="info-content">
              <h1
                v-bind:class="[showLandingPage ? 'animated fadeOutLeft fast' : 'animated fadeInLeft fast']"
                class="name"
              >Alvin Nario</h1>
              <div
                v-bind:class="[showLandingPage ? 'animated fadeOutLeft fast' : 'animated fadeInLeft fast delay-04s']"
              >
                <span class="job">Software Web Developer</span>
              </div>
              <div
                v-bind:class="[showLandingPage ? 'animated fadeOutLeft fast' : 'animated fadeInLeft fast delay-06s']"
              >
                <span class="place">Makati City Philippines</span>
              </div>
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
            <a href="https://github.com/narioalvin" target="_blank">
              <font-awesome-icon class="brand-icon" :icon="['fab', 'github']" />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/narioalvin" target="_blank">
              <font-awesome-icon class="brand-icon" :icon="['fab', 'dribbble']" />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/narioalvin" target="_blank">
              <font-awesome-icon class="brand-icon" :icon="['fab', 'behance']" />
            </a>
          </li>
          <li style="margin-bottom: 0">
            <a href="https://www.linkedin.com/in/alvin-nario-498a20193" target="_blank">
              <font-awesome-icon class="brand-icon" :icon="['fab', 'linkedin-in']" />
            </a>
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
      <div class="about">
        <h4
          class="intro"
          v-bind:class="[showAboutPage ? 'animated fadeInUp fast' : 'contact-custom']"
        >
          <b>It all started with one Hello World</b>
        </h4>
        <br />
        <div>
          <p v-bind:class="[showAboutPage ? 'animated fadeInUp fast delay-03s' : 'contact-custom']">
            Now I'm a Web Developer with two years of experience
            building amazing experience for the users
            and continuously learning and
            improving myself by practicing day by day with three cups of coffee.
            <br />
            <br />
            <span
              v-bind:class="[showAboutPage ? 'animated fadeInUp fast delay-06s' : 'contact-custom']"
            >I love what I do just as I love my dog.</span>
          </p>
          <br />
          <div
            v-bind:class="[showAboutPage ? 'animated fadeInUp fast delay-07s' : 'contact-custom']"
          >
            <a class="download-btn" :href="`${publicPath}resume.pdf`" download>DOWNLOAD CV</a>
          </div>
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
            <div class="flip" @click="test">
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
            <div class="flip" @click="test">
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
            <div class="flip" @click="test">
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
            <div class="flip" @click="test">
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
            <div class="flip" @click="test">
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
      <h4
        v-bind:class="[showContactPage ? 'animated fadeInUp fast' : 'animated fadeOutDown fast']"
      >Contact Me</h4>
      <div
        v-bind:class="[showContactPage ? 'animated fadeInUp fast delay-04s' : 'animated fadeOutDown fast']"
      >
        <font-awesome-icon class="contact-icon" :icon="['fas', 'phone']" />
        <h2>09052322714</h2>
      </div>
      <div
        v-bind:class="[showContactPage ? 'animated fadeInUp fast delay-05s' : 'animated fadeOutDown fast']"
      >
        <font-awesome-icon class="contact-icon" :icon="['fas', 'paper-plane']" />
        <h2>narioalvin94@gmail.com</h2>
      </div>
    </section>
    <footer>
      <span
        v-bind:class="[showContactPage ? 'animated fadeInLeft fast delay-07s' : 'animated fadeOutLeft fast']"
      >
        <font-awesome-icon style="margin-right: 10px" :icon="['far', 'copyright']" />
        <b>2020 ALVIN NARIO</b>
      </span>
      <ul
        class="links"
        v-bind:class="[showContactPage ? 'animated fadeInRight fast delay-07s' : 'animated fadeOutRight fast']"
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
          <font-awesome-icon class="contact-icon" :icon="['fab', 'linkedin-in']" />
        </li>
      </ul>
    </footer>
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
      innerWidth: window.innerWidth,
      publicPath: process.env.BASE_URL
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
    },
    test() {
      // document.getElementById("test").style.transform = 'rotateY(180deg)';
      // element.classList.add("mystyle");
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

.download-btn:hover {
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
  background-color: #cccccc;
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

// ANIMATION
// .animated {
//   -webkit-animation-duration: 1s;
//   animation-duration: 1s;
//   -webkit-animation-fill-mode: both;
//   animation-fill-mode: both;
// }

// .infinite {
//   animation-iteration-count: infinite;
// }

// .animated.fast {
//   -webkit-animation-duration: 800ms;
//   animation-duration: 800ms;
// }

// .animated.delay-04s {
//   -webkit-animation-delay: 0.4s;
//   animation-delay: 0.4s;
// }

// .animated.delay-05s {
//   -webkit-animation-delay: 0.5s;
//   animation-delay: 0.5s;
// }

// .animated.delay-07s {
//   -webkit-animation-delay: 0.7s;
//   animation-delay: 0.7s;
// }

// .animated.delay-1s {
//   -webkit-animation-delay: 1s;
//   animation-delay: 1s;
// }

// .animated.delay-2s {
//   -webkit-animation-delay: 2s;
//   animation-delay: 2s;
// }

// .animated.delay-3s {
//   -webkit-animation-delay: 3s;
//   animation-delay: 3s;
// }

// .animated.delay-4s {
//   -webkit-animation-delay: 4s;
//   animation-delay: 4s;
// }

// .animated.delay-5s {
//   -webkit-animation-delay: 5s;
//   animation-delay: 5s;
// }

// @-webkit-keyframes fadeInLeft {
//   from {
//     opacity: 0;
//     -webkit-transform: translate3d(-100%, 0, 0);
//     transform: translate3d(-100%, 0, 0);
//   }

//   to {
//     opacity: 1;
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }

// @keyframes fadeInLeft {
//   from {
//     opacity: 0;
//     -webkit-transform: translate3d(-100%, 0, 0);
//     transform: translate3d(-100%, 0, 0);
//   }

//   to {
//     opacity: 1;
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }

// .fadeInLeft {
//   -webkit-animation-name: fadeInLeft;
//   animation-name: fadeInLeft;
// }

// @-webkit-keyframes fadeOutLeft {
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//     -webkit-transform: translate3d(-100%, 0, 0);
//     transform: translate3d(-100%, 0, 0);
//   }
// }

// @keyframes fadeOutLeft {
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//     -webkit-transform: translate3d(-100%, 0, 0);
//     transform: translate3d(-100%, 0, 0);
//   }
// }

// .fadeOutLeft {
//   -webkit-animation-name: fadeOutLeft;
//   animation-name: fadeOutLeft;
// }

// @-webkit-keyframes fadeInRight {
//   from {
//     opacity: 0;
//     -webkit-transform: translate3d(100%, 0, 0);
//     transform: translate3d(100%, 0, 0);
//   }

//   to {
//     opacity: 1;
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }

// @keyframes fadeInRight {
//   from {
//     opacity: 0;
//     -webkit-transform: translate3d(100%, 0, 0);
//     transform: translate3d(100%, 0, 0);
//   }

//   to {
//     opacity: 1;
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }

// .fadeInRight {
//   -webkit-animation-name: fadeInRight;
//   animation-name: fadeInRight;
// }

// @-webkit-keyframes fadeOutRight {
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//     -webkit-transform: translate3d(100%, 0, 0);
//     transform: translate3d(100%, 0, 0);
//   }
// }

// @keyframes fadeOutRight {
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//     -webkit-transform: translate3d(100%, 0, 0);
//     transform: translate3d(100%, 0, 0);
//   }
// }

// .fadeOutRight {
//   -webkit-animation-name: fadeOutRight;
//   animation-name: fadeOutRight;
// }

// @-webkit-keyframes fadeInUp {
//   from {
//     opacity: 0;
//     -webkit-transform: translate3d(0, 100%, 0);
//     transform: translate3d(0, 100%, 0);
//   }

//   to {
//     opacity: 1;
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }

// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     -webkit-transform: translate3d(0, 100%, 0);
//     transform: translate3d(0, 100%, 0);
//   }

//   to {
//     opacity: 1;
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }

// .fadeInUp {
//   -webkit-animation-name: fadeInUp;
//   animation-name: fadeInUp;
// }

// @-webkit-keyframes fadeOutDown {
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//     -webkit-transform: translate3d(0, 100%, 0);
//     transform: translate3d(0, 100%, 0);
//   }
// }

// @keyframes fadeOutDown {
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//     -webkit-transform: translate3d(0, 100%, 0);
//     transform: translate3d(0, 100%, 0);
//   }
// }

// .fadeOutDown {
//   -webkit-animation-name: fadeOutDown;
//   animation-name: fadeOutDown;
// }

// @media (print), (prefers-reduced-motion: reduce) {
//   .animated {
//     -webkit-animation-duration: 1ms !important;
//     animation-duration: 1ms !important;
//     -webkit-transition-duration: 1ms !important;
//     transition-duration: 1ms !important;
//     -webkit-animation-iteration-count: 1 !important;
//     animation-iteration-count: 1 !important;
//   }
// }

// MEDIA QUERIES

@media (min-width: 360px) {
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
    height: 63vh;
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

  footer {
    padding: 0 40px;
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

  .contact div h2 {
    font-size: 2rem;
  }

  footer .links li {
    margin-right: 35px;
  }
}
</style>