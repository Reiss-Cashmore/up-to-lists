import {
  Firebase
} from "./firebase.init";
export default class AuthService {

  constructor() {
    this.magicEmailLinkSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'http://penguin.linux.test:8002/#/',
      // This must be true.
      handleCodeInApp: true
    }
    Firebase.app.auth().onAuthStateChanged((user) => this.handleAuthStateChange(user));
  }

  handleAuthStateChange(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // Send back to where they started this.$router.push('/success')
      // ...
    } else {
      // User is signed out.
      // ...
    }
  }
  LogInWithmagicEmailLink(email) {
    Firebase.app.auth().sendSignInLinkToEmail(email, this.actionCodeSettings)
      .then(function () {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch(function (error) {
        // Some error occurred, you can inspect the code: error.code
      });
  }

  createAccountWithEmail() {
    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        Firebase.instance.auth.GoogleAuthProvider.PROVIDER_ID,
        Firebase.instance.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    var ui = new firebaseui.auth.AuthUI(Firebase.instance.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }
  logInWithEmail(email, password) {
    Firebase.app.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  logOut() {
    Firebase.app.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
  }


}
