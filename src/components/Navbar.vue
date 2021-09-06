<template>
  <div class="nav">
    <input type="checkbox" id="nav-check" />
    <div class="nav-header">
      <div class="nav-title">
        <img
          class="nav-logo navAnimation animated"
          alt="logo"
          data-delay="0s"
          src="../assets/images/logo.png"
          width="50"
        />
      </div>
    </div>

    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <ul class="nav-items">
        <li
          @click="scrollToSection('about')"
          :class="{ 'navAnimation animated': innerWidth > 992 }"
          data-delay="0s"
        >
          ABOUT
        </li>
        <li
          @click="scrollToSection('projects')"
          class="navAnimation animated"
          data-delay=".3s"
        >
          PROJECTS
        </li>
        <li
          @click="scrollToSection('contact')"
          class="navAnimation animated"
          data-delay=".5s"
        >
          CONTACT
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      innerWidth: 0,
    };
  },
  created() {
    this.innerWidth = window.innerWidth;
  },
  mounted() {
    const items = document.querySelectorAll('.navAnimation');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `animDown .4s ${entry.target.dataset.delay} forwards ease-out`;
        }
      });
    });

    items.forEach((item) => {
      observer.observe(item);
    });
  },
  methods: {
    scrollToSection(section) {
      var elmntToView = document.getElementById(section);
      elmntToView.scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav .nav-links {
  display: flex;

  ul {
    display: flex;
    align-items: center;
    li {
      display: inline;
      margin: 0 15px;
      font-weight: bold;
      cursor: pointer;
      list-style: none;

      &:hover {
        opacity: 0.8 !important;
      }
    }
  }
}

.nav #nav-check {
  display: none;
}

@media (max-width: 600px) {
  .nav .nav-btn {
    display: flex;
    align-items: center;
  }
  .nav .nav-btn label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }

  .nav .nav-btn label span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #333;
  }
  .nav .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 70px;
    left: 0px;
    z-index: 9999;
  }

  .nav .nav-links ul {
    align-items: flex-start;
    flex-direction: column;

    li {
      margin-top: 10px;
    }
  }

  .nav #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav #nav-check:checked ~ .nav-links {
    height: 100px;
    overflow-y: auto;
  }
}
</style>
