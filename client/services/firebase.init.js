var _firebase = require('firebase')
var firebaseui = require('firebaseui');
import {firebaseConfig} from 'services/firebase.config.js'
let config = {
   ...firebaseConfig
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