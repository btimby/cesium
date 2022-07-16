<template>
  <div class="is-widescreen">
    <div class="columns is-desktop">
      <sidebar
        :collapsed="collapsed"
        :highlight="highlight"
        :menu="menu"
      />
      <div class="column content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';

export default {
  name: 'App',

  components: {
    Sidebar,
  },

  data() {
    const menu = [
        { icon: 'user', label: 'Account', href: '/account' },
        { icon: 'search', label: 'Search', href: '/search' },
        { icon: 'home', label: 'Home', href: '/' },
        { icon: 'rss', label: 'Subscriptions', href: '/subscriptions' },
        { icon: 'settings', label: 'Settings', href: '/settings' },
    ];
    const highlight = menu.findIndex((item) => item.href === this.$route.path);
  
    return {
      collapsed: true,
      menu,
      highlight,
    };
  },

  mounted() {
    console.log('Adding router hook');
    this.$router.beforeEach((to, _, next) => {
      this.highlight = this.menu.findIndex((item) => item.href === to.path);
      this.collapsed = true;
      next();
    });
    window.addEventListener('keydown', this.keyDown);
    this.$bus.$on('back', () => {
      // Open menu and start handling keys again.
      this.collapsed = false;
    });
  },

  destroyed() {
    window.removeEventListener('keydown', this.keyDown);
  },

  methods: {
    menuMove(dir) {
      if (dir === 'up' && this.highlight === 0) {
        this.highlight = this.menu.length - 1;
      } else if (dir === 'down' && this.highlight === this.menu.length - 1) {
        this.highlight = 0;
      } else {
        this.highlight += (dir === 'up') ? -1 : 1;
      }
    },

    keyDown(ev) {
      let keyCode;

      if (window.event) {
        keyCode = ev.keyCode;
      } else if (ev.which) {
        keyCode = ev.which;
      }

      if (this.collapsed) {
        // Emit key presses for other components.
        this.$bus.$emit('keyDown', keyCode);
        return;
      }

      switch (keyCode) {
        case 27:   // Esc key
        case 461:  // Back button
          this.collapsed = !this.collapsed;
          break;

        case 38:   // Up key
          this.menuMove('up');
          break;

        case 40:   // Down key
          this.menuMove('down');
          break;

        case 13:   // Enter / OK
          const item = this.menu[this.highlight];
          this.$router.push({ path: item.href });
          this.collapsed = true;
          break;

        default:
          console.log(`Unknown keyCode: ${keyCode}`);
          break;
      }

      ev.preventDefault();
    },
  },
}
</script>

<style>
/* webos styles */
a {
  cursor: default;
}

body {
  background: #171717;
  overflow: hidden;
}
/* end webos styles */

.content {
  display: inline-block;
}
</style>
