<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script>
  import AuthService from "services/auth.service.js";
  let _authService = new AuthService();
export default {
  name: 'auth',
  mounted() {
   _authService.createAccountWithEmail();
    }
}
</script>