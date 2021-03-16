<template>
  <div class="section-header">
    <div class="portfolio-header-text">
      <h5>THE LATEST</h5>
      <h2>Greetings, Hallmark.</h2>
      <nuxt-link to="/" class="portfolio-header_button"><span>View Case Study</span></nuxt-link>
    </div>
    <div
      class="section-header_background"
      style="background-image: url('/portfolio/hallmark.jpg'); background-position-y: top"
    ></div>
  </div>
</template>

<script>
export default {
  name: "PortfolioHeader",
}
</script>

<style lang="scss">
.section-header_background {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  max-height: 600px;
  height: 100%;
  width: 100%;
  z-index: -1;

  @screen sm {
    max-height: 400px;
  }
}
.section-header {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 500px;
  height: auto;
  padding: 2rem;

  @screen md {
    padding-top: 6rem;
  }

  @screen sm {
    padding-top: 3rem;
    margin: 0;
    min-height: 300px;
  }
}
.portfolio {
  .section-header {
    min-height: 600px;
    @screen md {
      padding: 0;
    }
    @screen sm {
      min-height: 300px;
    }
  }
  .portfolio-header-text {
    padding: 40px;
    margin-bottom: 40px;
    width: 40vw;
    h5,
    h2,
    a {
      color: white;
      line-height: 1.2;
    }
    h5 {
      margin-bottom: 10px;
    }
    @screen sm {
      padding: 20px;
      margin-bottom: 0;

      h5 {
        font-size: 0.9rem;
      }
    }
  }
  .portfolio-header_button {
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    width: 320px;
    height: 75px;
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0;
    border: 3px solid;
    overflow: hidden;
    transition: all 0.3s;
    span {
      position: relative;
      width: 100%;
      left: 0;
      transition: all 0.3s;
    }
    &:before {
      position: absolute;
      left: -100%;
      content: url("/portfolio/arrow-white.svg");
      transition: all 0.3s;
    }
    &:hover {
      span {
        left: 100%;
        transition: all 0.3s;
      }
    }
    &:hover:before {
      left: 43%;
    }
    @screen md {
      width: 260px;
      height: 60px;
    }
    @screen sm {
      width: 180px;
      height: 40px;
      font-size: 16px;
      margin: 10px 0 0 0;
      border: 2px solid white;
    }
  }
}
</style>
