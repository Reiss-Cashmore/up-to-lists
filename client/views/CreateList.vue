<template>
  <div class="page-container">
    <md-toolbar-small title="Up To Lists">
      <md-app-content>
        <md-card>

          <md-card-header>
            <div class="md-title">New List</div>
            <md-field>
              <label>Title</label>
              <md-input v-model="list.title"></md-input>
              <span class="md-helper-text">Keep it short and to the point</span>
            </md-field>
          </md-card-header>
          <md-card-content>
            <md-field>
              <label>summary</label>
              <md-input v-model="list.summary"></md-input>
              <span class="md-helper-text">Keep it short and to the point</span>
            </md-field>
            <md-field>
              <label>Description</label>
              <md-input v-model="list.description"></md-input>
              <span class="md-helper-text">Keep it short and to the point</span>
            </md-field>

            <md-table v-model="list.items">
              <md-table-toolbar md-fixed-header>
                <div class="md-toolbar-section-start">
                  <h1 class="md-title">Entries</h1>
                </div>
                               <md-field>
<md-input v-model="list.columnTitle"></md-input></md-field>
              </md-table-toolbar>

              <md-table-row slot="md-table-row" slot-scope="{ item }">

                <md-table-cell :md-label="list.columnTitle" md-sort-by="name">{{ item.name }}</md-table-cell>

              </md-table-row>
            </md-table>
            <md-field>
              <label>New Item</label>
              <md-input v-model="itemTemp.name"></md-input>
              <span class="md-helper-text">Add item</span>

            </md-field>
            <md-field>
              <md-input v-model="itemTemp.link"></md-input>
              <span class="md-helper-text">Add a link too</span>
            </md-field>
            <md-button v-on:click="addItem()">Add item</md-button>

          </md-card-content>
          <md-card-actions>
            <md-button>action</md-button>
          </md-card-actions>
        </md-card>
      </md-app-content>
    </md-toolbar-small>
  </div>
</template>
<script>
  import ListsService from "services/list.service.js";
  let _listsService = new ListsService();
  export default {
    data: () => ({
      list: {
        name: {},
        summary: '',
        description: '',
        link:'',
        items: [],
        owner: '',
        upvotes: [],
        columnTitle:'Edit column title'
      },
      itemTemp: {
        name: '',
        link: ''
      }


    }),
    methods: {
      addItem(item) {
        this.list.items.push(this.itemTemp)
        this.itemTemp = {
          name: '',
          link: ''
        }
      }
    },
    mounted() {

    }
  };

</script>
<style lang="scss">

</style>
