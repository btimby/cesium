<template>
  <div>
    <div class="video-row"
      v-for="(row, i) in data"
      v-bind:key="i"
    >
      <div class="video"
        v-for="(video, i) in row"
        v-bind:key="i"
      >
        <div class="card my-4 mx-4">
          <div class="card-image">
            <figure class="image is-4x3">
              <img
                class=" my-4"
                :src="video.preview"
                :alt="video.title"
              >
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ video.title }}</p>
                <p class="subtitle is-6">{{ video.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</template>

<script>
const PREVIEWS = [
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.movienewz.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fnew_mutants_2019.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.looper.com%2Fimg%2Fuploads%2F2016%2F06%2Fmistakeslurkingbatmanfeatured5.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F2%2Fc%2F2%2F248188.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fallhdwallpapers.com%2Fwp-content%2Fuploads%2F2015%2F04%2Fted-4.png&f=1&nofb=1',
];

const DATA = [
  {
    preview: PREVIEWS[0],
    title: 'Lorem, ipsum.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    preview: PREVIEWS[1],
    title: 'Lorem, ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    preview: PREVIEWS[2],
    title: 'Lorem, ipsum.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    preview: PREVIEWS[3],
    title: 'Lorem, ipsum.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    preview: PREVIEWS[2],
    title: 'Lorem, ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    preview: PREVIEWS[3],
    title: 'Lorem, ipsum.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    preview: PREVIEWS[0],
    title: 'Lorem, ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    preview: PREVIEWS[1],
    title: 'Lorem, ipsum.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  }
];

export default {
  name: 'Grid',

  data() {
    return {
      data: null,
    };
  },

  mounted() {
    this.fetchData();

    this.$bus.$on('keyDown', (keyCode) => {
      if (keyCode === 27 || keyCode === 461) {
        // Esc / Back
        this.$bus.$emit('back');
      }
    });
  },

  methods: {
    fetchData() {
      const rev = DATA.slice();
      rev.reverse();
      this.data = [DATA, rev];
    },
  },
}
</script>

<style scoped>
.video-row {
  white-space: nowrap;
  position: relative;
  left: 100px;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

.video {
  width: 400px;
  display: inline-block;
}
</style>
