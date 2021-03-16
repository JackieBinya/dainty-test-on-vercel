<template>
  <header>
    <div ref="menuRef" class="menu">
      <div class="menu-inner">
        <div class="menu_logo">
          <Logo />
        </div>
        <div class="menu_main">
          <div>
            <div class="menu_icon" role="button" @click="handleMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>

            <ul class="menu_links">
              <li>
                <NuxtLink to="/portfolio">Portfolio</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/web-development">Web development</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about">About us</NuxtLink>
              </li>
              <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="menu_call">
          <nuxt-link to="/pricing/free-trial"> 15 Days Free </nuxt-link>
        </div>
      </div>
    </div>

    <ul v-if="menuIsActive" class="menu_popup">
      <li>
        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        <hr />
      </li>
      <li>
        <NuxtLink to="/web-development">Web Development</NuxtLink>
        <hr />
      </li>
      <li>
        <NuxtLink to="/">About us</NuxtLink>
        <hr />
      </li>
      <li>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <hr />
      </li>
    </ul>
  </header>
</template>

<script>
import Logo from "./logo.vue"

export default {
  name: "HeaderSection",
  components: {
    Logo,
  },
  computed: {
    menuIsActive() {
      return this.$store.state.menuIsActive
    },
  },
  mounted() {
    // Note: do not add parentheses () for this.handleScroll
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleMenu() {
      this.$store.commit("toggleMenuState")
    },
    handleScroll() {
      if (window.scrollY > 80) {
        this.$refs.menuRef.classList.add("white-background")
        console.log(this.$refs.menuRef.classList)
      } else {
        this.$refs.menuRef.classList.remove("white-background")
      }
    },
  },
}
</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
}

.menu-inner {
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 1rem 0;
  @apply grid;
  @apply grid-cols-12;

  a {
    @apply text-darkColor;
    @apply font-medium;
  }

  @screen md {
    padding: 1rem;
  }
}

.white-background {
  background: #fff !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.menu_logo {
  display: flex;
  align-items: center;
  // padding-left: 1.5rem;

  @apply col-span-2;

  @screen md {
    @apply col-span-4;
  }
  @screen sm {
    @apply col-span-6;
  }
}

.menu_main {
  display: flex;
  align-items: center;
  @apply col-span-8;

  @screen md {
    @apply col-span-4;
  }

  @screen sm {
    @apply col-span-6;
  }
}

.menu_icon > svg {
  @apply font-semibold;
  @apply text-accentPink;
  display: none;

  @screen md {
    display: block;
  }
}

.menu_main > div {
  width: 100%;
  display: flex;

  @screen md {
    justify-content: center;
  }

  @screen sm {
    justify-content: flex-end;
  }
}

.menu_links {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  li {
    padding: 0.5rem 0;
    margin: 1rem;
  }

  a:hover {
    @apply text-accentPink;
  }

  @screen md {
    display: none;
  }
}

.menu_call {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply col-span-2;

  > a {
    @apply inline-block;
    @apply p-3;
    @apply font-medium;
    border-radius: 8px;
    width: 140px;
    text-align: center;
    font-size: 14px;
    background: #fff;
    color: var(--acc-purple-color);
    border: 2px solid var(--acc-purple-color);

    &:hover {
      background: var(--acc-pink-color);
      border: 2px solid transparent;
      color: #fff;
    }
  }

  @screen md {
    @apply col-span-4;
  }

  @screen sm {
    display: none;
  }
}

.menu_popup {
  position: fixed;
  z-index: 990;
  top: 130px;
  left: 1rem;
  right: 1rem;
  width: auto;
  background: var(--dark-color);
  padding: 1rem 1rem;
  list-style: none;

  li {
    padding: 0.5rem 0;
  }

  a {
    color: #979caf;
    padding: 1rem 0;
    @apply font-medium;
  }
}
</style>
