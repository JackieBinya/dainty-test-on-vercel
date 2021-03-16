<template>
  <div>
    <header-section />
    <Nuxt />
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from "../components/header-section.vue"
import FooterSection from "../components/footer-section.vue"
export default {
  components: {
    HeaderSection,
    FooterSection,
  },
}
</script>

<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.layout-inner {
  padding-top: 150px;
}
</style>
