<template>
  <section id="projects" class="projects">
    <center v-if="loading || !ipInfo">
      <h3>Getting projects from database</h3>
      <div class="loader"></div>
    </center>
    <center v-else-if="error !== ''">{{ error }}</center>
    <div v-else>
      <div class="project-cols">
        <div v-for="(item, index) in projects" :key="index" class="width-6">
          <div class="flip" @click="flipProject">
            <div class="front" :class="item.projectNo">
              <h1 class="text-shadow white-text">{{ item.projectName }}</h1>
              <img
                v-if="!item.isImageComponent"
                :width="item.imageWidth"
                class="project-icon"
                :class="item.animationClass"
                :src="require(`../assets/images/${item.image}`)"
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
              <a :href="item.projectLink" target="_blank" class="mb-3">
                <button class="project-btn">
                  <img
                    class="chevron"
                    src="../assets/images/right-chevron.svg"
                    alt="right-chevron"
                    width="20"
                  />
                </button>
              </a>

              <div class="like-section">
                <img
                  v-if="item.likes.includes(ipInfo.ip)"
                  @click="likeProject(item, 'unlike', index)"
                  class="liked-heart"
                  src="../assets/images/liked-heart.svg"
                  alt="right-chevron"
                  width="20"
                />
                <img
                  v-else
                  @click="likeProject(item, 'like', index)"
                  class="liked-heart"
                  src="../assets/images/heart.svg"
                  alt="right-chevron"
                  width="20"
                />
                <span>{{ item.likes.length }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center v-if="!loading">
        <button v-if="!loadMoreClicked" @click="loadMore" class="primary-btn">
          More Projects
        </button>
      </center>
    </div>
  </section>
</template>

<script>
import CloudyDay from '@/assets/svg/CloudyDay.vue';
import ProjectService from '../service/ProjectService';
import axios from 'axios';

export default {
  name: 'Projects',
  components: {
    CloudyDay,
  },
  data() {
    return {
      projects: [],
      moreProjects: [],
      loadMoreClicked: false,
      ipInfo: JSON.parse(localStorage.getItem('ipInfo')) || null,
      ipDataKey: process.env.VUE_APP_IPDATAKEY,
      loading: true,
      error: '',
      index: 0,
      likedProject: null,
    };
  },
  created() {
    if (this.ipInfo === null) {
      this.getIpAddress();
    }
    this.getProjects();
  },
  methods: {
    getIpAddress() {
      axios
        .get(`https://ipinfo.io/json?token=${this.ipDataKey}`)
        .then((response) => {
          this.ipInfo = response.data;
          localStorage.setItem('ipInfo', JSON.stringify(this.ipInfo));
        })
        .catch((error) => {
          this.loading = false;
          this.error = error;
        });
    },
    getProjects() {
      ProjectService.getProjects()
        .then((response) => {
          const projects = response.data;

          if (this.index > 3) {
            this.projects = projects;
          } else {
            this.projects = projects.slice(0, 4);
            this.moreProjects = projects.slice(4, projects.length);
          }

          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.error = error;
        });
    },
    flipProject() {
      //FOR CLICKING PROJECTS ON MOBILE
    },
    loadMore() {
      this.loadMoreClicked = true;
      this.moreProjects.forEach((project) => {
        this.projects.push(project);
      });
    },
    likeProject(project, state, index) {
      this.index = index;

      const value = {
        projectId: project._id,
        ip: this.ipInfo.ip,
      };

      if (state === 'like') {
        this.likedProject = true;
        ProjectService.like(value).then(() => {
          this.getProjects();
        });
      } else {
        this.likedProject = false;
        ProjectService.unlike(value).then(() => {
          this.getProjects();
        });
      }
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
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

.width-4 .width-6 {
  width: 100%;
}

@media (min-width: 768px) {
  .project-cols div {
    float: left;
  }

  .width-4 {
    width: 33.33%;
  }

  .width-6 {
    width: 50%;
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

.project-eleven {
  @include projectBg(#ff995a, #ff6666);
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

    .like-section {
      display: flex;

      img {
        cursor: pointer;
        margin-right: 6px;

        &:hover {
          opacity: 0.9;
        }
      }

      span {
        font-size: 17px;
        font-weight: bold;
      }
    }
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

@media (max-width: 360px) {
  h1,
  h2 {
    font-size: 30px;
  }

  p {
    font-size: 13px !important;
  }
}
</style>
