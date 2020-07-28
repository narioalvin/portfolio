<template>
  <div id="page">
    <section id="home" class="full-height">
      <Navbar />
      <div class="p-40">
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
                <div
                  class="animated"
                  data-animationtype="left"
                  data-delay=".4s"
                >
                  <span class="job">Software Web Developer</span>
                </div>
                <div
                  class="animated"
                  data-animationtype="left"
                  data-delay=".5s"
                >
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
            <font-awesome-icon
              class="arrow-down"
              :icon="['fas', 'angle-down']"
            />
          </div>
        </div>
      </div>
    </section>
    <About />
    <Project />
    <Contact />
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
          <a href="https://github.com/narioalvin" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/narioalvin" target="_blank">
            <font-awesome-icon :icon="['fab', 'dribbble']" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/narioalvin" target="_blank">
            <font-awesome-icon :icon="['fab', 'behance']" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alvin-nario-498a20193"
            target="_blank"
          >
            <font-awesome-icon
              class="contact-icon"
              :icon="['fab', 'linkedin-in']"
            />
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import About from './About';
import Project from './Project';
import Contact from './Contact';

export default {
  name: 'Home',
  components: {
    Navbar,
    Contact,
    About,
    Project,
  },
  data() {
    return {
      showLandingPage: false,
      showAboutPage: false,
      showProjectsPage: false,
      showContactPage: false,
      innerWidth: window.innerWidth,
    };
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

.home {
  height: 64vh;
}

.section-content {
  width: 653px;
  display: flex;
  align-items: center;
  justify-content: center;

  .name {
    margin: 0;
    font-weight: bold;
  }
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

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

  .brand-list li {
    margin-bottom: 15px;

    a:hover {
      opacity: 0.8;
    }

    .brand-icon {
      font-size: 20px;
      color: #1a1a1a;
    }
  }
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

  span {
    font-size: 11px;
  }

  ul {
    margin: 0;
  }

  .links {
    list-style-type: none;
    padding: 0;

    li {
      display: inline;
      margin-right: 12px;
      font-size: 14px;

      a {
        color: #202020;

        &:hover {
          opacity: 0.8;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
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
    height: 65vh;
  }

  .brand-icon {
    font-size: 18px;
  }

  footer {
    span {
      font-size: 15px;
    }

    .links li {
      font-size: 20px;
    }
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
    height: 83vh;
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

  footer .links li {
    margin-right: 20px;
  }
}

@media screen and (min-width: 600px) and (orientation: portrait) {
  .brand-list li .brand-icon {
    font-size: 20px;
  }

  .p-40 {
    padding: 0 40px;
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

  footer .links li {
    margin-right: 35px;
  }
}
</style>
