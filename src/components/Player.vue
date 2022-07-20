<template>
  <div
    :class="{ overlay: true, hidden: !visible }"
  >
    <video
      autoplay
      ref="video"
      :controls="false"
      :src="src"
    ></video>
  </div>
</template>

<script>
// NOTE: keyCodes
const BACK = 461;
const ESC = 27;
const PLAY = 179;
const PAUSE = 19;
const FFD = 228;
const RWD = 227;
const STOP = 169;
const CHANUP = 33;
const CHANDN = 34;
const RIGHT = 39;
const LEFT = 37;

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
    const video = this.$refs.video;
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    video.addEventListener('playing', () => this.$bus.$emit('idle'));
    video.addEventListener('stalled', () => this.$bus.$emit('busy'));
    video.addEventListener('waiting', () => this.$bus.$emit('busy'));
  },

  unmounted() {
    document.removeEventListener('keydown', this.onKeyDown.bind(this));
  },

  watch: {
    src() {
      this.$bus.$emit('busy');
    },

    visible(newValue, oldValue) {
      const video = this.$refs.video;

      if (oldValue && !newValue) {
        // Hiding.
        video.pause();
      } else if (!oldValue && newValue) {
        // Showing.
        video.play();
      }
    },
  },

  methods: {
    onKeyDown(ev) {
      const video = this.$refs.video;

      switch (ev.keyCode) {
        case PAUSE:
          video.pause();
          break;

        case PLAY:
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
          break;

        case RIGHT:
        case FFD:
          video.currentTime += 10;
          break;

        case LEFT:
        case RWD:
          video.currentTime -= 10;
          break;

        case STOP:
        case BACK:
        case ESC:
          this.$bus.$emit('video:stop');
          break;

        default:
          console.log('Unknown key:', ev.keyCode);
          break;
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
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow: hidden;
}
</style>
