<template>
  <div>
    <img
      class="image"
      src="../../static/1-home.png"
      alt="Is dit de juiste kleur geel"
    />
    <color-check />
  </div>
</template>
<script>
import ColorCheck from "../components/ColorCheck";

export default {
  components: {
    ColorCheck,
  },
};
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  max-width: 300px;
}
</style>
