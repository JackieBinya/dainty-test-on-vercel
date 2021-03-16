<template>
  <div class="stripe-checkout-layout">
    <div class="stripe-checkout-layout-inner">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.stripe-checkout-layout {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}

.stripe-checkout-layout-inner {
  width: 100%;
  //   height: 70vh;
  margin: 3rem 0;
  padding: 0 2rem 2rem;
  border-top: 6px solid var(--acc-pink-color);
  border-bottom: 6px solid var(--acc-pink-color);
  box-shadow: 0 15px 35px 0 rgba(46, 46, 84, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.07);
}
</style>
