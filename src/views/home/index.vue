<template>
  <div id="page" v-bind:class="{ 'theme-dark' : nightMode }">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">
        <img class="me-img" src="../../assets/image/me.jpg" />
      </el-menu-item>
      <div class="dark-theme-nav">
        <input type="checkbox" id="theme-toggle" v-model="nightMode" @change="darkThemeClick" />
        <label for="theme-toggle">
          <span></span>
        </label>
      </div>
    </el-menu>
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
  methods: {
    darkThemeClick() {
      if (this.nightMode) {
        document.querySelectorAll('ul').forEach(el => {
          el.style.background = 'hsl(207, 30%, 5%)'
        })
      } else {
         document.querySelectorAll('ul').forEach(el => {
          el.style.background = '#ffffff'
        })
      }
    }
  }
};
</script>

<style lang="scss">
.el-menu-demo {
  display: flex;
  justify-content: center;
  padding-top: 5px;
}

.me-img {
  width: 55px;
  border-radius: 50%;
  display: flex;
}

.dark-theme-nav {
  position: absolute;
  right: 0;
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
  background: #ffffff;
  
  &.theme-dark,
  ul {
    background: hsl(207, 30%, 5%);
  }
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
  min-height: 100vh;
}

* {
  transition: 0.2s ease;
}

</style>