<template>
  <div
    id="app"
    :class="$options.name"
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
