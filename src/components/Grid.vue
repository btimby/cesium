<template>
  <div id="grid">
    <GridRow
      v-for="(channel, i) in videos"
      :key="i"
      :channel="channel"
      @video:play="playVideo"
    />
  </div>  
</template>

<script>
import GridRow from '@/components/GridRow';

function makeId(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const TIMCAST = [
  {
    name: 'IRL',
    videos: [
      {
        id: makeId(10),
        title: 'Keean Bexte & Daniel Turner: Violence Erupting In Cities, Brawl Breaks Out Over Bad Service, Tim Calls Out AOC For Malicious Evil',
        src: 'https://sp.rmbl.ws/s8/2/f/C/C/5/fCC5e.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/f/C/C/5/fCC5e.OvCc.jpg',
      },
      {
        id: makeId(10),
        title: 'Taylor Silverman Member Podcast: BLM Heckles Crying Mother After Black man Tried To Kill Her Family, Crew Talks Abortion And Porn Addictions',
        src: 'https://sp.rmbl.ws/s8/2/n/x/N/4/nxN4e.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/n/x/N/4/nxN4e.OvCc.jpg',
      },
      {
        id: makeId(10),
        title: 'Vanessa Santos Member Podcast: Democrats Push HOAX About Little Girl Getting Abortion, Abortionist Could Be CRIMINALLY Charged For Not Reporting Rape',
        src: 'https://sp.rmbl.ws/s8/2/R/r/R/1/RrR1e.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/R/r/R/1/RrR1e.OvCc.jpg',
      },
      {
        id: makeId(10),
        title: 'Kurt Schlichter Member Podcast: The Scenarios of Civil War, How The Spark Will Happen And Who Will Fight',
        src: 'https://sp.rmbl.ws/s8/2/3/v/2/0/3v20e.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/3/v/2/0/3v20e.OvCc.jpg',
      },
      {
        id: makeId(10),
        title: 'Adrianne Curry Member Podcast: Trump ROASTS Elon, Adrianne Says Libby Has Epic Titties',
        src: 'https://sp.rmbl.ws/s8/2/7/l/c/0/7lc0e.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/7/l/c/0/7lc0e.OvCc.jpg',
      },
      {
        id: makeId(10),
        title: 'Dave Landau Member Podcast: Jill Biden Calls Hispanics "Tacos" Crew Has To See Naked Hunter Biden But Its Funny',
        src: 'https://sp.rmbl.ws/s8/2/J/U/k/Z/JUkZe.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/J/U/k/Z/JUkZe.OvCc.jpg',
      },
    ],
  },
  {
    name: 'Cast Castle',
    videos: [
      {
        id: makeId(10),
        title: 'Timcast Live Hangout Event featuring Ryan Long and Danny Polishchuck',
        src: 'https://sp.rmbl.ws/s8/2/r/p/q/B/rpqBc.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/r/p/q/B/rpqBc.OvCc.jpg',
      }
    ],
  },
  {
    name: 'Green Room',
    videos: [
      {
        id: makeId(10),
        title: 'Green Room #25: Viva Frei, Robert Barnes and Chris Pavlovski',
        src: 'https://sp.rmbl.ws/s8/2/s/Q/O/H/sQOHe.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/1/s/Q/O/H/sQOHe.OvCc-small-The-Green-Room-26-Viva-Barn.jpg',
      },
      {
        id: makeId(10),
        title: 'Green Room #24: Dennis Prager',
        src: 'https://sp.rmbl.ws/s8/2/m/q/O/H/mqOHe.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/1/m/q/O/H/mqOHe.OvCc-small-The-Green-Room-25-Dennis-Pr.jpg',
      },
      {
        id: makeId(10),
        title: 'Green Room #23: Jorge Ventura, Richie McGinniss, and Taylor Silverman',
        src: 'https://sp.rmbl.ws/s8/2/d/y/G/E/dyGEe.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/1/d/y/G/E/dyGEe.OvCc-small-The-Green-Room-24-Jorge-Ven.jpg',
      },
      {
        id: makeId(10),
        title: 'Green Room #22: Andy Ngo',
        src: 'https://sp.rmbl.ws/s8/2/8/x/r/A/8xrAe.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/1/8/x/r/A/8xrAe.OvCc-small-The-Green-Room-23-Andy-Ngo.jpg',
      },
    ],
  },
  {
    name: 'Tales from the Inverted World',
    videos: [
      {
        id: makeId(10),
        title: 'THE HOUSE OF SEVEN GHOSTS: PART 1',
        src: 'https://sp.rmbl.ws/s8/2/n/W/B/2/nWB2e.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/1/n/W/B/2/nWB2e.OvCc-small-The-House-of-Seven-Ghosts-P.jpg',
      },
      {
        id: makeId(10),
        title: 'Inverted World Member\'s Only Podcast: The Inverted World Book',
        src: 'https://sp.rmbl.ws/s8/2/o/C/j/Y/oCjYc.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/o/C/j/Y/oCjYc.OvCc.jpg',
      },
      {
        id: makeId(10),
        title: 'Inverted World Members Only Podcast: The Long Island Monster with Alex Ayala',
        src: 'https://sp.rmbl.ws/s8/2/x/x/4/T/xx4Tc.caa.2.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/x/x/4/T/xx4Tc.OvCc.2.jpg',
      },
      {
        id: makeId(10),
        title: 'Inverted World Members Only Podcast: The Aliens with Tony Merkel',
        src: 'https://sp.rmbl.ws/s8/2/Q/n/W/Q/QnWQc.caa.mp4?u=lf6yv&b=1',
        poster: 'https://sp.rmbl.ws/s8/6/Q/n/W/Q/QnWQc.OvCc.jpg',
      },
    ],
  }
];

export default {
  name: 'Grid',

  components: {
    GridRow,
  },

  data () {
    return {
      videos: TIMCAST,
    }
  },

  methods: {
    playVideo(id) {
      let video;

      this.videos.forEach(o1 => {
        const v = o1.videos.find(o2 => o2.id === id);
        if (v) {
          video = v;
        }
      });

      if (video) {
        this.$bus.$emit('video:play', video);
      }
    }
  },
}
</script>

<style lang="scss">
#grid {
  padding-left: 140px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
}

.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    // min-height: 100vh;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
        // min-height: 100vh;
    }
}
</style>
