<template>
  <section id="projects">
    <div class="animated" data-animationtype="up" data-delay=".3s">
      <b-row class="two-cols">
        <b-col class="b-col" md>
          <div class="flip project" @click="flipProject">
            <div class="front project-one">
              <h1 class="text-shadow white-text">Weather Vibe</h1>
              <CloudyDay3 class="project-icon" />
            </div>
            <div class="back" style="padding-top: 50px">
              <h2 class="dark-text" style="margin-bottom: 20px">Vue</h2>
              <p>
                A simple weather app with dynamic background and relaxing music
                using multiple free APIs.
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
          <div class="flip project" @click="flipProject">
            <div class="front project-two">
              <h1 class="text-shadow white-text">Multi-Step Form</h1>
              <img
                width="100"
                class="project-icon"
                src="../assets/image/avatar.png"
              />
            </div>
            <div class="back" style="padding-top: 50px">
              <h2 class="dark-text">Full Stack</h2>
              <p>
                Multi-Step Registration and Login Form Template with complete
                validation and email verification using Express for Back-End,
                MongoDB for Database then Angular, Vue, and React for Front-End.
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

      <b-row class="two-cols">
        <b-col class="b-col" md>
          <div class="flip" @click="flipProject">
            <div class="front project-three">
              <h1 class="text-shadow white-text">Cheez-Meez</h1>
              <img
                width="170"
                class="project-icon"
                src="../assets/image/cheez-meez.svg"
              />
            </div>
            <div class="back">
              <h2 class="dark-text" style="margin-bottom: 20px">Full Stack</h2>
              <p>
                A Real-Time Chat Application created using ReactJS for
                Front-End, Node.js and Socket.io for Back-End.
              </p>
              <a
                href="https://narioalvin.github.io/react-cheez-meez/"
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
          <div class="flip" @click="flipProject">
            <div class="front project-four">
              <h1 class="text-shadow white-text">PractQuiz</h1>
              <img
                width="140"
                class="project-icon shake"
                src="../assets/image/idea.svg"
              />
            </div>
            <div class="back">
              <h2 class="dark-text" style="margin-bottom: 20px">Vue</h2>
              <p>
                A Web Application that you can Practice your memory by taking a
                Quiz. Created using Vue and Open TB API.
              </p>
              <a
                href="https://narioalvin.github.io/vue-practquiz/"
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
    </div>
  </section>
</template>

<script>
import CloudyDay3 from '@/components/CloudyDay3.vue';

export default {
  name: 'Project',
  components: {
    CloudyDay3,
  },
  methods: {
    flipProject() {
      //FOR CLICKING PROJECTS ON MOBILE
    },
  },
};
</script>

<style lang="scss" scoped>
.project-btn {
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  background: #202020;

  &:hover {
    opacity: 0.8;
  }

  .chevron {
    font-size: 18px;
    color: #ffffff;
  }
}

.project-one {
  background-color: #e6c84f !important;
  background-image: linear-gradient(315deg, #e6c84f 0%, #e8807f 74%) !important;
}

.project-two {
  background-color: #8d5185 !important;
  background-image: linear-gradient(315deg, #8d5185 0%, #a1bafe 74%) !important;
}

.project-three {
  background-color: #d9e4f5 !important;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%) !important;
}

.project-four {
 background-color: #fff293 !important;
  background-image: linear-gradient(315deg, #fff293 0%, #ffe884 74%) !important;
}

.project-icon {
  position: relative;
  top: 50px;
}

.two-cols .b-col,
.three-cols .b-col {
  min-height: 50vh;
  padding: 0;
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
</style>
