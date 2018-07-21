<template>
  <div
    v-editable="blok"
    :class="$options.name"
  >
    <h1>{{ blok.title }}</h1>
    <div
      :class="[`o-content`, `${$options.name}__body`]"
      v-html="text"
    />
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: `ChapterIntro`,
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    text() {
      return marked(this.blok.text);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/settings/spacings';

.ChapterIntro {
  margin-right: auto;
  margin-left: auto;
  max-width: 32em;
  text-align: center;
  font-size: 1.25em;

  &__body {
    margin-top: setting-spacing(xs);
  }
}
</style>
