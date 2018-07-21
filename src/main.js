import StoryblokVue from 'storyblok-vue';
import Vue from 'vue';

import App from './App.vue';
import Img from './plugins/img';
import router from './router';

Vue.use(Img);
Vue.use(StoryblokVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount(`#app`);
