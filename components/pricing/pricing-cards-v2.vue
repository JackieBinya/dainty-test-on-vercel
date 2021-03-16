<template>
  <section class="pricing-cards-section">
    <div class="pricing-headliner">
      <h2 v-if="isAtHome">Plans and Pricing</h2>
      <h2 v-else>Choose Plans and Pricing</h2>
      <p>All the subscription prices are pegged in US Dollars.</p>
    </div>
    <div class="pricing-plans">
      <div class="pricing-plans_content">
        <div
          v-for="{
            plan,
            id,
            monthlyPrice,
            annualPrice,
            monthlyPriceId,
            headliner,
            services,
          } in plans"
          v-bind:key="id"
          class="pricing-plans_content-item"
        >
          <h4>{{ plan }}</h4>
          <subscription-price
            :is-monthly="isMonthly"
            :annual-price="annualPrice"
            :monthly-price="monthlyPrice"
          />
          <p class="pricing-plans_content-item-headliner">
            {{ headliner }}
          </p>
          <services :services="services" :card-id="id" :plan="plan" ref="services" />
          <div v-if="!isAtHome">
            <checkout-button
              v-if="isStripeLoaded"
              :monthly-price-id="monthlyPriceId"
              :plan="plan"
            />
            <div v-else class="skeleton-btn"></div>
          </div>
        </div>
      </div>
      <div class="pricing-link-wrapper">
        <nuxt-link v-if="isAtHome" to="/pricing" class="pricing-link">View More </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Services from "./services.vue"

export default {
  components: { Services },
  props: {
    isStripeLoaded: Boolean,
  },
  data() {
    return {
      isMonthly: true,
      isAtHome: null,
      plans: [],
      show: false,
      isLoadingCheckout: false,
      stripeError: "",
    }
  },
  async fetch() {
    this.plans = await this.$content("pricing-and-plans").fetch()
  },
  created() {
    if (this.$route.path === "/pricing") this.isAtHome = false

    if (this.$route.path === "/") this.isAtHome = true
  },
}
</script>

<style lang="scss" scoped>
.pricing-cards-section {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 6rem 2rem 0;
}

.pricing-headliner {
  text-align: center;

  h2,
  p {
    margin-bottom: 30px;
  }
}

.pricing-plan_action-wrapper {
  display: flex;
  justify-content: center;
  padding: 3rem 0 3rem;
}

.pricing-plan_action {
  display: flex;

  > div:nth-child(1) {
    border-radius: 31px 0 0 31px;
  }

  > div:nth-child(2) {
    border-radius: 0 31px 31px 0;
  }
}

.baseClass {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 58px;
  padding: 0.5rem 0;
  font-weight: 500;
}

.pinkClass {
  background: var(--acc-pink-color) !important;
  color: #fff;
  border: 1px solid var(--acc-pink-color);
}

.whiteClass {
  background: #fff;
  color: var(--acc-pink-color);
  border: 1px solid #e6e6e6;
}

.pricing-plans_content {
  display: grid;
  grid-template-columns: repeat(3, 375px);
  grid-gap: 1rem;

  > div {
    padding: 50px 48px 60px;
    border: 1px solid transparent;
    border-radius: 6px;
    box-shadow: 0 0 0 1px rgba(67, 84, 149, 0.1), 0 1px 5px 1px rgba(19, 47, 70, 0.08);
    text-align: center;

    @screen md {
      padding: 50px 16px 60px;
    }
  }

  div:nth-child(1),
  div:nth-child(3) {
    > button {
      border: 2px solid rgb(194, 203, 211);
      @apply text-darkColor;
      background: transparent;

      &:hover {
        border: 2px solid var(--dark-color);
      }
    }
  }

  div:nth-child(2) {
    > button {
      border: 2px solid var(--dark-color);
      color: #fff;
      background: var(--dark-color);
      box-shadow: 0 3px 30px -2px rgba(20, 45, 100, 0.25);

      &:hover {
        box-shadow: 0 8px 36px -3px rgba(20, 45, 100, 0.35);
      }
    }
  }

  @screen md {
    grid-template-columns: 375px;
    grid-gap: 2rem;
    justify-content: center;
  }

  @screen sm {
    grid-template-columns: 320px;
  }
}
.pricing-plans_content-item {
  h4 {
    text-transform: capitalize;
  }

  p {
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }

  a {
    display: inline-block;
    height: 56px;
    line-height: 50px;
    max-width: 100%;
    width: 265px;
    border-radius: 5px;
    margin-top: 1.5rem;
    font-weight: 500;
    transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  &-headliner {
    height: 150px;
    margin-bottom: 1rem;
    color: rgb(116, 132, 148) !important;
  }
}

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

.skeleton-btn {
  width: 300px;
  height: 60px;
  margin: 1rem 0 0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: shimmer 3s infinite;
    content: "";
  }

  @screen sm {
    width: 270px;
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.pricing-link-wrapper {
  text-align: center;
}

.pricing-link {
  display: inline-block;
  padding: 0.75rem;
  margin-top: 2.5rem;
  font-weight: 500;
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

  @screen md {
    text-align: center;
  }
}
</style>
