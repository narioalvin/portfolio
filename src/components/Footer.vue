<template>
  <footer>
    <span class="project animated" data-animationtype="left" data-delay=".6s">
      <b>2021 ALVIN NARIO</b>
    </span>
    <ul
      class="links project animated"
      data-animationtype="right"
      data-delay=".6s"
    >
      <li>
        <a href="https://github.com/narioalvin" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/narioalvin" target="_blank">
          <font-awesome-icon :icon="['fab', 'dribbble']" />
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/narioalvin" target="_blank">
          <font-awesome-icon :icon="['fab', 'behance']" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/alvin-nario-498a20193"
          target="_blank"
        >
          <font-awesome-icon
            class="contact-icon"
            :icon="['fab', 'linkedin-in']"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #e6e6e6;
  color: #1a1a1a;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;

  span {
    font-size: 11px;
  }

  ul {
    margin: 0;
  }

  .links {
    list-style-type: none;
    padding: 0;

    li {
      display: inline;
      margin-right: 12px;
      font-size: 14px;

      a {
        color: #202020;

        &:hover {
          opacity: 0.8;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

@media screen and (min-width: 360px) {
  footer {
    span {
      font-size: 15px;
    }

    .links li {
      font-size: 20px;
    }
  }
}

@media screen and (min-width: 480px) {
  footer .links li {
    margin-right: 20px;
  }
}

@media screen and (min-width: 600px) and (orientation: portrait) {
  footer {
    padding: 0 40px;
  }
}

@media screen and (min-width: 768px) {
  footer .links li {
    margin-right: 35px;
  }
}
</style>
