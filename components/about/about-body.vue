<template>
  <section class="about-body">
    <about-info></about-info>
    <about-values></about-values>
    <about-started></about-started>
    <about-terms></about-terms>
  </section>
</template>

<script>
import AboutInfo from "./about-info"
import AboutValues from "./about-values"
import AboutStarted from "./about-started"
import AboutTerms from "./about-terms"
export default {
  name: "AboutBody",
  components: { AboutTerms, AboutStarted, AboutValues, AboutInfo },
}
</script>

<style lang="scss">
.about-body {
  width: 80%;
  border-radius: 0 0 1px 1px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5% 5%;
  margin: 20px auto 80px;
  @screen sm {
    width: 90%;
  }
  li {
    padding: 1.5rem 0 2rem;
    border-bottom: 2px solid #e9edf5;
  }
  li.collapsible-item {
    padding: 0;
  }
  a {
    color: var(--acc-purple-color);
  }
  a:hover {
    color: var(--acc-pink-color);
  }
  .about-list_header {
    color: var(--dark-color);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    line-height: 1.5;
    @screen sm {
      text-align: center;
    }
  }
  .about-list_description {
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 1.5;
  }
  .about-list_img {
    margin: 0 20px 0 0;
    max-width: none;
    @screen sm {
      margin: 20px auto;
    }
  }
}
li.flex {
  @screen sm {
    flex-direction: column;
  }
}
.about-body_info {
  padding-top: 60px;
}
.text-center {
  text-align: center;
}
.section-title {
  padding: 30px 0;
  @screen sm {
    text-align: center;
  }
}
.about-body_section {
  padding-top: 50px;
}
</style>
