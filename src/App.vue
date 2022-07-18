<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <Sidebar
        :visible="true"
      />
      <Grid
        @video:play="playVideo"
      />
    </section>
    <Player
      :visible="player.visible"
      :src="player.src"
      @stop="onPlayerStop"
    />
  </div>
</template>

<script>
import Errokees from 'errokees';
import Sidebar from '@/components/Sidebar';
import Grid from '@/components/Grid';
import Player from '@/components/Player';

const BACK = 'GoBack';
const PLAY = 'MediaPlayPause';
const PAUSE = 'Pause';
const FFD = 'MediaFastForward';
const RWD = 'MediaRewind';
const STOP = 'Cancel';
const CHANUP = 'PageUp';
const CHANDN = 'PageDown';

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
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  },

  unmounted() {
    this.errokees.disable();
    this.errokees = null;
  },

  methods: {
    onKeyDown(ev) {
      if (ev.key === 'GoBack') {
        this.player.visible = !this.player.visible;
      }
    },

    onPlayerStop() {
      this.errokees.resume();
      this.player.visible = false;
    },

    playVideo(video) {
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
