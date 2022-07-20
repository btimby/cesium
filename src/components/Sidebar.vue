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
      :can-cancel="false"
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
            data-ek-activate-event-name="click"
            data-ek-activate-event-target="a"
            class="errokees-selectable"
          >
            <b-menu-list>
              <b-menu-item
                icon="home"
                label="Home"
                tag="router-link"
                to="/"
              ></b-menu-item>
            </b-menu-list>
          </div>
          <div
            @errokeesselected="onMenuSelected"
            @errokeesdeselected="onMenuDeselected"
            data-ek-activate-event-name="click"
            data-ek-activate-event-target="a"
            class="errokees-selectable"
          >
            <b-menu-list>
              <b-menu-item
                icon="magnify"
                label="Search"
                tag="router-link"
                to="/search"
              ></b-menu-item>
            </b-menu-list>
          </div>
          <div
            @errokeesselected="onMenuSelected"
            @errokeesdeselected="onMenuDeselected"
            data-ek-activate-event-name="click"
            data-ek-activate-event-target="a"
            class="errokees-selectable"
          >
            <b-menu-list>
              <b-menu-item
                icon="cog-outline"
                label="Settings"
                tag="router-link"
                to="/settings"
              ></b-menu-item>
            </b-menu-list>
          </div>
          <div
            @errokeesselected="onMenuSelected"
            @errokeesdeselected="onMenuDeselected"
            data-ek-activate-event-name="click"
            data-ek-activate-event-target="a"
            class="errokees-selectable"
          >
            <b-menu-list>
              <b-menu-item
                icon="key-outline"
                label="Accounts"
                tag="router-link"
                to="/subscriptions"
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
  background-color: hsl(0deg, 0%, 96%);
  color: hsl(0deg, 0%, 21%);
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
      width: 130px;
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