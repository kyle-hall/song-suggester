<template>
  <div id="app">
    <img src="./assets/logo.png">
    <song-list></song-list>
  </div>
</template>

<script>
import SongList from '@/components/SongList'

export default {
  name: 'app',
  components: {
    SongList
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
