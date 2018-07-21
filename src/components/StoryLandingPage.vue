<template>
  <div
    :class="[
      $options.name,
      `o-vertical-spacing`,
      `o-vertical-spacing--xxl`,
    ]"
  >
    <component
      v-for="chapter in content.chapters"
      :key="chapter._uid"
      :blok="chapter"
      :is="`${chapter.component.replace(/_/g, `-`)}`"
    />
  </div>
</template>

<script>
import ChapterIntro from './ChapterIntro.vue';
import ChapterMediaObject from './ChapterMediaObject.vue';

export default {
  name: `StoryLandingPage`,
  components: {
    ChapterIntro,
    ChapterMediaObject,
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
};
</script>
