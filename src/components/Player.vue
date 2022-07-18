<template>
  <div
    :class="{ overlay: true, hidden: !visible }"
  >
    <video
      autoplay
      ref="video"
      :controls="controls"
      :src="src"
    ></video>
  </div>
</template>

<script>
export default {
  name: 'Player',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: null,
    },
  },

  mounted() {
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  },

  unmounted() {
    document.removeEventListener('keydown', this.onKeyDown.bind(this));
  },

  data() {
    return {
      controls: false,
    };
  },

  watch: {
    visible(newValue, oldValue) {
      if (oldValue && !newValue) {
        // Hiding.
        this.$refs.video.pause();
      } else if (!oldValue && newValue) {
        // Showing.
        this.$refs.video.play();
      }
    },
  },

  methods: {
    onKeyDown(ev) {
      const video = this.$refs.video;

      if (ev.key === 'Pause') {
        video.pause();
      } else if (ev.key === 'MediaPlayPause') {
        if (this.$refs.video.playing) {
          video.pause();
        } else {
          video.play();
        }
      } else if (ev.key === 'ArrowRight' || ev.key === 'MediaFastForward') {
        video.currentTime += 10;
      } else if (ev.key === 'ArrowLeft' || ev.key === 'MediaRewind') {
        video.currentTime -= 10;
      } else if (ev.key === 'Cancel') {
        video.pause();
        this.$emit('stop');
      }
    },
  },
}
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
}

.hidden {
  display: none;
}

.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */   
  height: 100%;
  width: 100%;
  position: absolute; /* Stay in place */
  z-index: 1000; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Black fallback color */
  background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}
</style>
