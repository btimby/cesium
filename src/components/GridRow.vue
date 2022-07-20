<template>
  <div ref="row">
    <p
        class="title channel-name is-3 has-text-light"
    >{{ channel.name }}</p>
    <div class="row">
      <div
        class="card has-background-dark errokees-selectable video"
        data-ek-activate-event-name="errokees:activate"
        v-for="(video, i) in channel.videos"
        :key="i"
        :id="`video-${video.id}`"
        @errokees:activate="playVideo(video.id)"
        @errokees:selected="scrollTop(video.id)"
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
          <div class="content">
            <p
                class="title is-6 has-text-light"
                style=""
            >{{ video.title }}</p>
          </div>
        </div>
      </div>
      <div
        v-if="channel && channel.videos.length > 5"
        class="card has-background-dark errokees-selectable return"
        data-ek-activate-event-name="errokees:activate"
        @errokees:activate="onReturn"
      >
        <div class="card-image">
          <figure class="image is-centered is-vcentered">
            <b-icon
              style="margin-top: 176px"
              icon="arrow-u-left-bottom"
              size="is-large"
              type="is-light"
            >
            </b-icon>
          </figure>
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
    },

    scrollTop(id) {
      // scrollIntoView() is broken on webOS. Also, it is not quite what we
      // want since we want the row top vs. the video left.
      const row = this.$refs.row;
      const vid = document.getElementById(`video-${id}`);
      const top = row.offsetTop, rowWidth = row.offsetWidth;
      const left = vid.offsetLeft, vidWidth = vid.offsetWidth;
      console.log(row, top, rowWidth);
      console.log(vid, left, vidWidth);
      row.parentNode.scrollTo({
        behavior: 'smooth',
        top,
      });
      vid.parentNode.scrollTo({
        behavior: 'smooth',
        left: (left + (vidWidth / 4)) - (rowWidth / 2),
      });
    },

    onReturn() {
      const div = this.$refs.row.children[1].firstChild;
      this.$errokees.select(div);
    },
  }
}
</script>

<style scoped>
.channel-name {
  padding-top: 10px;
  margin-bottom: 10px
}

.video {
  min-width: 480px;
  max-width: 480px;
  height: 400px;
  margin: 4px;
}

.return {
  min-width: 72px;
  max-width: 72px;
  height: 400px;
  margin: 4px;
}

.title {
  max-height: 128px;
  text-overflow: ellipsis;
}

.poster {
  min-width: 476;
}

.row {
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 404;
}

.errokees-selectable {
  border: 2px solid transparent;
}

.errokees-selected {
  border: 2px solid #757575;
}
</style>
