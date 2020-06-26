<template>
  <section id="projects">
    <div class="animated" data-animationtype="up" data-delay=".3s">
      <b-row class="project-cols">
        <b-col
          class="b-col"
          cols="12"
          v-for="item in projects"
          :key="item.projectName"
          :md="item.size"
        >
          <div class="flip" @click="flipProject">
            <div class="front" :class="item.projectNo">
              <h1 class="text-shadow white-text">{{ item.projectName }}</h1>
              <img
                v-if="!item.isImageComponent"
                :width="item.imageWidth"
                class="project-icon"
                :class="item.animationClass"
                :src="require(`../assets/image/${item.image}`)"
              />
              <component
                v-if="item.isImageComponent"
                :is="item.componentName"
              ></component>
            </div>
            <div class="back">
              <h2 class="dark-text" style="margin-bottom: 20px">
                {{ item.projectBackTitle }}
              </h2>
              <p>
                {{ item.projectBackDescription }}
              </p>
              <a :href="item.projectLink" target="_blank">
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
    <center>
      <b-button v-if="!loadMoreClicked" @click="loadMore" class="load-more" pill
        >More Projects</b-button
      >
    </center>
  </section>
</template>

<script>
import CloudyDay3 from '@/components/CloudyDay3.vue';

export default {
  name: 'Project',
  components: {
    CloudyDay3,
  },
  data() {
    return {
      projects: [
        {
          projectName: 'Weather Vibe',
          projectBackTitle: 'Vue',
          projectBackDescription:
            'A colorful and accurate Weather application with dynamic background and a relaxing music to enjoy the viewing experience. Created using Vue and multiple free public APIs.',
          projectNo: 'project-one',
          projectLink: 'https://narioalvin.github.io/weather-vibe/',
          isImageComponent: true,
          componentName: 'CloudyDay3',
          size: '6',
        },
        {
          projectName: 'PractQuiz',
          projectBackTitle: 'Vue',
          projectBackDescription:
            'A Web Application that you can Practice your memory by taking a Quiz. Created using Vue and Open Tivia DB API.',
          projectNo: 'project-four',
          projectLink: 'https://narioalvin.github.io/vue-practquiz/',
          image: 'idea.svg',
          isImageComponent: false,
          imageWidth: '130',
          animationClass: 'hithere',
          size: '6',
        },
        {
          projectName: 'Multi-Step Form',
          projectBackTitle: 'Full Stack',
          projectBackDescription:
            'A Multi-Step Registration and Login Form template with complete user authentication and email verification free to use or download anytime. Created using Express for Back-End, MongoDB for Database, and Angular, Vue, React for Front-End.',
          projectNo: 'project-two',
          projectLink: 'https://narioalvin.github.io/vue-multi-step-form/#/',
          image: 'avatar.png',
          isImageComponent: false,
          imageWidth: '100',
          animationClass: 'bounce',
          size: '6',
        },
        {
          projectName: 'Cheez-Meez',
          projectBackTitle: 'Full Stack',
          projectBackDescription:
            ' A Real-Time Chat web application created using React, Node.js and Socket.io.',
          projectNo: 'project-three',
          projectLink: 'https://narioalvin.github.io/react-cheez-meez/',
          image: 'cheez-meez.svg',
          isImageComponent: false,
          imageWidth: '170',
          animationClass: 'swing',
          size: '6',
        },
      ],
      moreProjects: [
        {
          projectName: 'Send Free SMS',
          projectBackTitle: 'React',
          projectBackDescription: `A web application that you can send free SMS using Nexmo. Please use it responsibly because my subscription is free and I only have two-dollar credit. :P `,
          projectNo: 'project-five',
          projectLink: 'https://narioalvin.github.io/react-send-sms/',
          image: 'mail.svg',
          isImageComponent: false,
          imageWidth: '150',
          animationClass: 'bounce-in-right',
          size: '4',
        },
        {
          projectName: 'Dev Search',
          projectBackTitle: 'Vue',
          projectBackDescription: `A web application for Software Developers to search for jobs using GitHub Jobs API.`,
          projectNo: 'project-six',
          projectLink: 'https://narioalvin.github.io/vue-dev-search/',
          image: 'work.svg',
          isImageComponent: false,
          imageWidth: '100',
          animationClass: 'shake',
          size: '4',
        },
      ],
      loadMoreClicked: false
    };
  },
  methods: {
    flipProject() {
      //FOR CLICKING PROJECTS ON MOBILE
    },
    loadMore() {
      this.loadMoreClicked = true;
      this.moreProjects.forEach(project => {
        this.projects.push(project);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin projectBg($firstColor, $secondColor) {
  background-color: $firstColor !important;
  background-image: linear-gradient(
    315deg,
    $firstColor 0%,
    $secondColor 74%
  ) !important;
}

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
  @include projectBg(#e6c84f, #e8807f);
}

.project-two {
  @include projectBg(#8d5185, #a1bafe);
}

.project-three {
  @include projectBg(#d9e4f5, #f5e3e6);
}

.project-four {
  @include projectBg(#fff293, #ffe884);
}

.project-five {
  @include projectBg(#045de9, #09c6f9);
}

.project-six {
  @include projectBg(#a4508b, #5f0a87);
}

.project-icon {
  position: relative;
  top: 50px;
}

.project-cols .b-col {
  min-height: 50vh;
  padding: 0;
}

.flip {
  position: relative;
  transition: 4s;
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

.load-more {
  width: 150px;
  background: #d9d9d9;
  color: #202020;
  border: 0;
  font-size: 14px;
  margin-top: 30px;
  height: 40px;

  &:hover {
    background: #202020;
    color: #ffffff;
  }
}
</style>
