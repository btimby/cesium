<template>
  <div>
    <p
        class="title is-3 has-text-light"
        style="margin-top: 30px; margin-bottom: 10px"
    >{{ channel.name }}</p>
    <div class="scrollable">
      <div
        class="card has-background-dark errokees-selectable video"
        data-ek-activated-event="errokees:activate"
        v-for="(video, i) in channel.videos"
        :key="i"
        @errokees:activate="playVideo(video.id)"
      >
        <div class="card-image">
            <figure>
                <img
                    class="poster"
                    :src="video.poster"
                    style="width: 320px"
                />
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p
                        class="title is-6 has-text-light"
                        style=""
                    >{{ video.title }}</p>
                </div>
            </div>
            <div class="content">{{ video.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridRow',

  props: {
    channel: {
      type: Object,
      default: null
    }
  },

  methods: {
    playVideo (id) {
      this.$emit('video:play', id)
    }
  }
}
</script>

<style scoped>
.video {
  min-width: 320px;
  max-width: 320px;
  margin: 4px;
  text-overflow: ellipsis;
}

.poster {
    width: 320;
    height: 200;
}

.scrollable {
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 360;
}

.errokees-selectable {
  border: 2px solid transparent;
}

.errokees-selected {
  border: 2px solid #757575;
}
</style>
