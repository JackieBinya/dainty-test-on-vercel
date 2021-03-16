<template>
  <section class="services-homepage">
    <div class="services-homepage-inner">
      <h2>
        <span>Dainty is your one-stop development</span>
        <br />
        <span> and digital marketing agency</span>
      </h2>
      <div class="service-cards">
        <div v-for="{ heading, text, icon, id } in services" :key="id">
          <div :class="`dainty-icon dainty-icon-${icon}`"></div>
          <nuxt-link to="/">
            <h5>{{ heading }}</h5>
          </nuxt-link>
          <p>{{ text }}</p>
          <nuxt-link class="arrow-link" to="/"></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          heading: "All Your Design Needs",
          text:
            "Why go to all the headaches of hiring a freelancer when you can have an amazing dedicated designer for all your needs.",
          icon: "laptop",
          id: "03",
        },
        {
          heading: "Website & App Development",
          text:
            "No templates here. We custom design your website because it is your digital asset that best represents your brand. ",
          icon: "presentation",
          id: "09",
        },
        {
          heading: "Marketing",
          text:
            "Imagine your product/service is on one side of a ledge and your customers are on the other side. We are the bridge that brings the two together.",
          icon: "target",
          id: "012",
        },
        {
          heading: "Tweaks & Improvements",
          text:
            "Got an existing site and just need something touched up? We got you covered… don’t outsource, try us first. We promise you won’t regret it.",
          icon: "visualization",
          id: "015",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$iconGreen: #5dd8d3;
$iconPurple: #9364d4;
$iconPink: #ee539b;
$iconYellow: #fddd6e;
@font-face {
  font-family: "DaintyIcon";
  font-style: normal;
  font-weight: normal;
  src: url("~static/fonts/dainty-icon.ttf") format("truetype");
}
.icon-wrapper {
  width: 191px;
  height: 191px;
}
.dainty-icon {
  font-family: DaintyIcon;
  font-size: 60px;
}
.dainty-icon-laptop:before {
  content: "\e907";
  color: $iconGreen;
}
.dainty-icon-presentation:before {
  content: "\e906";
  color: $iconPurple;
}
.dainty-icon-target:before {
  content: "\e905";
  color: $iconPink;
}
.dainty-icon-visualization:before {
  content: "\e904";
  color: $iconYellow;
}
.services-homepage {
  display: block;
  width: 100%;
  max-width: 1144px;
  margin: 0rem auto 6rem;
}
// .services-homepage-inner {
//   padding-bottom: 6rem;
// }
h2 {
  text-align: center;
  margin-bottom: 48px;
}
.service-cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 260px);
  grid-gap: 16px;
  padding: 0 2rem;
  > div {
    font-size: 20px;
    line-height: 34px;
    border-radius: 4px;
    padding: 36px 16px 16px;
    box-shadow: rgba(46, 61, 98, 0.1) 0px 10px 60px 0px;
    &:hover {
      h5,
      p,
      .dainty-icon:before,
      a:before {
        color: #fff !important;
      }
    }
  }
  h5 {
    height: 28px;
    margin: 60px 0 40px;
  }
  p {
    height: 195px;
  }
  .arrow-link:before {
    content: "\e903";
    font-family: DaintyIcon;
    transform: rotate(180deg);
    display: inline-block;
    font-size: 32px;
    color: #bcbfc7;
    margin-top: 20px;
  }
  div:nth-child(1) {
    &:hover {
      background: $iconGreen;
    }
  }
  div:nth-child(2) {
    &:hover {
      background: $iconPurple;
    }
  }
  div:nth-child(3) {
    &:hover {
      background: $iconPink;
    }
  }
  div:nth-child(4) {
    &:hover {
      background: $iconYellow;
    }
  }
  @screen md {
    grid-template-columns: repeat(2, 330px);
    justify-content: space-between;
  }
  @screen sm {
    grid-template-columns: minmax(300px, 1fr);
    justify-content: center;
  }
}
</style>
