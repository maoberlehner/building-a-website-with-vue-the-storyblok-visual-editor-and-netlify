import StoryblokClient from 'storyblok-js-client';

const api = new StoryblokClient({
  accessToken: process.env.VUE_APP_ACCESS_TOKEN,
  cache: {
    clear: `auto`,
    type: `memory`,
  },
});

if (process.env.VUE_APP_STORYBLOK_BRIDGE === `true`) {
  api.get = function get(slug, params) {
    return StoryblokClient.prototype.get.call(this, slug, { ...params, version: `draft` });
  };
}

export default api;
