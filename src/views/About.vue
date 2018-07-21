<template>
  <div :class="$options.name">
    <story-landing-page
      v-if="content"
      :content="content"
    />
  </div>
</template>

<script>
import storyblokMixin from '../mixins/storyblok';

import StoryLandingPage from '../components/StoryLandingPage.vue';

export default {
  name: `About`,
  components: {
    StoryLandingPage,
  },
  mixins: [
    storyblokMixin,
  ],
  data() {
    return {
      slug: `about`,
    };
  },
};
</script>
