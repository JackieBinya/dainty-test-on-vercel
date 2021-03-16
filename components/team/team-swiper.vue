<template>
  <div class="modal-container" @click.stop>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="member in members" :key="member.id">
        <div class="modal-container-text text-scroll">
          <h4 class="modal-container_name">
            {{ member.name }}
            <a :href="member.link" target="_blank" class="linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="#322F31"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                ></path>
              </svg>
            </a>
          </h4>
          <h5 class="modal-container_role">{{ member.role }}</h5>
          <h6 class="modal-container_value">VALUE TO THE ROOM</h6>
          <p>
            {{ member.bio }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="{ img, id } in members" :key="id">
        <div
          class="features-carousel-wrapper modal-container_img"
          :style="`
                    background-image: url('${img}');
                  `"
        ></div>
      </swiper-slide>
    </swiper>
    <nuxt-link class="modal-link_read" to="/about">
      <div class="modal-container_read">Read About Us</div>
    </nuxt-link>
    <div class="container nav">
      <div slot="button-prev" class="item modal-button-prev">
        <div class="container bg"></div>
        <span>Prev</span>
      </div>
      <div slot="button-next" class="item modal-button-next">
        <div class="container bg"></div>
        <span>Next</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamSwiper",
  props: {
    members: Array,
    swiperOption: Object,
  },
}
</script>

<style lang="scss"></style>
