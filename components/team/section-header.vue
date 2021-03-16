<template>
  <div>
    <section>
      <div class="section-header">
        <div class="section-header_title">
          <h1>Team</h1>
        </div>
      </div>
      <div
        class="section-header_background"
        style="background-image: url('/team/team-rs.webp')"
      ></div>
      <div class="fade"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
}
</script>

<style lang="scss">
.section-header_title {
  padding: 0 3rem;
  z-index: 10;
  h1 {
    font-size: 10rem;
    font-weight: 600;
  }
  @screen md {
    padding: 0 1rem;
    h1 {
      font-size: 3rem;
    }
  }
}
.fade {
  position: absolute;
  top: 0;
  left: 0;
  max-height: 601px;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 100%);
  z-index: 0;

  @screen sm {
    max-height: 401px;
  }
}
</style>
