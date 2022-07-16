<template>
  <aside v-bind:class="{ collapsed, menu: true }">
    <div>
      <img
        id="logo"
        src="icon.png"
        alt="Cesium logo"
      />
    </div>
    <div class="m-2">
    <Menu>
      <MenuItem
        v-for="(item, index) in menu"
        v-bind:key="index"
        :highlight="index === highlight"
        :href="item.href"
        :icon-name="item.icon"
        :label="item.label"
      />
    </Menu>
    </div>
  </aside>
</template>

<script>
import Menu from '@/components/Menu';
import MenuItem from '@/components/MenuItem';

export default {
  name: 'Sidebar',

  components: {
    Menu,
    MenuItem,
  },

  props: {
    collapsed: {
      type: Boolean,
    },
    menu: {
      type: Array,
    },
    highlight: {
      type: Number,
    },
  },
}
</script>

<style>
.menu {
  position: sticky;
  display: inline-block;
  vertical-align: top;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  width: 360px;
  top: 0;
  bottom: 0;
  padding: 6px;
}

#logo {
  width: 80px;
  padding-bottom: 10px;
  margin-left: 12px;
  margin-top: 12px;
}

.collapsed {
  width: 115px;
}

.collapsed span {
  display: none !important;
}
</style>
