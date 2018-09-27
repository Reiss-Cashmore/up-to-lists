<template>
  <div v-on:click="viewList">

    <md-card   class="md-accent" md-with-hover>
      <md-ripple>

        <md-card-header>
          <md-icon>thumb_up</md-icon> {{list.upvotes}}
          <div class="md-title">{{list.name}}</div>
          <div class="md-subhead">{{list.summary}}</div>

        </md-card-header>

        <md-card-content>
          <md-table class="md-dense" v-model="listItems">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="Chromebook">{{ item.title }}</md-table-cell>
              <md-table-cell md-label="Votes" md-numeric>{{ item.upvotes - item.downvotes }}</md-table-cell>

            </md-table-row>
          </md-table>

          <span v-if="listItems - 7 > 0" class="md-caption pull-right">{{listItems.length - 7}} more entries</span>

        </md-card-content>

        <md-card-actions>
          <md-button>Add entry</md-button>
          <md-button>Save</md-button>
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
    props: ["list", "to"],
    data: () => ({
      listItems: []
    }),
    methods: {
      viewList: function () {
        this.$router.push('list/' + this.list.id)
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

  .md-content.md-theme-default {
    background-color: transparent;

    &.md-dense {}
  }

  .md-table {
    .md-table-cell {
      height: 40px;
    }
  }

</style>
