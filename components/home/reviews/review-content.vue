<template>
  <p class="review-content">
    “{{ review.replace(/(([^\s]+\s\s*){35})(.*)/, "$1…")
    }}<span v-if="review.match(/(\w+)/g).length < 36">“</span>
  </p>
</template>

<script>
export default {
  props: {
    review: String,
  },
}
</script>

<style lang="scss" scoped>
.review-content {
  margin-top: 1rem;
}
</style>
