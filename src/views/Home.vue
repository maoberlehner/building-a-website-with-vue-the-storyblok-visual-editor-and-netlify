<template>
  <div
    v-editable="content"
    v-if="content"
    :class="$options.name"
  >
    <h1>{{ content.title }}</h1>
  </div>
</template>

<script>
import api from '../utils/api';

export default {
  name: `Home`,
  data() {
    return {
      content: null,
    };
  },
  created() {
    this.fetchData();

    if (this.$storyblok) {
      this.$storyblok.init();

      this.$storyblok.on([`change`, `published`], () => window.location.reload());

      this.$storyblok.on(`input`, ({ story }) => {
        this.content = story.content;
      });
    }
  },
  methods: {
    async fetchData() {
      const { data } = await api.get(`cdn/stories/home`);
      this.content = data.story.content;
    },
  },
};
</script>
