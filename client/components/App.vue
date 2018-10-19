<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont,
      'avenir next', avenir,
      helvetica, 'helvetica neue',
      Ubuntu,
      'segoe ui', arial,
      sans-serif;
  }

  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Material+Icons|Open+Sans:300,400,600,700|Raleway:300,400,500,600,700|Roboto+Slab:300,400,700|Roboto:400,500|Source+Sans+Pro:300,400,600,700');

  * {
    font-family: 'Roboto Slab', serif;
    /* // font-family: 'Roboto', sans-serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Source Sans Pro', sans-serif;
// font-family: 'Raleway', sans-serif; */
  }

  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (primary: md-get-palette-color(red, 800), // The primary color of your application
  accent: md-get-palette-color(blue, 500) // The accent or secondary color
  ));


  @import "~vue-material/dist/theme/all"; // Apply the theme

  .md-table.md-theme-default .md-table-content {
    background: none;
    color: var(--md-theme-default-icon-on-background, rgba(0, 0, 0, 0.54));
         .md-table-head-container {
        height: 100%;
        padding: 0 0;
      }
  }
    .md-app {

    min-height: 99vh;
    max-height: 100vh;
    border: 1px solid rgba(#000, 0.12);
  }

</style>
