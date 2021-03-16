<template>
  <form @submit.prevent="createFreeTrial">
    <input type="text" placeholder="Full name*" required v-model="customer.name" />
    <input type="email" placeholder="Work Email*" required v-model="customer.email" />
    <input type="submit" value="Free 15-day Trial" class="submit-button" />
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
