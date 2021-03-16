<template>
  <div>
    <about-header></about-header>
    <about-body></about-body>
  </div>
</template>

<script>
import AboutHeader from "../components/about/about-header"
import AboutBody from "../components/about/about-body"
export default {
  name: "About",
  components: { AboutBody, AboutHeader },
}
</script>

<style lang="scss"></style>
