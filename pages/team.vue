<template>
  <div>
    <section-header></section-header>
    <team-list></team-list>
    <contact-section></contact-section>
  </div>
</template>

<script>
import SectionHeader from "../components/team/section-header"
import TeamList from "../components/team/team-list"
import ContactSection from "../components/team/contact-section"
export default {
  name: "Team",
  components: { ContactSection, TeamList, SectionHeader },
}
</script>

<style lang="scss"></style>
