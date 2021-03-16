<template>
  <div class="homepage">
    <banner-section />
    <services-section />
    <media-section />
    <reviews />
    <call-to-action />
    <portfolio-examples />
    <pricing-cards-v-2 :isStripeLoaded="isStripeLoaded" />
  </div>
</template>

<script>
import BannerSection from "../components/home/banner-section"
import CallToAction from "../components/home/call-to-action.vue"
import PricingCardsV2 from "../components/pricing/pricing-cards-v2.vue"
import MediaSection from "../components/home/media-section"
import PortfolioExamples from "../components/home/portfolio-examples"
import Reviews from "../components/home/reviews/reviews.vue"

export default {
  components: {
    PortfolioExamples,
    MediaSection,
    BannerSection,
    CallToAction,
    PricingCardsV2,
    Reviews,
  },
  data() {
    return {
      isStripeLoaded: false,
    }
  },
  head() {
    return {
      script: [
        {
          hid: "stripe",
          src: "https://js.stripe.com/v3/",
          defer: true,
          callback: () => {
            this.isStripeLoaded = true
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  position: relative;
}
</style>
