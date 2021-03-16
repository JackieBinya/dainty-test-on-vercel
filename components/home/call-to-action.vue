<template>
  <section class="call-to-action">
    <div class="call-to-action_primary">
      <div class="call-to-action_base">
        <div class="call-to-action_image">
          <img src="/home/call-to-action/collabos.svg" alt="" />
        </div>
        <div class="call-to-action_text">
          <img src="/home/call-to-action/teamwork.svg" alt="" />
          <h2>Interact with your users on every platform.</h2>
          <p>
            There are many duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <nuxt-link to="/coming">Get Started</nuxt-link>
        </div>
      </div>
    </div>
    <div class="call-to-action_base">
      <div class="call-to-action_text">
        <img src="/home/call-to-action/solution1.svg" alt="" />
        <h2>Interact with your users on every platform.</h2>
        <p>
          There are many duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <nuxt-link to="/coming">Get Started</nuxt-link>
      </div>
      <div class="call-to-action_image">
        <img src="/home/call-to-action/feedback.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.call-to-action_primary {
  background: rgb(247, 246, 249);
  width: 100%;
}

.call-to-action_base {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 6rem 0;
  @apply grid;
  @apply grid-flow-row;
  @apply grid-cols-12;

  @screen md {
    padding: 3rem 0;
  }

  @screen sm {
    padding: 1.5rem 0;
  }
}

.call-to-action_image {
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  @apply col-span-5;

  @screen md {
    @apply col-span-12;
  }
}

.call-to-action_text {
  padding: 3rem 2rem;
  @apply col-span-7;

  img {
    width: 95px;
    height: 95px;

    @screen sm {
      width: 65px;
      height: 65px;
    }
  }

  h2 {
    margin: 30px 0;
  }

  p {
    margin-bottom: 30px;
  }

  a {
    @apply inline-block;
    padding: 16px 36px;
    margin-top: 1rem;
    @apply rounded-full;
    background: #fff;
    border: 3px solid var(--acc-purple-color);
  }

  @screen md {
    @apply col-span-12;
  }
}
</style>
