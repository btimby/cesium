<template>
  <div>
    <h1>{{ items.name }}</h1>
    <div class="scrollable">
      <v-card
        flat
        class="mx-3 errokees-selectable"
        min-width="240"
        height="320"
        v-for="(video, i) in items.videos"
        :key="i"
        @errokees:activate="playVideo(video.id)"
      >
        <v-img :src="video.poster" height="150"></v-img>
        <v-card-title>{{ video.title }}</v-card-title>
        <v-card-subtitle>{{ video.description }}</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridRow',

  props: {
    items: {
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
.scrollable {
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 360;
}

.errokees-selectable {
  border: 1px solid transparent;
}
.errokees-selected {
  border: 1px solid #757575;
  background-color: #757575;
}
</style>
