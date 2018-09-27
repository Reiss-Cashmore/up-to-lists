<template>
  <div>
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{title}}</span>
      </md-app-toolbar>


      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
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
      menuVisible: false
    }),
    props:['title'],
    methods: {

      toggleMenu() {
        this.menuVisible = !this.menuVisible;
      }
    }
  }

</script>

<style lang="scss" scoped>
 
  .md-toolbar {
        min-height: 63px;
  }

.md-app.md-fixed .md-app-scroller {
    overflow-x: hidden;
}
</style>
