<template>
  <div class="portfolio">
    <portfolio-header></portfolio-header>
    <portfolio-body></portfolio-body>
  </div>
</template>

<script>
import PortfolioHeader from "../components/portfolio/portfolio-header"
import PortfolioBody from "../components/portfolio/portfolio-body"
export default {
  name: "Portfolio",
  components: { PortfolioBody, PortfolioHeader },
}
</script>

<style scoped></style>
