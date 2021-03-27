<template>
  <div id="page">
    <section id="home" class="full-height">
      <Navbar />
      <Intro />
    </section>
    <About />
    <Project />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Intro from './Intro';
import About from './About';
import Project from './Project';
import Contact from './Contact';

export default {
  name: 'Home',
  components: {
    Navbar,
    Contact,
    Intro,
    About,
    Project,
    Footer,
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
</style>
