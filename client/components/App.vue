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
*{
  font-family: 'Roboto Slab', serif;
/* // font-family: 'Roboto', sans-serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Source Sans Pro', sans-serif;
// font-family: 'Raleway', sans-serif; */
}

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(red, 800), // The primary color of your application
  accent: md-get-palette-color(blue, 500) // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
