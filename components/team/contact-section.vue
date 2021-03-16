<template>
  <section class="contact-section">
    <h2 class="contact-section_text">
      Start your digital journey with us!
      <nuxt-link to="/"> Contact us. </nuxt-link>
    </h2>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
}
</script>

<style lang="scss">
.contact-section {
  background: var(--light-color);
  clear: left;
  width: 100%;
  text-align: center;
}
.contact-section_text {
  padding: 4rem;
  font-size: 3rem;
  color: #e2e8f0;
  a {
    color: var(--acc-pink-color);
  }
  @screen md {
    font-size: 2rem;
  }
}
</style>
