<template>
  <footer>
    <div class="footer-inner">
      <hr />
      <div class="footer-primary">
        <div class="footer-primary_headliner">
          <Logo />
          <p>
            You know that feeling when you swipe right on what you feel is your soul mate and they
            match you? Well yeah, that’s us…
          </p>
        </div>
        <div class="footer-body">
          <ul class="footer_main-links">
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/portfolio">Portfolio</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/pricing">Pricing</nuxt-link>
            </li>
          </ul>

          <!-- ToDo waiting for socials to be set up -->

          <!-- <ul class="footer-socials">
            <li>
              <nuxt-link to="/"><twitter-icon /></nuxt-link>
            </li>
            <li>
              <nuxt-link to="/"><ig-icon /> </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/"><linkedin-icon /></nuxt-link>
            </li>
            <li>
              <nuxt-link to="/"></nuxt-link>
            </li>
          </ul> -->
        </div>
        <div class="footer-secondary">
          <div class="footer-secondary_copyright">
            <span>© 2021 Dainty</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./logo.vue"
// import TwitterIcon from "./social-icons/twitter-icon.vue"

export default {
  components: {
    Logo,
    // TwitterIcon,
  },
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  // background: #f7f6f9;
}

a {
  display: inline-block;
  padding: 2rem 0;
}

.footer-inner {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 6rem 0rem 3rem;

  @screen md {
    padding: 3rem 1rem 3rem;
  }
}

.footer-body {
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
  }

  li {
    padding-right: 1rem;
  }

  @screen md {
    flex-direction: column-reverse;
    align-items: initial;
  }
}

.footer_main-links {
  a {
    @apply text-darkColor;
    font-weight: 500;

    &:hover {
      @apply text-accentPink;
    }
  }
}

.footer-secondary_copyright {
  margin-top: 0.5rem;
}

.footer-secondary_copyright > span {
  color: #3e3d3f;
  font-size: 1rem;
  font-weight: 500;
}
</style>
