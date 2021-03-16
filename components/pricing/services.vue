<template>
  <div>
    <ul>
      <li v-for="{ type, isOffered, serviceId } in services.slice(0, 7)" :key="serviceId">
        <check-icon v-if="isOffered" />
        <cross-icon v-else />
        <span>{{ type }}</span>
      </li>
      <li v-if="isAtHome" class="dots">...</li>
      <div v-else>
        <div></div>
        <li
          role="button"
          class="toggle-services_desktop"
          @click="scrollToElement('pricing-table-headliner')"
        >
          View more
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    services: Array,
    cardId: Number,
    plan: String,
  },
  data() {
    return {
      isAtHome: null,
      id: "",
      hasCardExpanded: false,
    }
  },
  created() {
    if (this.$route.path === "/pricing") this.isAtHome = false

    if (this.$route.path === "/") this.isAtHome = true
  },
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id)
      element.scrollIntoView({ behavior: "smooth" })
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  text-align: left;
}

svg {
  display: inline-block !important;
  margin-right: 0.3rem;
  width: 12px;
  height: 12px;
}

li {
  padding: 0.6rem 0;
}

.position-relative {
  position: relative;
}

.card-btn,
.toggle-services_desktop {
  @apply text-accentPink;
}

.toggle-services_desktop {
  @screen md {
    display: none;
  }
}

h4 {
  text-transform: capitalize;
}

.dots {
  font-size: 24px;
}
</style>
