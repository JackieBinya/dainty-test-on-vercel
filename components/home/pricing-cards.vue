<template>
  <section class="pricing">
    <div class="pricing-headliner">
      <h2>Choose Plans and Pricing</h2>
      <p>
        Purus viverra accumsan in nisl nisi. Volutpat commodo sed egestas egestas fringilla
        phasellus faucibus.
      </p>
    </div>
    <div class="pricing-plans">
      <div class="pricing-plan_action-wrapper">
        <div class="pricing-plan_action">
          <div
            role="button"
            v-bind:class="[isMonthly ? 'pinkClass' : 'whiteClass', 'baseClass']"
            @click="isMonthly = true"
          >
            Monthly
          </div>
          <div
            role="button"
            v-bind:class="[isMonthly ? 'whiteClass' : 'pinkClass', 'baseClass']"
            @click="isMonthly = false"
          >
            Yearly
          </div>
        </div>
      </div>
      <div class="pricing-plans_content">
        <div
          v-for="{ plan, id, monthlyPrice, annualPrice, headliner, services } in plans"
          v-bind:key="id"
          class="pricing-plans_content-item"
        >
          <h4>{{ plan }}</h4>
          <subscription-price
            :isMonthly="isMonthly"
            :annualPrice="annualPrice"
            :monthlyPrice="monthlyPrice"
          />

          <p class="pricing-plans_content-item-headliner">
            {{ headliner }}
          </p>

          <services :services="services" />

          <nuxt-link :to="`/pricing/${plan}`">Select Plan</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Services from "../pricing/services.vue"

export default {
  components: { Services },
  data() {
    return {
      isMonthly: true,
      plans: [],
      show: false,
    }
  },
  async fetch() {
    this.plans = await this.$content("pricing-and-plans").fetch()
  },
  computed: {
    newPlans() {
      return this.plans.map((plan) => {
        Object.assign(plan, { isActive: false })
        return plan
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.pricing {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 6rem 2rem;
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
  // align-items: center;
  grid-template-columns: repeat(3, 375px);
  grid-gap: 1rem;

  > div {
    padding: 50px 48px 60px;
    border: 1px solid transparent;
    border-radius: 6px;
    box-shadow: 0 0 0 1px rgba(67, 84, 149, 0.1), 0 1px 5px 1px rgba(19, 47, 70, 0.08);
    text-align: center;
  }

  div:nth-child(1),
  div:nth-child(3) {
    > a {
      border: 2px solid rgb(194, 203, 211);
      @apply text-darkColor;
      background: transparent;

      &:hover {
        border: 2px solid var(--dark-color);
      }
    }
  }

  div:nth-child(2) {
    > a {
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
    // justify-content: center;
  }

  // svg {
  //   margin-right: 0.3rem;
  //   width: 12px;
  //   height: 12px;
  // }

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
</style>
