<template>
  <div>
    <div></div>
    <nav id="navbar" class="navbar navbar-expand-sm fixed-top">
      <div class="logo navAnimation animated" data-delay="0s">
        <a href="#home">
          <img class="me" src="../assets/image/logo.png" />
        </a>
      </div>
      <div class="items">
        <ul>
          <li class="navAnimation animated" data-delay="0s">
            <a href="#about">About</a>
          </li>
          <li class="navAnimation animated" data-delay=".3s">
            <a href="#projects">Projects</a>
          </li>
          <li class="navAnimation animated" data-delay=".5s">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="hamburger">
        <input
          type="checkbox"
          class="navAnimation animated"
          data-delay="0s"
          id="menuToggle"
          @change="checkboxClicked($event)"
        />

        <label for="menuToggle" class="menuOpen">
          <div class="open"></div>
        </label>

        <div class="menu menuEffects">
          <label for="menuToggle"></label>
          <div class="menuContent">
            <ul>
              <li>
                <a href="#about" @click="check()">ABOUT</a>
              </li>
              <li>
                <a href="#projects">PROJECTS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      prevScrollpos: window.pageYOffset,
      checkboxState: false,
      newScrollPosition: 0,
      lastScrollPosition: 0
    };
  },
  methods: {
    handleScroll() {
      var navbar = document.getElementById("navbar");
      this.lastScrollPosition = window.scrollY;

      if (
        this.newScrollPosition < this.lastScrollPosition &&
        this.lastScrollPosition > 50
      ) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }

      this.newScrollPosition > 100
        ? navbar.classList.add("nav-border")
        : navbar.classList.remove("nav-border");
        
      this.newScrollPosition = this.lastScrollPosition;
    },
    checkboxClicked(e) {
      e.target.checked === true ?
      document.getElementsByTagName("body")[0].classList.add("scrollHidden")
      : document.getElementsByTagName("body")[0].classList.remove("scrollHidden")
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const items = document.querySelectorAll(".navAnimation");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `animDown .4s ${entry.target.dataset.delay} forwards ease-out`;
        }
      });
    });

    items.forEach(item => {
      observer.observe(item);
    });
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  transition: all 0.3s;
  justify-content: space-between;
  align-items: center;
  z-index: 999999;
  height: 70px;
  background: #fcfcfc;
  padding: 0 15px 0 15px;
}

.nav-border {
  border-bottom: 1px solid #cccccc !important;
}

.scrollHidden {
  overflow: hidden !important;
}

.items ul {
  padding: 0;
  list-style: none;
  margin: 0;
}

.items ul li {
  display: table-cell;
  position: relative;
}

.items ul li a {
  color: #1a1a1a;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  font-weight: 600;
  font-size: 14px;

  display: inline-block;
  padding: 15px 20px;
  position: relative;
}

.items ul li a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #1a1a1a;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.items ul li a:hover:after {
  width: 100%;
  left: 0;
}

.logo img {
  width: 45px;
}

.logo img:hover {
  opacity: 0.7;
  cursor: pointer;
}

@keyframes navbar {
  0% {
    bottom: 50px;
    opacity: 0;
  }
  100% {
    bottom: 0;
  }
}

input {
  display: none;
}

.open {
  background-color: #3c3c3c;
  width: 24px;
  height: 3px;
  display: block;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  top: 8px;
  z-index: 999999;
}

.open:before {
  content: "";
  background-color: #1a1a1a;
  width: 24px;
  height: 3px;
  display: block;
  border-radius: 2px;
  position: relative;
  top: -8px;
  transform: rotate(0deg);
  transition: all 0.3s ease;
}

.open:after {
  content: "";
  background-color: #1a1a1a;
  width: 24px;
  height: 3px;
  display: block;
  border-radius: 2px;
  position: relative;
  top: 4px;
  transform: rotate(0deg);
  transition: all 0.3s ease;
}

.menuOpen {
  width: 24px;
  height: 20px;
  display: block;
  cursor: pointer;
  float: right;
  margin-bottom: 0;
}

.menuOpen:hover .open:before {
  top: -9px;
}

.menuOpen:hover .open:after {
  top: 5px;
}

.menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  z-index: 99999;
}

.menu label {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  background-size: 100%;
  cursor: pointer;
}

.menu .menuContent {
  position: relative;
  top: 50%;
  font-size: 54px;
  text-align: center;
  padding-bottom: 20px;
  margin-top: -170px;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

.menu ul li a {
  display: block;
  color: white;
  text-decoration: none;
  transition: color 0.2s;
  text-transform: uppercase;
  padding: 10px 0;
}

.menu ul li a:hover {
  color: #202020;
}

.menu ul li:hover {
  background: white;
}

.menuEffects {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
}

.menuEffects ul {
  transform: translateY(0%);
  transition: all 0.5s;
}

#menuToggle:checked ~ .menuEffects {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s;
}

#menuToggle:checked ~ .menuEffects ul {
  opacity: 1;
}

#menuToggle:checked ~ .menuOpen .open {
  background-color: transparent;
}

#menuToggle:checked ~ .menuOpen .open:before {
  content: "";
  background-color: white;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

#menuToggle:checked ~ .menuOpen .open:after {
  content: "";
  background-color: white;
  transform: rotate(-45deg);
  position: relative;
  top: 0;
  right: 0;
  z-index: 1;
}

#menuToggle:not(:checked) ~ .menuEffects ul {
  transform: translateY(-30%);
}

.hamburger {
  display: none;
}

@media (min-width: 600px) {
  .navbar {
    height: 80px;
    padding: 0 40px 0 40px;
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: inline;
  }

  .items {
    display: none;
  }
}
</style>