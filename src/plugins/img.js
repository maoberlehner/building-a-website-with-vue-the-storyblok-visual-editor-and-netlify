import Vue from 'vue';

const defaultFilters = {
  quality: 80,
};

export default {
  install() {
    Vue.prototype.$img = function $img(
      src = ``,
      width = 0,
      height = 0,
      filters = {},
    ) {
      const parts = [`img2.storyblok.com`];

      if (height > 0 || width > 0) {
        parts.push(`${width}x${height}`);
      }

      const filtersWithDefaults = { ...defaultFilters, ...filters };
      const filterNames = Object.keys(filtersWithDefaults);

      parts.push(`filters:${filterNames.map(name => `${name}(${filtersWithDefaults[name]})`).join(`:`)}`);

      return src.replace(`a.storyblok.com`, parts.join(`/`));
    };
  },
};
