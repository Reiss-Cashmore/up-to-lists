<template>
  <div class="page-container">
    <md-toolbar-tall :title="list.name">
      <md-app-content>
        <md-card>
          <md-card-header>
             <h1 class="md-title">{{list.name}}</h1>
            <h2 class="md-subheading">{{list.description}}</h2>
          </md-card-header>
          <md-card-content>
            <md-table v-model="listItems">
     <md-table-toolbar md-fixed-header>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Entries</h1>
        </div>

        <div class="md-toolbar-section-end">
         <md-button >+ Add Entry</md-button>  </div>
      </md-table-toolbar>

              <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Voting" ><md-button class="md-icon-button md-dense"><md-icon>thumb_up</md-icon></md-button><md-button class="md-icon-button md-dense"><md-icon>thumb_down</md-icon></md-button></md-table-cell>

                <md-table-cell md-label="Name" md-sort-by="name">{{ item.title }}</md-table-cell>
           
                 <md-table-cell md-label="Votes" md-numeric>{{ item.upvotes - item.downvotes }}</md-table-cell>
              
               </md-table-row>
            </md-table>
          </md-card-content>
          <md-card-actions>
            <md-button>action</md-button>
            <md-button>action</md-button>
          </md-card-actions>
        </md-card>
      </md-app-content>
    </md-toolbar-tall>
  </div>
</template>

<script>
  import ListsService from "services/list.service.js";
  let _listsService = new ListsService();
  import AuthService from "services/auth.service.js";
  let _authService = new AuthService();

  export default {
    data: () => ({
      list: {},
      listItems: []
    }),
    methods:{
      addEntry(){
        if(!_authService.user){
          this.$router.push('/auth')
        }else{
          // Add ntry
        }
      }
    },
    props: ['id'],
    mounted: function () {
      var _list = _listsService.getList(this.id)
      this.$bind("list", _list)
      var _listItems = _listsService.getListItems(this.id);
      this.$bind("listItems", _listItems);
    }
  };

</script>

<style lang="scss" scoped>

</style>
