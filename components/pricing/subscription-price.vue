<template>
  <div class="pricing-plans_content-item-price">
    <span>$</span>
    <span v-if="isMonthly">{{ monthlyPrice }}</span>
    <span v-else>{{ annualPrice }}</span>
  </div>
</template>

<script>
export default {
  props: {
    monthlyPrice: Number,
    annualPrice: Number,
    isMonthly: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.pricing-plans_content-item-price {
  position: relative;
  text-align: left !important;

  > span:first-child {
    position: absolute;
    font-size: 26px;
    font-weight: 500;
    top: 11px;
    left: 5.5rem;
    @apply text-darkColor;

    @screen sm {
      left: 4.8rem;
      font-size: 16px;
    }
  }
  > span:not(:first-child) {
    display: inline-block;
    text-indent: 102px;
    @apply text-accentPink;
    font-size: 60px;

    @screen sm {
      text-indent: 90px;
      font-size: 40px;
    }
  }
}
</style>
