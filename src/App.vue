<template>
  <div id="app">
    <Headers />
    <RouterView :key="$route.params.id"/>
  </div>
</template>

<script>
import Headers from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Headers,

  },
  data() {
    return {

    }
  }
}

  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
