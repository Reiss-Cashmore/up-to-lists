import { Firebase } from "./firebase.init";
export default class ListsService {

  constructor() {
    console.log('Tools Loaded')
    this.lists = null
 }

  getLists() {
    if (!this.lists) {
      this.lists = []
      this.lists = Firebase.firestore.collection('lists')
      return this.lists;
    } else {
      return this.lists
    }
  }
  getListItems(listId) {
    return Firebase.firestore.collection('lists/' + listId + '/items')
  }
  getList(listId) {
    return Firebase.firestore.doc('lists/' + listId)
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
