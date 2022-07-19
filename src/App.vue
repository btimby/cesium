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
  </div>
</template>

<script>
import Errokees from 'errokees';
import Sidebar from '@/components/Sidebar';
import Grid from '@/components/Grid';
import Player from '@/components/Player';

export default {
  name: 'App',

  components: {
    Sidebar,
    Grid,
    Player,
  },

  data() {
    return {
      errokees: null,
      player: {
        visible: false,
        src: null,
      }
    };
  },

  mounted() {
    this.errokees = new Errokees(null, {
      origin: 'right',
      selectEvent: {
        name: 'errokeesselected',
      },
      deselectEvent: {
        name: 'errokeesdeselected',
      },
    });
    this.$bus.$on('video:play', this.onVideoPlay.bind(this));
    this.$bus.$on('video:stop', this.onVideoStop.bind(this));
  },

  unmounted() {
    this.errokees.disable();
    this.errokees = null;
  },

  methods: {
    onVideoStop() {
      this.errokees.resume();
      this.player.visible = false;
    },

    onVideoPlay(video) {
      console.log('playing', video);
      this.errokees.pause();
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
