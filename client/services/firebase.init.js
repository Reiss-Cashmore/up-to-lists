var _firebase = require('firebase')
var firebaseui = require('firebaseui');

let config = {
   ...{  apiKey: "AIzaSyBS92B_FscLBZZCXCL4bjsUTQYIhKagwys",
   authDomain: "uptolists.firebaseapp.com",
   databaseURL: "https://uptolists.firebaseio.com",
   projectId: "uptolists",
   storageBucket: "uptolists.appspot.com",
   messagingSenderId: "832121698821"}
};

let settings = {timestampsInSnapshots: true};

let app = _firebase.initializeApp(config)
let realtimedb = app.database();
let firestore = app.firestore();
firestore.settings(settings)


export const Firebase = {
  app: app,
  realtimedb: realtimedb,
  firestore: firestore,
  instance: _firebase

};