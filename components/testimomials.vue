<template>
  <section class="testimonials">
    <div class="testimonials-headliner">
      <h2>What some of our awesome customers are saying...</h2>
    </div>

    <div class="testimonials-carousel">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="{ url, name, text, id, company } in testimonials" v-bind:key="id">
            <div class="testimonials-card">
              <p>“{{ text }}“</p>
              <div>
                <img :src="require(`../static/testimonials/${url}`)" alt="Avatar" />
                <div>
                  <h5>{{ name }}</h5>
                  <div>{{ company }}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // slidesPerView: 3,
        // spaceBetween: 120,
        centeredSlides: true,
        // centeredSlides: true,
        // freeMode: true,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1665: {
            slidesPerView: 4,
            spaceBetween: 95,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 195,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        },
      },
      testimonials: [
        {
          id: 1,
          url: "testimonial-01.webp",
          name: "Arya Stark",
          company: "Pebbled",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
        {
          id: 2,
          url: "testimonial-02.webp",
          name: "Xavier Phillips",
          company: "Help Scout",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
        {
          id: 3,
          url: "testimonial-03.webp",
          name: "Melissa Simmons",
          company: "Gleam",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
        {
          id: 4,
          url: "testimonial-04.webp",
          name: "Harrison Smith",
          company: "SparkInc",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
        {
          id: 5,
          url: "testimonial-05.webp",
          name: "Jamie Hillby",
          company: "Twitter",
          text:
            "Dainty has helped us connect with our customers whilst they do all the technical work so effectively.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
// -swiper-theme-color: green;

.testimonials-headliner {
  text-align: center;
  margin-bottom: 60px;
}

.testimonials-card {
  width: 700px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 15px 35px 0 rgba(46, 46, 84, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.07);
  padding: 20px 25px;
  opacity: 0.5;
  transform: scale(0.89);
  transition: opacity, 0.3s, transform 0.3s;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  > p {
    margin-bottom: 25px;
  }

  > div {
    display: flex;
  }

  @media (max-width: 1440px) {
    width: 535px;
  }

  @screen md {
    width: 430px;
  }

  @media (max-width: 375px) {
    width: 375px;
    max-width: 460px;
  }
}

.swiper {
  height: 300px;
  width: 100%;
  padding: 60px 0;
  background: rgba(111, 108, 127, 0.1);
}

.swiper-slide-active > .testimonials-card {
  opacity: 1;
  transform: scale(1);
}
</style>
