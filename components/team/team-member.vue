<template>
  <div
    class="box"
    :style="`
      background-image: url(${member.img});
      background-repeat: no-repeat;
      height: ${height};
    `"
    @click="$emit('memberClicked', member)"
  >
    <img
      src="../../static/team/members/troy.jpg"
      style="visibility: hidden; height: 100%; width: 100%"
    />
    <div class="text">
      <div class="container padding">
        <div class="name">{{ member.name }}</div>
        <a :href="member.link" target="_blank" class="linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#322F31"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            ></path>
          </svg>
        </a>
        <div class="role">{{ member.role }}</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="text hover">
      <div class="container padding">
        <div class="name">{{ member.name }}</div>
        <a :href="member.link" target="_blank" class="linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#FFFFFF"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            ></path>
          </svg>
        </a>
        <div class="role">{{ member.role }}</div>
      </div>
    </div>
    <div class="triangle tri1"></div>
    <div class="triangle tri2"></div>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    height: String,
    member: Object,
  },
}
</script>

<style lang="scss"></style>
