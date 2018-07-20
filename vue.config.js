const nodeSassMagicImporter = require(`node-sass-magic-importer`);

const PREVIEW_TOKEN = `FhmgjfZzj7CDrWNKZ64C9Qtt`;
const PUBLIC_TOKEN = `fGkN4W1jkMYNjwOJb2LwPAtt`;

process.env.VUE_APP_ACCESS_TOKEN = process.env.STORYBLOK_BRIDGE ? PREVIEW_TOKEN : PUBLIC_TOKEN;
process.env.VUE_APP_STORYBLOK_BRIDGE = process.env.STORYBLOK_BRIDGE;

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
};
