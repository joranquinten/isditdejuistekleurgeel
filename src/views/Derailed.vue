<template>
  <div class="derailed" :style="backgroundColor">
    <img
      class="image"
      src="../../static/2-NS.gif"
      alt="#FFC917 is het nieuwe #EEB717"
    />
    <jum-heading h1 class="hex">
      <strong>#{{ $route.params.hex }}</strong>
    </jum-heading>
    <home-button />
  </div>
</template>

<script>
import { JumHeading } from "@jumbo-supermarkten/kompas";
import HomeButton from "../components/HomeButton";

export default {
  components: {
    JumHeading,
    HomeButton,
  },
  computed: {
    backgroundColor() {
      return { "background-color": `#${this.$route.params.hex}` };
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@jumbo-supermarkten/kompas/styles/variables/colors";
@import "~@jumbo-supermarkten/kompas/styles/variables/spacing";

.image {
  width: 100%;
  max-width: 300px;
}

.hex {
  margin: $spacing-m auto $spacing-l;
}

.jum-heading {
  color: $color-black;
}
</style>
