<template>
  <div>
    <div></div>
    <nav id="navbar" class="navbar navbar-expand-sm fixed-top">
      <div class="logo">
        <a href="#home"><img class="me" src="../assets/image/logo.png" /></a>
      </div>
      <div class="items">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="hamburger">
        <input type="checkbox" id="menuToggle" v-model="checkboxState" @change="checkboxClicked(checkboxState)" />

        <label for="menuToggle" class="menuOpen" >
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
      checkboxState: false
    };
  },
  methods: {
    handleScroll() {
      var currentScrollPos = window.pageYOffset;

      if (this.prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }

      // console.log(currentScrollPos, this.prevScrollpos)

      currentScrollPos > 100
        ? (document.getElementById("navbar").style.borderBottom =
            "1px solid #cccccc")
        : (document.getElementById("navbar").style.borderBottom = "none");

      this.prevScrollpos = currentScrollPos;
    },
    scrollingState(state) {
      // this.test != this.test;
      console.log(state);
      // document.body.style.overflow = "hidden";
    },
    check() {
      this.test = false;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  transition: top 0.3s;
  justify-content: space-between;
  align-items: center;
  z-index: 999999;
  height: 70px;
  background: #fcfcfc;
  padding: 0 15px 0 15px;
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