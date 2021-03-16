<template>
  <div class="pricing">
    <div v-if="isActive" class="overlay" @click="hideOverlay"></div>
    <PricingCardsV2 :isStripeLoaded="isStripeLoaded" ref="cards2" />
    <get-started />
    <pricing-discount />
    <pricing-support />
    <pricing-table />
  </div>
</template>

<script>
// import PricingCards from "../../components/home/pricing-cards.vue"
import PricingTable from "../../components/pricing-table.vue"
import PricingCardsV2 from "../../components/pricing/pricing-cards-v2.vue"
import GetStarted from "../../components/pricing/get-started"
import PricingDiscount from "../../components/pricing/pricing-discount"
import PricingSupport from "../../components/pricing/pricing-support"

export default {
  components: {
    PricingSupport,
    PricingDiscount,
    GetStarted,
    // PricingCards,
    PricingTable,
    PricingCardsV2,
  },
  data() {
    return {
      isStripeLoaded: false,
    }
  },
  methods: {
    hideOverlay() {
      const services = this.$refs.cards2.$refs.services
      for (let i = 0; i < services.length; i++) {
        if (services[i].id !== "") {
          services[i].hideOverlay()
        }
      }
    },
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
  computed: {
    isActive() {
      return this.$store.state.showOverlay
    },
  },
}
</script>

<style lang="scss" scoped>
.pricing {
  position: relative;
  width: 100%;
}

.overlay {
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 35;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
</style>
