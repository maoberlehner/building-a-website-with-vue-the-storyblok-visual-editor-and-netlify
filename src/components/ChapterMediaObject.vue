<template>
  <div
    v-editable="blok"
    :class="$options.name"
  >
    <div
      :class="{
        [`${$options.name}__layout`]: true,
        [`${$options.name}__layout--reverse`]: blok.image_position === `left`,
      }"
    >
      <div :class="[`o-content`, `${$options.name}__body`]">
        <h2>{{ blok.title }}</h2>
        <div v-html="text"/>
      </div>
      <div :class="`${$options.name}__figure`">
        <img
          :src="$img(blok.image, 450, 340)"
          :srcset="`${$img(blok.image, 900, 680, { quality: 40 })} 2x`"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: `ChapterMediaObject`,
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

.ChapterMediaObject {
  $image-size: 450px;

  overflow: hidden;

  &__layout {
    display: flex;
    margin-top: -(setting-spacing(m));
    margin-left: -(setting-spacing(xxl));
    flex-wrap: wrap;

    > * {
      padding-top: setting-spacing(m);
      padding-left: setting-spacing(xxl);
    }

    align-items: center;

    &--reverse {
      flex-direction: row-reverse;
    }
  }

  &__body {
    flex-basis: 24em;
    flex-grow: 1;
  }

  &__figure {
    margin-right: auto;
    max-width: $image-size;
    flex-basis: 16em;
    flex-grow: 1;
    box-sizing: content-box;
  }
}
</style>
