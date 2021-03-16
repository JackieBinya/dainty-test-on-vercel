<template>
  <div>
    <div>
      <img src="/pricing/get-started.png" width="85px" class="get-started_img" />
    </div>
    <div class="get-started_text">
      Just getting started? The Core Plan includes all of the essentials for teams up to 5 Users: 1
      Mailbox, 1 Docs site, and Beacon — all for just $99 per User per Month.
    </div>
    <nuxt-link to="/">
      <div class="pricing-btn_animated">Free 15-day trial <span> > </span></div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "GetStarted",
}
</script>

<style lang="scss">
.get-started_img {
  margin: 20px auto;
}
.get-started_text {
  width: 45%;
  margin: 0 auto;
  text-align: center;
  line-height: 1.7;
  @screen sm {
    width: 90%;
  }
}
.pricing-btn_animated {
  position: relative;
  text-align: center;
  width: fit-content;
  margin: 20px auto;
  color: var(--acc-purple-color);
  font-weight: 600;
  span {
    position: absolute;
    right: -12px;
    transition: all 0.3s;
  }
  &:hover {
    span {
      position: absolute;
      right: -20px;
    }
  }
}
</style>
