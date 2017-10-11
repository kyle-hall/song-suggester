<template>
  <div id="app">
    <img src="./assets/logo.png">
    <song-list :songs="songs"></song-list>
  </div>
</template>

<script>
import SongList from '@/components/SongList'

export default {
  name: 'app',
  components: {
    SongList
  },
  data() {
    return {
      songs: [
        { title: 'Legend of Zelda Theme' },
        { title: 'Under the Bridge' },
        { title: 'One Step Closer' },
        { title: 'White Winter Hymnal'}
      ]
    }
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
