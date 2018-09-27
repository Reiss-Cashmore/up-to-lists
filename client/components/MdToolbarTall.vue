<template>
  <div>
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>
        <div class="md-toolbar-row md-toolbar-offset">
          <div class="md-display-1" v-line-clamp:20="3">{{title}}</div>
        </div>

      </md-app-toolbar>
      <md-app-drawer :style="{'transform': 'translate3D(0, '+ miniDrawerOffset + 'px, 0)'}" md-persistent="mini"
        :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <md-list>
          <md-list-item to="/">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>
          <md-list-item to="/">
            <md-icon>search</md-icon>
            <span class="md-list-item-text">Search all lists</span>
          </md-list-item>
          <md-list-item to="/">
            <md-icon>playlist_add</md-icon>
            <span class="md-list-item-text">Create a list</span>
          </md-list-item>
          <md-list-item to="/">
            <md-icon>account_box</md-icon>
            <span class="md-list-item-text">Login / Register</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <slot></slot>
    </md-app>
  </div>
</template>

<script>
  export default {
    data: () => ({
      menuVisible: false,
      miniDrawerOffset: 196
    }),
    props: ['title'],
    methods: {

      toggleMenu() {
        this.menuVisible = !this.menuVisible;
      }
    },
    mounted: function () {
      this.$watch(() => {
        return this.$children[0].MdApp.toolbar.height
      }, function (newVal, oldVal) {
        this.miniDrawerOffset = newVal;
      })
    }
  }

</script>

<style lang="scss" scoped>
  .md-drawer.md-persistent-mini {

    &:not(.md-active) {
      z-index: 1;
    }

    &.md-active {
      width: 250px;

      -webkit-transform: translate3D(0, 0, 0);
      transform: translate3D(0, 0, 0) !important;

    }
  }

  .md-app-toolbar {
    height: 196px;
  }

  .md-display-1{
        display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    position: relative;
    margin-bottom: 25px;
    white-space: normal;
    padding: 0;
        margin-bottom: 9px;
  }
  .md-toolbar-offset{
  align-self: flex-end;
  position: relative;
      margin-right: 15px;
}


</style>
