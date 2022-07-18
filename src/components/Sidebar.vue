<template>
  <section>
    <b-sidebar
      type="is-dark"
      :fullheight="true"
      :fullwidth="false"
      :overlay="false"
      :right="false"
      mobile="reduce"
      :reduce="!open"
      :show="visible"
      open
    >
      <div class="p-1">
        <img
          id="logo"
          :src="icon"
          alt="Video player"
        />
        <b-menu>
          <div
            @errokeesselected="onMenuSelected"
            @errokeesdeselected="onMenuDeselected"
            class="errokees-selectable"
          >
            <b-menu-list>
              <b-menu-item
                icon="information-outline"
                label="Info"
              ></b-menu-item>
            </b-menu-list>
          </div>
          <div
            @errokeesselected="onMenuSelected"
            @errokeesdeselected="onMenuDeselected"
            class="errokees-selectable"
          >
            <b-menu-list>
              <b-menu-item
                label="Expo"
                icon="link"
                tag="router-link"
                target="_blank"
                to="/expo"
              ></b-menu-item>
            </b-menu-list>
          </div>
          <div
            @errokeesselected="onMenuSelected"
            @errokeesdeselected="onMenuDeselected"
            class="errokees-selectable"
          >
            <b-menu-list>
              <b-menu-item
                icon="logout"
                label="Logout"
              ></b-menu-item>
            </b-menu-list>
          </div>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
import icon from '@/assets/icon.png';

export default {
  name: 'Sidebar',

  props: {
    visible: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
      open: false,
      icon,
    };
  },

  methods: {
    onMenuSelected() {
      console.log('Selected');
      this.open = true;
    },

    onMenuDeselected() {
      console.log('Deselected');
      this.open = false;
    }
  },
};
</script>

<style lang="scss">
#logo {
  margin-bottom: 10;
  width: 40px;
}

.p-1 {
  padding: 1em;
}

.errokees-selected {
  background-color: white;
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

.b-sidebar {
    .sidebar-content {
      width: 120px;
        &.is-mini {
          width: 48px;
            &:not(.is-mini-expand),
            &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
                .menu-list {
                    li {
                        a {
                            span:nth-child(2) {
                                display: none;
                            }
                        }
                        ul {
                            padding-left: 0;
                            li {
                                a {
                                    display: inline-block;
                                }
                            }
                        }
                    }
                }
                .menu-label:not(:last-child) {
                    margin-bottom: 0;
                }
            }
        }
    }
}

.is-mini-expand {
    .menu-list a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>