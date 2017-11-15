<template>
  <div id="app">
    <h1 class="f-headline">Song Suggestor</h1>
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
        { title: 'Legend of Zelda Theme', learned: false },
        { title: 'Under the Bridge', learned: false },
        { title: 'One Step Closer', learned: false },
        { title: 'White Winter Hymnal', learned: false}
      ]
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
