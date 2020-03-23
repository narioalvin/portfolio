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
      <font-awesome-icon
        style="font-size: 30px; position: relative; top: 12px; left: 25px;"
        :icon="['fas', 'code']"
      />
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
                  <el-switch v-model="value1" active-color="#13ce66" active-text="Dark Mode"></el-switch>
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

    <div class="container" style="padding: 60px">
      <div class="section" style="min-width: 65%">
        <div class="column-one">
          <ul style="list-style-type:none; padding: 0; margin: 0;">
            <li class="left-icons">
              <a href="https://www.linkedin.com/in/alvin-nario-498a20193/" target="_blank" style="color: #1a1a1a">
                <font-awesome-icon
                  style="font-size: 25px; margin-bottom: 20px"
                  :icon="['fab', 'linkedin']"
                />
              </a>
            </li>
            <li class="left-icons">
              <a href="https://github.com/narioalvin" target="_blank" style="color: #1a1a1a">
                <font-awesome-icon
                  style="font-size: 25px; margin-bottom: 20px"
                  :icon="['fab', 'github']"
                />
              </a>
            </li>
            <li class="left-icons">
              <font-awesome-icon
                style="font-size: 20px; margin-bottom: 20px"
                :icon="['fas', 'phone']"
              />
            </li>
            <li class="left-icons">
              <font-awesome-icon style="font-size: 20px" :icon="['fas', 'envelope']" />
            </li>
          </ul>
        </div>
        <div class="column-two">
          <div class="divider"></div>
          <div class="grid-content bg-purple" style="text-align: center; width: 100%;">
            <h2 style="font-weight: bold; letter-spacing: 3px;">HELLO</h2>
            <h1 style="font-size: 55px; letter-spacing: 5px;">I'M ALVIN NARIO</h1>
            <div style="padding: 0 120px;">
              <h5 style="font-weight: 200; letter-spacing: 3px;">
                <span style="font-weight: bold">WEB DEVELOPER</span>
              </h5>
            </div>
            <div style="margin-bottom: 20px">
              <a class="download-btn" :href="`${publicPath}resume.pdf`" download>DOWNLOAD CV</a>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
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
.download-btn {
  position: relative;
  background: #1a1a1a;
  color: #fefefe;
  font-size: 12px;
  text-decoration: none;
  padding: 12px 33px;
  border-radius: 20px;
  border: 1px solid #1a1a1a;
  font-weight: bold;
  top: 30px;
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

.divider {
  width: 2px;
  margin: 60px 0;
  background: #1a1a1a;
}

.container {
  display: flex;
}

.section {
  flex: 1; /*grow*/
  // border: 1px solid;
  min-height: 70vh;
}

.column-one {
  float: left;
  width: 15%;
  padding: 10px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.column-two {
  float: left;
  width: 100;
  padding: 10px;
  height: 300px;
  display: flex;
  width: 85%;
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

h5 {
  text-align: center;
  border-bottom: 1px solid #1a1a1a;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h5 span {
  background: #fff;
  padding: 0 10px;
  font-size: 13px;
}

.el-menu-demo {
  border-bottom: none !important;
}

.me-img {
  width: 55px;
  border-radius: 50%;
  display: flex;
}

// .dark-theme-nav {
//   display: flex;
//   justify-content: flex-end;
//   padding: 8px;
// }

// .dark-theme-nav:focus {
//   outline: none;
// }

// :root {
//   --toggle-size: 35px;
//   --switch-w: 70px;
//   --switch-h: 35px;
//   --switch-handle-scale: 0.65;
//   --switch-off-handle-x: -0.125em;
//   --switch-on-handle-x: calc(100% - 0.125em);
//   --switch-transition-duration: 0.2s;
// }

#page {
  background: #fefefe;
  color: #1a1a1a;
  // &.theme-dark {
  //   background: hsl(207, 30%, 5%);
  // }
}

// #theme-toggle {
//   display: none;

//   & + label {
//     font-size: var(--toggle-size);
//     display: flex;
//     height: var(--switch-h);
//     width: var(--switch-w);
//     border-radius: calc(var(--switch-h) / 2);
//     background-size: auto 8em;
//     background-position: bottom;
//     background-image: linear-gradient(
//       180deg,
//       #021037 0%,
//       #20206a 19%,
//       #4184b1 66%,
//       #62e7f7 100%
//     );
//     transition: var(--switch-transition-duration);
//     border: 0.125em solid hsl(207, 30%, 95%);
//     overflow: hidden;
//     span {
//       background: #fffad8;
//       border-radius: 50%;
//       height: var(--switch-h);
//       width: var(--switch-h);
//       transform: translateX(var(--switch-off-handle-x))
//         scale(var(--switch-handle-scale));
//       transition: var(--switch-transition-duration);
//       cursor: pointer;
//       box-shadow: 0 0 0.25em 0.0625em #fbee8d, 0 0 2em 0 #ffeb3b,
//         inset -0.25em -0.25em 0 0 #fbee8e,
//         inset -0.3125em -0.3125em 0 0.625em #fff5b2;
//       margin-top: var(--switch-off-handle-x);
//     }
//   }

//   &:checked {
//     font-size: var(--switch-font-size);

//     & + label {
//       background-position: top;
//       border-color: hsl(207, 30%, 50%);

//       span {
//         background: transparent;
//         transform: translateX(var(--switch-on-handle-x))
//           scale(var(--switch-handle-scale));
//         box-shadow: inset -0.1875em -0.1875em 0 0 #fbe7ef,
//           inset -0.5625em -0.5625em 0 0 #fffff7;
//       }
//     }
//   }
// }

// /*-- Housekeeping --*/

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

// #page {
//   // min-height: 100vh;
// }

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
  right: 50px;
  z-index: 9999;
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
  background: #fefefe;
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
  backdrop-filter: blur(12px);
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 999;
}

.menuEffects ul {
  transform: translateY(0%);
  transition: all 0.5s;
}

#menuToggle:checked ~ .menuEffects {
  opacity: 0.9;
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
</style>