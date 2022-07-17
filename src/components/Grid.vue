<template>
    <div>
      <GridRow
        v-for="(item, i) in videos"
        :key="i"
        :items="item"
        @video:play="playVideo"
      />
    </div>  
</template>

<script>
import { LoremIpsum } from 'lorem-ipsum'
import Errokees from 'errokees'
import GridRow from '@/components/GridRow'

const lorem = new LoremIpsum()
const NAMES = ['New', 'Watch again', 'Sports', 'Animals', 'Automotive']
const POSTERS = [
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.movienewz.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fnew_mutants_2019.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.looper.com%2Fimg%2Fuploads%2F2016%2F06%2Fmistakeslurkingbatmanfeatured5.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F2%2Fc%2F2%2F248188.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fallhdwallpapers.com%2Fwp-content%2Fuploads%2F2015%2F04%2Fted-4.png&f=1&nofb=1',
];

function makeId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export default {
  name: 'GridView',

  components: {
    GridRow
  },

  data () {
    const dataset = []

    for (let i = 0; i < NAMES.length; i++) {
      const videos = []
      const section = {
        name: NAMES[i],
        videos
      }

      for (let ii = 0; ii < 15; ii++) {
        videos.push({
          id: makeId(10),
          title: lorem.generateWords(2),
          description: lorem.generateSentences(1),
          poster: POSTERS[i + ii % POSTERS.length - 1]
        })
      }

      dataset.push(section)
    }

    return {
      ek: null,
      videos: dataset,
    }
  },

  methods: {
    playVideo(id) {
      console.log('Playing video:', id)
    }
  },

  mounted () {
    this.ek = new Errokees({
      activateEventName: 'errokees:activate',
    });
  },

  unmounted () {
    this.ek.disable()
  }
}
</script>

<style scoped>

</style>
