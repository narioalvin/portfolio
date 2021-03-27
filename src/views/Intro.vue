<template>
  <div class="p-40">
    <div class="flex intro">
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
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style lang="scss" scoped>
.intro {
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

  .intro {
    height: 65vh;
  }

  .brand-icon {
    font-size: 18px;
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

  .intro {
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
}

@media screen and (min-width: 600px) and (orientation: portrait) {
  .brand-list li .brand-icon {
    font-size: 20px;
  }

  .p-40 {
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
}
</style>
