<template>
  <div class="page-container">{{list}}
<md-app>
 <md-field>
      <label>Initial Value</label>
      <md-input v-model="initial"></md-input>
    </md-field>
</md-app>
  </div>
</template>
<script>
  import ListsService from "services/list.service.js";
  let _listsService = new ListsService();
  export default {
    components: {

    },
    data: () => ({

    }),
    methods: {
    },
    mounted() {
      var _list = _listsService.getList(this.id);
      this.$bind("list", _list);
    }
  };

</script>
<style lang="scss">

</style>
