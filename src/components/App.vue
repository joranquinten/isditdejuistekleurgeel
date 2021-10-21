<template>
  <div id="app">
    <jum-icon-registry />
    <router-view class="full" />
  </div>
</template>

<script>
import { JumIconRegistry } from "@jumbo-supermarkten/kompas";

export default {
  name: "App",
  components: {
    JumIconRegistry,
  },
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style scoped lang="scss">
@import "~@jumbo-supermarkten/kompas/styles/variables/colors";
@import "~@jumbo-supermarkten/kompas/styles/variables/spacing";

#app {
  text-align: center;
  color: $color-white;
}

.full {
  min-height: calc(100vh - 100px);
  min-width: calc(100vw - #{$spacing-m} - #{$spacing-m});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px $spacing-m 20px;
}
</style>
