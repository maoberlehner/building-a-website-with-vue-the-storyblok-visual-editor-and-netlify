<template>
  <div
    id="app"
    :class="[$options.name, `o-container`]"
  >
    <header :class="`${$options.name}__header`">
      <router-link
        :class="`${$options.name}__logo`"
        to="/"
      >
        Fancy Company
      </router-link>

      <nav :class="`${$options.name}__nav`">
        <router-link
          :class="`${$options.name}__navLink`"
          to="/"
        >
          Home
        </router-link> |
        <router-link
          :class="`${$options.name}__navLink`"
          to="/about"
        >
          About
        </router-link>
      </nav>
    </header>

    <router-view/>

    <footer :class="`${$options.name}__footer`">
      &copy; Fancy Company
    </footer>
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style lang="scss">
@import './assets/scss/settings/colors';
@import './assets/scss/settings/spacings';
@import './assets/scss/generic/base';
@import '{ .o-container } from ~@avalanche/object-container';

.App {
  &__header {
    display: flex;
    padding-top: setting-spacing(m);
    padding-bottom: setting-spacing(m);
    justify-content: space-between;
    border-bottom: 1px solid setting-color(b, gray);
  }

  &__logo,
  &__navLink {
    color: setting-color(text);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>
