<template>
  <div v-on:click="viewList">

    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <v-icon>thumb_up</v-icon>{{list.upvotes}}
          <h3 class="headline mb-0">{{list.name}}</h3>
          <span class="grey--text">{{list.summary}}</span>
        </div>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="listItems" hide-actions class="elevation-1">
          <template slot="items" slot-scope="entry">
            <td class="">{{ entry.title }}</td>
            <td class="">{{ entry.upvotes - entry.downvotes }}</td>
          </template>
        </v-data-table>
        <span v-if="listItems - 7 > 0" class="md-caption pull-right">{{listItems.length - 7}} more entries </span>
      </v-card-text>

      <v-card-actions>
        <v-btn flat color="orange">Add Entry</v-btn>
        <v-btn flat color="orange">Save</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  import ListsService from "services/list.service.js";
  let _listsService = new ListsService();
  export default {
    name: "list-summary",
    props: ["list", "to"],
    data: () => ({
      listItems: [],
      headers:[{
  text: 'name',
  sortable: false,
  width: '70'
}, {
  text: 'votes',
  sortable: false,
  width: '40'
}]
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
