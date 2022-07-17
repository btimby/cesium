<template>
  <div>
    <Sidebar/>
  </div>
</template>

<script>
import Errokees from 'errokees';
import Sidebar from '@/components/Sidebar';

export default {
  name: 'App',

  components: {
    Sidebar,
  },

  data() {
    return {
      errokees: null,
    };
  },

  mounted() {
    this.errokees = new Errokees();
  },

  unmounted() {
    this.errokees.disable();
    this.errokees = null;
  },
}
</script>

<style>
body {
  background-color: black;
}
</style>
