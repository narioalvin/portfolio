<template>
  <div id="page">
    <Navbar />
      <div class="page-body">
        <div class="page-content">
          <div class="info">
            <div class="info-content">
              <h1 class="name">Alvin Nario</h1>
              <span class="job">Software Web Developer</span>
              <br />
              <span class="place">Makati City Philippines</span>
            </div>
          </div>
          <div class="info-img">
            <img class="me" src="../../assets/image/me.jpg" />
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <ul class="brand-list" style="list-style-type:none; padding: 0">
            <li>
              <font-awesome-icon class="brand-icon" :icon="['fab', 'instagram']" />
            </li>
            <li>
              <font-awesome-icon class="brand-icon" :icon="['fab', 'dribbble']" />
            </li>
            <li>
              <font-awesome-icon class="brand-icon" :icon="['fab', 'behance']" />
            </li>
            <li>
              <font-awesome-icon class="brand-icon" :icon="['fab', 'linkedin-in']" />
            </li>
            <li style="margin-bottom: 0">
              <font-awesome-icon class="brand-icon" :icon="['fab', 'github']" />
            </li>
          </ul>
        </div>
        <div>
          <font-awesome-icon class="arrow-down" :icon="['fas', 'angle-down']" />
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  components: { Navbar },
  methods: {}
};
</script>

<style lang="scss" scoped>
#page {
  overflow: hidden;
}

.page-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  position: relative;
  top: 30px;
}

.page-content {
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
  padding: 0 15px;
  align-items: flex-end;
  position: relative;
  animation-name: bottom;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

.brand-list li {
  margin-bottom: 10px;
}

.brand-icon {
  font-size: 15px;
}

.info {
  position: relative;
  width: 250px;
  z-index: 9999;
  top: 45%;
  animation: infoAnimation 0s 1s forwards;
  animation-duration: 0.7s;
  opacity: 0;
}

.info-content {
  position: relative;
  left: 115px;
}

.info-img {
  position: relative;
  animation: imgAnimation 0s 1s forwards;
  animation-duration: 0.7s;
  opacity: 0;
}

.arrow-down {
  font-size: 22px;
  position: relative;
  bottom: 10px;
  animation: arrowAnimation 1.5s infinite;
}

@media (min-width: 360px) {
  .me {
    width: 360px;
    left: 50px;
  }

  .name {
    font-size: 45px;
  }

  .info {
    width: 280px;
  }

  .info-content {
    position: relative;
    left: 140px;
    top: 20px;
  }

  .page-body {
    height: 66vh;
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
    margin-right: 25px;
  }

  .page-body {
    height: 87vh;
    top: 0;
  }

  .me {
    left: -50px;
    width: 280px;
  }

  .info-content {
    left: 40px;
    top: 40px;
  }
}

@media (min-width: 600px) {
  .brand-list li .brand-icon {
    font-size: 20px;
  }
}

@media (min-width: 768px) {
  .info-content {
    left: 35px;
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

@keyframes arrowAnimation {
  0% {
    bottom: 50px;
  }
  100% {
    bottom: 10px;
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