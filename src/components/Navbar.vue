<template>
  <b-navbar id="navbar" toggleable="lg">
    <b-navbar-brand href="#"
      ><img
        class="nav-logo navAnimation animated"
        data-delay="0s"
        src="../assets/image/logo.png"
    /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          @click="scrollToSection('about')"
          :class="{ 'navAnimation animated': innerWidth > 992 }"
          data-delay="0s"
          >ABOUT</b-nav-item
        >
        <b-nav-item
          @click="scrollToSection('projects')"
          class="navAnimation animated"
          data-delay=".3s"
          >PROJECTS</b-nav-item
        >
        <b-nav-item
          @click="scrollToSection('contact')"
          class="navAnimation animated"
          data-delay=".5s"
          >CONTACT</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
.navbar {
  background: #fcfcfc;
  color: #1a1a1a;
  padding: 10px 15px;
  font-weight: bold;

  .nav-logo {
    width: 45px;
  }

  a.nav-link:hover {
    opacity: 0.8;
  }
}
</style>
