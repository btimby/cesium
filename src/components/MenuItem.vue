<template>
  <li>
    <router-link
      :to="href"
      v-bind:class="{ highlight,  'link': true }"
    >
      <icon-base
        :name="lowerIconName"
        :class="iconSize"
      /><span v-if="label" class="is-size-3 label">{{ label }}</span>
    </router-link>
  </li>
</template>

<script>
import IconBase from 'feather-icons-vue';

export default {
  name: 'MenuItem',

  components: {
    IconBase,
  },

  props: {
    iconName: {
      type: String,
    },
    iconSize: {
      type: String,
      default: 'xl',
    },
    label: {
      type: String,
    },
    href: {
      type: String
    },
    highlight: {
      type: Boolean,
    },
  },

  computed: {
    lowerIconName() {
      console.log(this.icon);
      return this.iconName.toLowerCase();
    }
  },
}
</script>

<style scoped>
svg {
  padding-right: 3px;
}

.link {
  display: table;
}

.label {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}

.highlight {
  background-color: whitesmoke;
  color: #363636;
}

.router-link-exact-active {
  background-color: #de5730;
  color: whitesmoke;
}
</style>