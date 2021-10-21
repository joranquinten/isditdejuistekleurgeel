<template>
  <form class="form" @submit="checkColor">
    <jum-input-label for="color">
      <strong>Check hier of je de juiste kleur geel hebt</strong>
    </jum-input-label>
    <jum-input-field
      ref="color"
      v-model="color.value"
      name="color"
      :valid="color.isValid"
      type="text"
      placeholder="Vul hier je HEX code in"
      @change="updateColor(color.value)"
    />
    <jum-button primary @click="checkColor">Check mijn geel</jum-button>
  </form>
</template>

<script>
import Color from "color";

import {
  JumInputLabel,
  JumInputField,
  JumButton,
} from "@jumbo-supermarkten/kompas";

export default {
  components: {
    JumInputLabel,
    JumInputField,
    JumButton,
  },
  data() {
    return {
      color: {
        value: "",
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.color.$el.focus();
    });
  },
  methods: {
    checkColor() {
      this.color.isValid = undefined;

      const hexColor = this.colorToHex(this.color.value);
      const slugColor = hexColor.toUpperCase().replace(/^#/gi, "");

      if (hexColor.toLowerCase() === "#eeb717") {
        this.color.isValid = true;
        this.$router.push(`/yay/${slugColor}`);
      }
      if (hexColor.toLowerCase() === "#fdc513") {
        this.color.isValid = true;
        this.$router.push(`/old/${slugColor}`);
      }
      if (hexColor.toLowerCase() === "#ffc917") {
        this.color.isValid = true;
        this.$router.push(`/derailed/${slugColor}`);
      }
      if (!this.color.isValid) {
        const redirectHash = this.colorToHex(this.color.value)
          ? `${this.colorToHex(this.color.value).replace(/^#/gi, "")}`
          : "";
        this.$router.push(`/nay/${redirectHash}`);
      }
    },
    colorToHex(item) {
      if (item !== "" && !!this.validateColor(item)) {
        const color = Color(item);
        return color.hex();
      }
      return "";
    },
    validateColor(color) {
      try {
        return !!Color(color);
      } catch {
        // eslint-disable-next-line no-console
        console.warn("Not a valid color");
        return false;
      }
    },
    updateColor(color) {
      this.color.value = color;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@jumbo-supermarkten/kompas/styles/variables/colors";
@import "~@jumbo-supermarkten/kompas/styles/variables/spacing";

.form {
  border-radius: $spacing-s;
  background-color: $color-white;
  color: $color-black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .jum-input-label {
    margin-bottom: $spacing-s;
  }

  .jum-input-field {
    margin-bottom: $spacing-m;
    width: 100%;
    max-width: 360px;
  }

  .jum-button {
    margin: 0 auto;
  }
}
</style>
