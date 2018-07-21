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
  name: `Home`,
  components: {
    StoryLandingPage,
  },
  mixins: [
    storyblokMixin,
  ],
  data() {
    return {
      slug: `home`,
    };
  },
};
</script>
