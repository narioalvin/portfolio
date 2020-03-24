<template>
  <div id="page" v-bind:class="{ 'theme-dark' : nightMode }">
    <!-- <el-menu class="el-menu-demo" mode="horizontal" style="z-index: 999999;">
      <el-menu-item style="border-bottom: none">
       <font-awesome-icon style="font-size: 25px; color: #1a1a1a" :icon="['fas', 'code']" />
      </el-menu-item>
      <div class="dark-theme-nav">
        <input type="checkbox" id="theme-toggle" v-model="nightMode" @change="darkThemeClick" />
        <label for="theme-toggle">
          <span></span>
        </label>
      </div>  

    </el-menu>-->

    <!-- <div class="topnav">
      <font-awesome-icon
        style="font-size: 30px; position: relative; top: 12px; left: 25px;"
        :icon="['fas', 'code']"
      />
      <div class="topnav-right">
        <div class="topnav-items">
          <font-awesome-icon
            style="font-size: 35px; margin-right: 15px"
            :icon="['fas', 'language']"
          />
          <i style="font-size: 35px;" class="el-icon-sunny"></i>
        </div>
      </div>
    </div>-->

    <div class="topnav">
      <font-awesome-icon class="logo" :icon="['fas', 'code']" />
      <div id="menuArea">
        <input type="checkbox" id="menuToggle" />

        <label for="menuToggle" class="menuOpen">
          <div class="open"></div>
        </label>

        <div class="menu menuEffects">
          <label for="menuToggle"></label>
          <div class="menuContent">
            <div style="display: inline-block; text-align: left;">
              <ul>
                <li class="nav-items">
                  <el-switch
                    style="border-color: 1px solid #cccccc"
                    v-model="value1"
                    active-color="#13ce66"
                    active-text="Dark Mode"
                  ></el-switch>
                </li>
                <li class="nav-items">
                  <font-awesome-icon style="font-size: 33px" :icon="['fas', 'language']" />

                  <el-dropdown trigger="click">
                    <span
                      style="position: relative; bottom: 6px; left: 10px;"
                      class="text-secondary"
                    >Language</span>

                    <el-dropdown-menu slot="dropdown">
                      <span v-for="(lang, index) in languages" :key="index">
                        <el-dropdown-item>{{ lang }}</el-dropdown-item>
                      </span>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
                <li class="nav-items">
                  <font-awesome-icon style="font-size: 33px" :icon="['fas', 'palette']" />
                  <el-popover placement="bottom" width="218" trigger="click">
                    <div>
                      <span v-for="(color, index) in colorPalette" :key="index">
                        <el-button
                          class="color-btn"
                          :style="{background: color, border: '1px solid' + color}"
                          circle
                        ></el-button>
                      </span>
                    </div>
                    <span
                      slot="reference"
                      style="position: relative; bottom: 6px; left: 18px;"
                      class="text-secondary"
                    >Choose Color</span>
                  </el-popover>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <el-row style="padding: 100px">
      <el-col :span="12">
        <div class="grid-content bg-purple" style="text-align: center">
          <h2 style="font-weight: 400;">HELLO</h2>
          <h1 style="font-size: 50px;">I'M ALVIN NARIO</h1>
          <h4 style="font-weight: 200">
            <span>WEB DEVELOPER</span>
          </h4>
          <el-button
            round
            style="margin-top: 20px; background: #1a1a1a; color: #FEFEFE; font-size: 12px; min-width: 200px"
          >DOWNLOAD CV</el-button>
        </div>
        <div class="links" style="position: relative; top: 40px; text-align: center">
          <font-awesome-icon
            style="font-size: 25px; margin-right: 30px"
            :icon="['fab', 'instagram']"
          />
          <font-awesome-icon style="font-size: 25px" :icon="['fab', 'linkedin']" />
        </div>
      </el-col>
      <el-col :span="12" style="text-align: center">
        <div class="grid-content bg-purple-light">
          <img style="width: 300px; border-radius: 50%;" src="../../assets/image/me-toga.jpeg" />
        </div>
      </el-col>
    </el-row>-->

    <div class="container">
      <div class="section" style="min-width: 65%">
        <div class="column-one">
          <ul style="list-style-type:none; padding: 0; margin: 0;">
            <li class="left-icons">
              <a
                href="https://www.linkedin.com/in/alvin-nario-498a20193/"
                target="_blank"
                style="color: #1a1a1a"
              >
                <font-awesome-icon class="brand-icons" :icon="['fab', 'linkedin']" />
              </a>
            </li>
            <li class="left-icons">
              <a href="https://github.com/narioalvin" target="_blank" style="color: #1a1a1a">
                <font-awesome-icon class="brand-icons" :icon="['fab', 'github']" />
              </a>
            </li>
            <li class="left-icons">
              <font-awesome-icon class="solid-icons" :icon="['fas', 'phone']" />
            </li>
            <li class="left-icons">
              <font-awesome-icon
                style="margin-bottom: 0"
                class="solid-icons"
                :icon="['fas', 'envelope']"
              />
            </li>
          </ul>
        </div>
        <div class="column-two">
          <!-- <div class="divider"></div> -->
          <div class="grid-content bg-purple" style="width: 100%;">
            <img class="me-toga-mobile" src="../../assets/image/me-toga.jpeg" />
            <span>
              <h1 class="intro-text">ALVIN NARIO</h1>
            </span>
            <span>
              <h5 class="web-text">WEB DEVELOPER</h5>
            </span>
            <!-- <div class="mobile-icons">
              <span>
                <a
                  href="https://www.linkedin.com/in/alvin-nario-498a20193/"
                  target="_blank"
                  style="color: #1a1a1a"
                >
                  <font-awesome-icon
                    style="font-size: 20px; margin-right: 15px"
                    :icon="['fab', 'linkedin']"
                  />
                </a>
              </span>
              <span>
                <a href="https://github.com/narioalvin" target="_blank" style="color: #1a1a1a">
                  <font-awesome-icon
                    style="font-size: 20px; margin-right: 15px"
                    :icon="['fab', 'github']"
                  />
                </a>
              </span>
              <span>
                <font-awesome-icon
                  style="font-size: 15px; margin-right: 15px"
                  :icon="['fas', 'phone']"
                />
              </span>
              <span>
                <font-awesome-icon
                  style="font-size: 15px;"
                  :icon="['fas', 'envelope']"
                />
              </span>
            </div>-->
            <div style="margin-top: 30px;">
              <el-button icon="el-icon-upload" class="download-btn">DOWNLOAD CV</el-button>
              <!-- <a class="download-btn" :href="`${publicPath}resume.pdf`" download>DOWNLOAD CV</a> -->
            </div>
          </div>
        </div>
      </div>

      <div class="section me-toga-desktop">
        <div style="margin-bottom: 15px">
          <img style="width: 270px; border-radius: 50%;" src="../../assets/image/me-toga.jpeg" />
        </div>
        <!-- <div style="position: relative; left: 30px;">
          <ul style="list-style-type:none; padding: 0; margin: 0;">
            <li style="margin-bottom: 10px;">
              <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'phone']" />
              <span
                class="text-secondary"
                style="margin-left: 10px; font-size: 14px;"
              >+639 05 232 2714</span>
            </li>
            <li>
              <font-awesome-icon style="font-size: 20px" :icon="['fas', 'envelope']" />
              <span
                class="text-secondary"
                style="margin-left: 10px; font-size: 14px;"
              >narioalvin94@gmail.com</span>
            </li>
          </ul>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  watch: {
    nightMode: function() {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    }
  },
  data() {
    return {
      activeIndex: "1",
      value1: false,
      nightMode: localStorage.getItem("nightMode") || false,
      colorPalette: [
        "#a35061",
        "#3ac6c6",
        "#ccccff",
        "#93b0b6",
        "#ffe3c0",
        "#856e6e",
        "#fdca00",
        "#dd7856"
      ],
      languages: ["English", "German", "French"],
      publicPath: process.env.BASE_URL
    };
  },
  created() {
    console.log(this.nightMode);
  },
  methods: {
    darkThemeClick() {
      if (this.nightMode) {
        document.querySelectorAll("ul").forEach(el => {
          el.style.background = "hsl(207, 30%, 5%)";
        });
      } else {
        document.querySelectorAll("ul").forEach(el => {
          el.style.background = "#ffffff";
        });
      }
    }
  }
};
</script>

