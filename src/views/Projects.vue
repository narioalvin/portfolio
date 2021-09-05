<template>
  <section id="projects" class="projects">
    <center v-if="loading || !ipInfo">
      <div class="font-weight-bold mb-3">
        <h6>
          Getting projects from database
        </h6>
      </div>
      <b-spinner></b-spinner>
    </center>
    <center v-else-if="error !== ''">{{ error }}</center>
    <div v-else>
      <b-row class="project-cols">
        <b-col
          class="b-col"
          cols="12"
          v-for="(item, index) in projects"
          :key="index"
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
              <a :href="item.projectLink" target="_blank" class="mb-3">
                <button class="project-btn">
                  <font-awesome-icon
                    class="chevron"
                    :icon="['fas', 'chevron-right']"
                  />
                </button>
              </a>

              <div class="like-section">
                <font-awesome-icon
                  v-if="item.likes.includes(ipInfo.ip)"
                  @click="likeProject(item, 'unlike', index)"
                  class="liked-heart mr-2"
                  :icon="['fas', 'heart']"
                />

                <font-awesome-icon
                  v-else
                  @click="likeProject(item, 'like', index)"
                  class="unlike-heart mr-2"
                  :icon="['far', 'heart']"
                />
                <span>{{ item.likes.length }}</span>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <center v-if="!loading">
        <button
          v-if="!loadMoreClicked"
          @click="loadMore"
          class="primary-btn"
        >More Projects</button>
      </center>
    </div>
    <b-modal
      ref="like-modal"
      id="modal-center"
      size="sm"
      hide-footer
      hide-header
      centered
    >
      <div v-if="likedProject">
        <center>
          <h6 class="my-4">
            Appreciate it!
            <font-awesome-icon class="heart ml-1" :icon="['fas', 'heart']" />
          </h6>
        </center>
      </div>
      <div v-else>
        <center>
          <h6 class="my-4">
            I'll keep on improving!
            <font-awesome-icon class="smiley ml-1" :icon="['far', 'smile']" />
          </h6>
        </center>
      </div>
    </b-modal>
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

      this.$refs['like-modal'].show();

      setTimeout(() => {
        this.$refs['like-modal'].hide();
      }, 2500);
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

.project-eleven {
  @include projectBg(#FF995A, #ff6666) ;
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

    .like-section {
      svg {
        font-size: 22px;
        cursor: pointer;

        &:hover {
          opacity: 0.9;
        }
      }

      .liked-heart {
        color: #e8505b;
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
