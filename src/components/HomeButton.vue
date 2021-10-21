<template>
  <jum-button secondary @click="home">
    <jum-icon icon="jum-refresh" left />
    Probeer het nog eens
  </jum-button>
</template>

<script>
import { JumButton, JumIcon } from "@jumbo-supermarkten/kompas";

export default {
  components: {
    JumButton,
    JumIcon,
  },
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>
