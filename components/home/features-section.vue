<template>
  <section class="features">
    <div class="features-inner">
      <div class="features-text">
        <h2>App Advance Features</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>
      <div class="features-carousel">
        <client-only>
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="{ url, heading, text, id } in features" v-bind:key="id">
              <div class="features-carousel-wrapper">
                <img :src="require(`../../static/home/features/${url}`)" alt="Services offered" />
                <h5>{{ heading }}</h5>
                <p>{{ text }}</p>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        // spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
          delay: 3400,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 45,
          },
        },
      },
      features: [
        {
          url: "planning.svg",
          heading: "Perfect Application Intergration",
          text:
            "There are Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: 1,
        },
        {
          url: "planning.svg",
          heading: "Creative App Display",
          text:
            "There are Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          id: 2,
        },
        {
          url: "solution.svg",
          heading: "New Artwork Unveiled",
          text:
            "There are Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          id: 3,
        },
        {
          url: "project-management.svg",
          heading: "Company Growth Strategy",
          text:
            "There are Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          id: 3,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.features {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem 6rem;
}

.features-text {
  text-align: center;

  h2,
  p {
    margin-bottom: 30px;
  }
}

// TODO=>Customise active links
// .swiper-container-horizontal > .swiper-pagination-bullets > .swiper-pagination-bullet-active {
//   background: chartreuse !important;
//   width: 10px !important;
//   height: 10px !important;
// }

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
}

.swiper-slide-active .features-carousel-wrapper {
  border: 4px solid var(--acc-purple-color) !important;
  border-radius: 15px;
  margin: 5px -10px 50px -10px;
  transform: scale(1);

  @screen sm {
    border: 4px solid transparent !important;
  }
}

.features-carousel-wrapper {
  width: 330px;
  height: 451px;
  padding: 74px 16px 66px;
  text-align: center;
  transform: scale(0.89);

  > img {
    display: block;
    width: 95px;
    height: 95px;
    margin: 0 auto;
  }

  h5 {
    margin: 35px 0;
  }

  @sreen sm {
    width: 235px;
    height: 380px;
    padding: 74px 16px 33px;
  }
}
</style>
