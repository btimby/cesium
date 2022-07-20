<template>
  <div
    :class="{ overlay: true, hidden: !visible }"
  >
    <img
      :src="spinner"
      class="spinner"
    />
  </div>
</template>

<script>
import spinner from '@/assets/loading.gif';

export default {
  name: 'Loading',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      spinner,
    };
  },
}
</script>

<style scoped>
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

.spinner {
  width: 96px;
  height: 96px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -48px; /* Half the height */
  margin-left: -48px; /* Half the width */
}
</style>
