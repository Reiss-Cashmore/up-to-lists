<template>
  <div v-on:click="log">
    <md-card class="md-accent" md-with-hover>
      <md-ripple>

        <md-card-header>
          <div class="md-title">{{list.name}}</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content v-for="(listItem, index) in listItems" :key="index">
          <span class="votes">
          <md-icon>thumb_up</md-icon>  {{listItem.upvotes - listItem.downvotes}}
          </span> {{listItem.title}}
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
  import ListsService from "services/list.service.js";
  let _listsService = new ListsService();
  export default {
    name: "list-summary",
    props: ["list"],
    data: () => ({
      listItems: []
    }),
    methods: {
      log() {
        console.log(this.list.id);
      }
    },
    mounted() {
      var _listItems = _listsService.getListItems(this.list.id);
      this.$bind("listItems", _listItems);
    }
  };

</script>

<style lang="scss" scoped>
  .list-item-votes {}

</style>
