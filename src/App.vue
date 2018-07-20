<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    font-weight: 700;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