<style lang="scss">
*:focus {
  outline: none;
}
.left-icons:hover,
.download-btn:hover,
.nav-items:hover,
.color-btn:hover {
  opacity: 0.8;
  cursor: pointer;
}
.color-btn {
  padding: 20px !important;
  margin: 0 6px 10px 0 !important;
}

.el-switch__label.is-active {
  color: #535343 !important;
}

.el-switch__label * {
  font-family: "Avenir", sans-serif !important;
  color: #535343 !important;
  font-weight: bold !important;
  font-size: 13px !important;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.container {
  display: flex;
}

.section {
  flex: 1;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

@media (max-width: 768px) {
  /*breakpoint*/
  .container {
    flex-direction: column;
  }
}

.topnav {
  overflow: hidden;
}

.topnav-items {
  float: left;
  text-align: center;
  padding: 12px 25px;
  text-decoration: none;
}

.topnav-right {
  float: right;
}

.el-menu-demo {
  border-bottom: none !important;
}

.me-img {
  width: 55px;
  border-radius: 50%;
  display: flex;
}

#page {
  background: #fefefe;
  color: #262626;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

* {
  transition: 0.2s ease;
}

/* header */
input {
  display: none;
}

.open {
  background-color: #3c3c3c;
  width: 24px;
  height: 4px;
  display: block;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  top: -20px;
}

.open:before {
  content: "";
  background-color: #3c3c3c;
  width: 24px;
  height: 4px;
  display: block;
  border-radius: 2px;
  position: relative;
  top: -8px;
  transform: rotate(0deg);
  transition: all 0.3s ease;
}

.open:after {
  content: "";
  background-color: #3c3c3c;
  width: 24px;
  height: 4px;
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
  padding: 15px;
  cursor: pointer;
  float: right;
  position: relative;
  right: 30px;
  z-index: 9999;
  top: 8px;
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
  background: rgba(255, 255, 255, 0.5);
}

.menu label {
  background-size: 100%;
  cursor: pointer;
}

.menu .menuContent {
  position: relative;
  top: 50%;
  text-align: center;
  padding-bottom: 20px;
  margin-top: -100px;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

.menu ul li {
  transition: color 0.2s;
  padding: 10px 0;
}

.menuEffects {
  opacity: 0;
  backdrop-filter: saturate(180%) blur(45px);
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 999;
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
  opacity: 0.9;
}

#menuToggle:checked ~ .menuOpen .open {
  background-color: transparent;
}

#menuToggle:checked ~ .menuOpen .open:before {
  content: "";
  background-color: #1a1a1a;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

#menuToggle:checked ~ .menuOpen .open:after {
  content: "";
  background-color: #1a1a1a;
  transform: rotate(-45deg);
  position: relative;
  top: 0;
  right: 0;
  z-index: 1;
}

#menuToggle:not(:checked) ~ .menuEffects ul {
  transform: translateY(-30%);
}

