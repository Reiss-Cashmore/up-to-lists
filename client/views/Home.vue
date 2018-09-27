<template>
  <div class="page-container" >
    <md-toolbar-small title="Up To Lists">

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
      </md-app-content>

    </md-toolbar-small>
  </div>
</template>

<script>
  import ListSummary from "components/ListSummary";
  import ListsService from "services/list.service.js";
  let _listsService = new ListsService();

  import MdToolbarSmall from "components/MdToolbarSmall"
  export default {
    components: {
      ListSummary,
      MdToolbarSmall
    },
    data: () => ({
      lists: []
    }),
    methods: {

    },
    firestore: {
      lists: _listsService.getLists()
    }
  };

</script>
<style lang="scss" >


 
</style>
