<template>
  <div class="examples">
    <div class="examples-title">
      <h2>A designer for any job and every job</h2>
      <h6>
        Whether it’s a new logo, marketing materials, advertisements, or website/app design, there's
        always a qualified designer for the job.
      </h6>
    </div>
    <div class="menu_call">
      <nuxt-link to="/portfolio">View More</nuxt-link>
    </div>
    <div class="examples-body">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in exampleItems" :key="item">
          <div
            class="examples-item"
            :style="`background-image: url(/portfolio/projects/${item})`"
          ></div>
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioExamples",
  data() {
    return {
      exampleItems: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "5.png",
        "8.jpg",
        "14.jpg",
        "38.jpg",
        "16.jpg",
        "36.jpg",
      ],
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        initialSlide: 0,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          1280: {
            slidesPerView: 5,
          },
          480: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 1,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss">
.examples {
  margin-bottom: 30px;
  .menu_call {
    a {
      margin: 1rem 11rem 3rem auto;
    }
    @screen sm {
      display: block;
      width: 90%;
      margin: 0 auto;
      padding-left: 1rem;
    }
  }
  .examples-title {
    width: 70%;
    padding-right: 15%;
    margin: 0 auto;
    h2 {
      margin-bottom: 20px;
    }
    @screen sm {
      width: 90%;
      padding: 1rem;
    }
  }
  .examples-body {
    margin: 0 20px;
    .examples-item {
      height: 19vw;
      width: 19vw;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      @screen md {
        height: 23vw;
        width: 23vw;
      }
      @screen sm {
        width: 95vw;
        height: 95vw;
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: #fff;
      color: var(--acc-purple-color);
      -webkit-box-shadow: 0 1px 4px 1px #7c7878;
      -moz-box-shadow: 0 1px 4px 1px #7c7878;
      box-shadow: 0 1px 7px 2px #7c7878;

      &:after {
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
}
</style>
