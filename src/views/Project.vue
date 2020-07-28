<template>
  <section id="projects" class="projects">
    <div class="animated" data-animationtype="up" data-delay=".3s">
      <b-row class="project-cols">
        <b-col
          class="b-col"
          cols="12"
          v-for="item in projects"
          :key="item.projectName"
          :lg="item.size"
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
    <center class="animated" data-animationtype="up" data-delay=".4s">
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
            'A colorful and accurate Weather Web Application with dynamic background and a relaxing music to enjoy the viewing experience. Created using Vue for Front-End and multiple free Public APIs to get the exact location and weather.',
          projectNo: 'project-one',
          projectLink: 'https://narioalvin.github.io/weather-vibe/',
          isImageComponent: true,
          componentName: 'CloudyDay3',
          size: '6',
        },
        {
          projectName: 'Personal Expense Tracker',
          projectBackTitle: 'Full Stack',
          projectBackDescription:
            'A Personal Expense Tracker Web Application that allows you to monitor your spending pattern. Created using Vue for Front-End, Node.js for Back-End, and MongoDB for Database.',
          projectNo: 'project-two',
          projectLink:
            'https://narioalvin.github.io/vue-personal-expense-tracker/',
          image: 'expense-tracker.svg',
          isImageComponent: false,
          imageWidth: '100',
          animationClass: 'bounce',
          size: '6',
        },
        {
          projectName: 'CheezMeez',
          projectBackTitle: 'Full Stack',
          projectBackDescription:
            'A Real-Time Chat Web Application created using React for Front-End, Node.js and Socket.io for Back-End.',
          projectNo: 'project-three',
          projectLink: 'https://narioalvin.github.io/react-cheez-meez/',
          image: 'chat.svg',
          isImageComponent: false,
          imageWidth: '100',
          animationClass: 'swing',
          size: '6',
        },
        {
          projectName: 'PractQuiz',
          projectBackTitle: 'Vue',
          projectBackDescription:
            'A Web Application Trivia Game that you can Practice your memory by taking a Quiz. Created using Vue and Open Trivia DB API.',
          projectNo: 'project-four',
          projectLink: 'https://narioalvin.github.io/vue-practquiz/',
          image: 'idea.svg',
          isImageComponent: false,
          imageWidth: '130',
          animationClass: 'hithere',
          size: '6',
        },
      ],
      moreProjects: [
        {
          projectName: 'Send Free SMS',
          projectBackTitle: 'Full Stack',
          projectBackDescription: `A simple Web Application that you can send free SMS using React for Front-End, Node.js for Back-End, and Nexmo API. Please use it responsibly because my subscription is free and I only have two-dollar credit. :P `,
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
          projectBackDescription:
            'A Web Application for Software Developers to search for jobs using GitHub Jobs API.',
          projectNo: 'project-six',
          projectLink: 'https://narioalvin.github.io/vue-dev-search/',
          image: 'work.svg',
          isImageComponent: false,
          imageWidth: '100',
          animationClass: 'shake',
          size: '4',
        },
        {
          projectName: 'Holidays',
          projectBackTitle: 'Vue',
          projectBackDescription:
            'A Web Application for past, current, and future holidays with over 230 countries, 3,300+ states and 100+ languages using Calendarific API.',
          projectNo: 'project-seven',
          projectLink: 'https://narioalvin.github.io/vue-holidays/',
          image: 'calendar.svg',
          isImageComponent: false,
          imageWidth: '100',
          animationClass: 'bounce',
          size: '4',
        },
        {
          projectName: 'The Daily News',
          projectBackTitle: 'Vue',
          projectBackDescription:
            'A Web Application that collects the news in your country from various sources using Currents API.',
          projectNo: 'project-eight',
          projectLink: 'https://narioalvin.github.io/vue-the-daily-news/',
          image: 'news-white.svg',
          isImageComponent: false,
          imageWidth: '100',
          animationClass: 'swing',
          size: '4',
        },
        {
          projectName: 'Recipes',
          projectBackTitle: 'Vue',
          projectBackDescription:
            'A Web Application with lots of recipes to choose from using Edamam API.',
          projectNo: 'project-nine',
          projectLink: 'https://narioalvin.github.io/vue-recipes/',
          image: 'recipe.svg',
          isImageComponent: false,
          imageWidth: '100',
          animationClass: 'hithere',
          size: '4',
        },
        {
          projectName: 'Multi-Step Form',
          projectBackTitle: 'Full Stack',
          projectBackDescription:
            'A Multi-Step Registration and Login Form template with complete user authentication and email verification free to use or download anytime. Created using Express for Back-End, MongoDB for Database, and Angular, Vue, React for Front-End.',
          projectNo: 'project-ten',
          projectLink: 'https://narioalvin.github.io/vue-multi-step-form/#/',
          image: 'avatar.png',
          isImageComponent: false,
          imageWidth: '100',
          animationClass: 'gelatine',
          size: '4',
        },
      ],
      loadMoreClicked: false,
    };
  },
  methods: {
    flipProject() {
      //FOR CLICKING PROJECTS ON MOBILE
    },
    loadMore() {
      this.loadMoreClicked = true;
      this.moreProjects.forEach((project) => {
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

.projects {
  position: relative;
  top: 40px;
  margin-bottom: 40px;
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
  @include projectBg(#fc5296, #f67062);
}

.project-three {
  @include projectBg(#4d4c7d, #363062);
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

.project-seven {
  @include projectBg(#d19592, #c81f70);
}

.project-eight {
  @include projectBg(#39375b, #383e56);
}

.project-nine {
  @include projectBg(#feb618, #febe34);
}

.project-ten {
  @include projectBg(#8d5185, #a1bafe);
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: inherit;
    padding: 1em 2em;
    height: 50vh;
    min-height: 300px;
    background-color: #f6f6f6;
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

@media (max-width: 360px) {
  h1,
  h2 {
    font-size: 30px;
  }
}
</style>
