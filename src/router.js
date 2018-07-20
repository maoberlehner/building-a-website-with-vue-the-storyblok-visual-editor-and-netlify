import Router from 'vue-router';
import Vue from 'vue';

const About = () => import(`./views/About.vue`);
const Home = () => import(`./views/Home.vue`);

Vue.use(Router);

export default new Router({
  mode: `history`,
  routes: [
    {
      path: `/`,
      name: `home`,
      component: Home,
    },
    {
      path: `/about`,
      name: `about`,
      component: About,
    },
  ],
});
