console.log('Loaded FireBase')
var firebase = require('firebase')
// initialize your firebase app
firebase.initializeApp({
  apiKey: "AIzaSyBS92B_FscLBZZCXCL4bjsUTQYIhKagwys",
  authDomain: "uptolists.firebaseapp.com",
  databaseURL: "https://uptolists.firebaseio.com",
  projectId: "uptolists",
  storageBucket: "uptolists.appspot.com",
  messagingSenderId: "832121698821"
})

const settings = {
  timestampsInSnapshots: true
}

// save a reference to the firestore database
// to access it in the future
const db = firebase.firestore()
db.settings(settings)
export default class ListsService {

  constructor() {
    console.log('Tools Loaded')
    this.lists = null
  }

  getLists() {
    if (!this.lists) {
      this.lists = []
      this.lists = db.collection('lists')
      return this.lists;
    } else {
      return this.lists
    }
  }
  getListItems(list) {
    return db.collection('lists/' + list + '/items')
  }
  addItemToList(item) {

  }
  upvoteList(list) {

  }
  downvoteList(list) {

  }
  upvoteListItem(item) {

  }
  downvoteListItem(item) {

  }
  deleteList(list) {

  }
  deleteListItem(list, item) {

  }

}