// RESPONSIVENESS

.container {
  padding: 0;
}

.column-one {
  float: left;
  width: 12%;
  // padding: 10px;
  // height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.column-two {
  // display: flex;
  // align-items: center;
  float: left;
  width: 100;
  // padding: 10px;
  // height: 85vh;
  display: flex;
  width: 88%;
  padding-left: 30px;
}

.section {
  display: flex;
  align-items: center;
  height: 75vh;
}

.hello-txt {
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 15px;
}

.divider {
  width: 1px;
  margin: 60px 0;
  background: #1a1a1a;
  display: none;
}

.intro-text {
  font-size: 22px;
  letter-spacing: 3px;
}

.web-text {
  font-size: 11px;
  margin: 0;
}

.download-btn {
  min-width: 200px;
  border-radius: 20px !important;
  border: 1px solid#1a1a1a !important;
  background: #1a1a1a !important;
  font-size: 11px !important;
  color: #fefefe !important;
}

// .download-btn {
//   position: relative;
//   background: #1a1a1a;
//   color: #fefefe;
//   font-size: 9px;
//   text-decoration: none;
//   padding: 12px 28px;
//   border-radius: 20px;
//   border: 1px solid #1a1a1a;
//   top: 30px;
// }

.logo {
  position: relative;
  font-size: 25px;
  top: 14px;
  left: 14px;
}

.brand-icons {
  font-size: 17px;
  margin-bottom: 35px;
}

.solid-icons {
  font-size: 13px;
  margin-bottom: 40px;
}

.me-toga-desktop {
  display: none;
}

@media (min-width: 360px) {
  .column-two {
    text-align: center;
    padding-left: 0;
  }
}

@media (min-width: 480px) {
  .container {
    padding: 0 50px;
  }
}

@media (min-width: 600px) {
  .column-one {
    width: 15%;
    padding: 10px;
  }

  .column-two {
    width: 82%;
  }

  // .divider {
  //   display: block;
  // }

  .brand-icons {
    font-size: 25px;
    margin-bottom: 65px;
  }

  .solid-icons {
    font-size: 20px;
    margin-bottom: 65px;
  }

  .intro-text {
    font-size: 40px;
  }
  // .container {
  //   padding: 60px;
  // }

  .hello-txt {
    font-size: 20px;
  }

  .web-text {
    font-size: 13px;
  }

  .logo {
    font-size: 30px;
    top: 12px;
    left: 25px;
  }
}

.me-toga-mobile {
  width: 200px;
  border-radius: 50%;
  display: inline-block;
}

@media (min-width: 768px) {
  .column-two {
    width: 75%;
  }

  .download-btn {
    font-size: 12px;
    text-decoration: none;
    padding: 12px 33px;
  }

  .menuOpen {
    right: 50px;
    z-index: 9999;
  }
}

@media (min-width: 1024px) {
  .me-toga-mobile {
    display: none;
  }

  .me-toga-desktop {
    display: flex;
  }

  .intro-text {
    font-size: 55px;
  }

  // .web-text {
  //   fontsi
  // }
}
</style>