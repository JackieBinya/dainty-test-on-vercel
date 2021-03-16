<template>
  <div>
    <div class="review-card_heading">
      <img src="/testimonials/testimonial-01.webp" alt="avatar" />
      <div>
        <h5 class="review-name">{{ name }}</h5>
        <span class="review_date">Mar 2021</span>
      </div>
    </div>

    <div class="star-review">
      <star v-for="n in numberOfStars" :key="n" />
    </div>
  </div>
</template>

<script>
// import star from "./star.vue"

export default {
  props: {
    name: String,
    numberOfStars: Number,
  },
  //   components: {
  //     star,
  //   },
}
</script>

<style lang="scss" scoped>
.review-card_heading {
  display: flex;

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .review-date {
    font-size: 15px;
    font-weight: 500;
  }
}

.star-review {
  display: flex;
  margin-top: 10px;

  svg {
    margin: 5px 0;
    width: 18px;
  }
}
</style>
