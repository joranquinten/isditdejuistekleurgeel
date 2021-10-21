<template>
  <div class="nay" :style="backgroundColor">
    <img
      class="image"
      src="../../static/5-color-wrong.png"
      alt="Noem je dit geel!?!?!?"
    />
    <jum-heading v-if="$route.params.hex" h1 class="hex">
      <strong>#{{ $route.params.hex }}</strong>
    </jum-heading>
    <jum-heading v-else h1 class="hex">
      <strong>Het is niet eens een kleur!</strong>
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
