<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <Sidebar/>
      <router-view/>
    </section>
    <Player
      :visible="player.visible"
      :src="player.src"
    />
    <Loading
      :visible="loading.visible"
    />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Grid from '@/components/Grid';
import Player from '@/components/Player';
import Loading from '@/components/Loading';

export default {
  name: 'App',

  components: {
    Sidebar,
    Grid,
    Player,
    Loading,
  },

  data() {
    return {
      player: {
        visible: false,
        src: null,
      },
      loading: {
        visible: false,
      },
    };
  },

  mounted() {
    this.$bus.$on('video:play', this.onVideoPlay.bind(this));
    this.$bus.$on('video:stop', this.onVideoStop.bind(this));
    this.$bus.$on('busy', () => this.loading.visible = true);
    this.$bus.$on('idle', () => this.loading.visible = false);
  },

  unmounted() {
    this.$errokees.disable();
    this.$errokees = null;
  },

  methods: {
    onVideoStop() {
      this.$errokees.resume();
      this.player.visible = false;
    },

    onVideoPlay(video) {
      console.log('playing', video);
      this.$errokees.pause();
      this.player.src = video.src;
      this.player.visible = true;
    },
  },
}
</script>

<style>
body {
  background-color: black;
}
</style>
