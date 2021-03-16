<template>
  <div>
    <section>
      <div class="about-header">
        <div class="about-header_title">
          <h2>
            Who the heck are we
            <img class="text-img" src="/about/common_questions.png" alt="" />
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutHeader",
}
</script>

<style lang="scss">
.about-header {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 300px;
  height: auto;
  padding: 2rem;
  margin: 2rem;
  @screen sm {
    min-height: 150px;
    padding: 0;
    margin: 30px 0;
  }
}
.about-header_title {
  margin: 0 auto;
  text-align: center;
}
.text-img {
  display: inline-block;
  vertical-align: baseline;
  width: 50px;
  @screen sm {
    width: 30px;
  }
}
</style>
