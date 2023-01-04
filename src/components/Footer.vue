<template>
  <footer>
    <span class="project animated" data-animationtype="left" data-delay=".6s">
      <b>2023 ALVIN NARIO</b>
    </span>
    <ul
      class="links project animated"
      data-animationtype="right"
      data-delay=".6s"
    >
      <li>
        <a href="https://github.com/narioalvin" target="_blank">
          <img src="../assets/images/github.svg" alt="github" width="20" />
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/narioalvin" target="_blank">
          <img
            src="../assets/images/dribbble-logo.svg"
            alt="dribbble"
            width="20"
          />
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/narioalvin" target="_blank">
          <img
            src="../assets/images/behance-logo.svg"
            alt="behance"
            width="20"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/alvin-nario-498a20193"
          target="_blank"
        >
          <img src="../assets/images/linkedin.svg" alt="behance" width="20" />
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
  background-color: #f2f2f2;
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
    padding: 0 15px;
  }
}

@media screen and (min-width: 768px) {
  footer .links li {
    margin-right: 35px;
  }
}
</style>
