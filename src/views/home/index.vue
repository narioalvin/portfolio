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

    <div class="topnav">
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
    </div>

    <!-- <div id="menuArea">
        <input type="checkbox" id="menuToggle" />

        <label for="menuToggle" class="menuOpen">
          <div class="open"></div>
        </label>

        <div class="menu menuEffects">
          <label for="menuToggle"></label>
          <div class="menuContent">
            <ul>
              <li>
                <a href="#">MENU 1</a>
              </li>
              <li>
                <a href="#">MENU 2</a>
              </li>
              <li>
                <a href="#">MENU 3</a>
              </li>
              <li>
                <a href="#">MENU 4</a>
              </li>
            </ul>
          </div>
        </div>
    </div>-->

    <el-row style="padding: 100px">
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
    </el-row>
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
      nightMode: localStorage.getItem("nightMode") || false
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

h4 {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #1a1a1a;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h4 span {
  background: #fff;
  padding: 0 10px;
}

.el-menu-demo {
  border-bottom: none !important;
}

.me-img {
  width: 55px;
  border-radius: 50%;
  display: flex;
}

.dark-theme-nav {
  display: flex;
  justify-content: flex-end;
  padding: 8px;
}

.dark-theme-nav:focus {
  outline: none;
}

:root {
  --toggle-size: 35px;
  --switch-w: 70px;
  --switch-h: 35px;
  --switch-handle-scale: 0.65;
  --switch-off-handle-x: -0.125em;
  --switch-on-handle-x: calc(100% - 0.125em);
  --switch-transition-duration: 0.2s;
}

#page {
  background: #fefefe;
  color: #1a1a1a;
  // &.theme-dark {
  //   background: hsl(207, 30%, 5%);
  // }
}

#theme-toggle {
  display: none;

  & + label {
    font-size: var(--toggle-size);
    display: flex;
    height: var(--switch-h);
    width: var(--switch-w);
    border-radius: calc(var(--switch-h) / 2);
    background-size: auto 8em;
    background-position: bottom;
    background-image: linear-gradient(
      180deg,
      #021037 0%,
      #20206a 19%,
      #4184b1 66%,
      #62e7f7 100%
    );
    transition: var(--switch-transition-duration);
    border: 0.125em solid hsl(207, 30%, 95%);
    overflow: hidden;
    span {
      background: #fffad8;
      border-radius: 50%;
      height: var(--switch-h);
      width: var(--switch-h);
      transform: translateX(var(--switch-off-handle-x))
        scale(var(--switch-handle-scale));
      transition: var(--switch-transition-duration);
      cursor: pointer;
      box-shadow: 0 0 0.25em 0.0625em #fbee8d, 0 0 2em 0 #ffeb3b,
        inset -0.25em -0.25em 0 0 #fbee8e,
        inset -0.3125em -0.3125em 0 0.625em #fff5b2;
      margin-top: var(--switch-off-handle-x);
    }
  }

  &:checked {
    font-size: var(--switch-font-size);

    & + label {
      background-position: top;
      border-color: hsl(207, 30%, 50%);

      span {
        background: transparent;
        transform: translateX(var(--switch-on-handle-x))
          scale(var(--switch-handle-scale));
        box-shadow: inset -0.1875em -0.1875em 0 0 #fbe7ef,
          inset -0.5625em -0.5625em 0 0 #fffff7;
      }
    }
  }
}

/*-- Housekeeping --*/

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

#page {
  // min-height: 100vh;
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
  top: 8px;
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
  background: rgba(255, 135, 2, 0.9);
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
  font-family: Trebuchet MS;
  text-transform: uppercase;
  padding: 10px 0;
}

.menu ul li a:hover {
  color: #ff8702;
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
</style>