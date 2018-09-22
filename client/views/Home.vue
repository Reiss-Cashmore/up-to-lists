<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Up To Lists</span>
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
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-50 md-small-size-75 md-xsmall-size-100">
              <md-empty-state md-icon="playlist_add" md-label="Create your first community list" md-description="Lorem">
                <md-button class="md-primary md-raised">Create a list</md-button>
              </md-empty-state>
          </div>
          <list-summary  v-for="(list, index) in lists" :list="list" :key="index" class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
            
          </list-summary>
        </div>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam,
        similique, quo recusandae placeat dicta asperiores modi sint ea.
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import ListSummary from "components/ListSummary";
  import ListsService from "services/list.service.js";
  let _listsService = new ListsService();
  export default {
    components: {
      ListSummary
    },
    data: () => ({
      menuVisible: false,
      lists: []
    }),
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible;
      },
      log(){
        console.log(this.lists)
      }
    },
    firestore: {
      lists: _listsService.getLists()
    }
  };

</script>
<style lang="scss" scoped>
  .md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, 0.12);
  }

  .md-toolbar {
    min-height: 64px;
  }

  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

</style>
