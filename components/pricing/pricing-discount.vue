<template>
  <div class="pricing-discount">
    <div class="pricing-discount_title"><h4>Looking for a discount?</h4></div>
    <div class="discount-options">
      <div class="discount-options_item">
        <nuxt-link to="/">
          <div class="title">
            Help Dainty
            <span>for Good</span>
          </div>
          <div class="text">For organizations with a focus on the environment & social impact.</div>
          <div class="pricing-btn_animated">Learn more <span> > </span></div>
        </nuxt-link>
      </div>
      <div class="discount-options_item">
        <nuxt-link to="/">
          <div class="title">Help Dainty for Startups <span></span></div>
          <div class="text">For new companies that could use a price break for the first year.</div>
          <div class="pricing-btn_animated">Learn more <span> > </span></div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingDiscount",
}
</script>

<style lang="scss">
.pricing-discount {
  margin: 50px 0;
  .pricing-discount_title {
    width: fit-content;
    margin: 30px auto;
  }
  .discount-options {
    display: flex;
    @screen md {
      flex-direction: column;
    }
  }
  .discount-options {
    width: 80%;
    margin: 0 auto;
    .discount-options_item {
      background: white;
      height: auto;
      padding: 50px;
      text-align: center;
      border-bottom: 1px solid #f1f3f5;
      z-index: 8;
      transition: all 0.3s;
      @screen sm {
        padding: 20px;
      }
      &:nth-child(1) {
        border-left: 1px solid #f1f3f5;
        border-right: 1px solid #f1f3f5;
        box-shadow: -10px 15px 25px 1px #f1f3f5;
        border-radius: 6px 0 0 6px;
        @screen md {
          border-radius: 6px 6px 0 0;
          box-shadow: 0 20px 25px 5px #f1f3f5;
        }
        .title {
          span {
            position: relative;
            &:before {
              content: "";
              background: url("/pricing/title-underline.png") no-repeat top left;
              background-size: 113px 10px;
              bottom: -5px;
              height: 10px;
              right: 0;
              position: absolute;
              width: 113px;
              z-index: 1;
            }
          }
        }
      }
      &:nth-child(2) {
        border-right: 1px solid #f1f3f5;
        box-shadow: 10px 15px 25px 1px #f1f3f5;
        border-radius: 0 6px 6px 0;
        @screen md {
          border-radius: 0 0 6px 6px;
          box-shadow: 0 20px 25px 5px #f1f3f5;
          border-left: 1px solid #f1f3f5;
        }
        .title {
          span {
            background-image: url("/pricing/rocket-icon.png");
            background-size: 100% auto;
            position: absolute;
            display: inline-block;
            width: 44px;
            height: 48px;
            margin-left: 8px;
            text-indent: -9999px;
            @screen sm {
              position: relative;
              vertical-align: middle;
            }
          }
        }
      }
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 20px 20px 5px #c0c2c4;
        border-radius: 6px;
        z-index: 10;
      }
      .title {
        font-size: 28px;
        margin: 20px 0;
        @screen sm {
          font-size: 22px;
        }
      }
      .text {
        font-size: 20px;
        font-weight: 100;
        line-height: 1.8;
        color: #556575;
        margin-bottom: 30px;
        @screen sm {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
