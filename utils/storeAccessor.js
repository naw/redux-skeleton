import emailApp from '../emailApp'

let _store = null;


export default {
  loadStore: function(store) {
    _store = store;
  },

  emailApp: {

    emails: function() {
      const emails = _store.getState().emailApp.emails;
      if(emails.dirty) {
        setTimeout(() => _store.dispatch(emailApp.actions.email.fetchEmails()), 1000);
      }
      return emails;
    },

    folders: function() {
      const folders = _store.getState().emailApp.folders;
      if(folders.dirty) {
       setTimeout(() =>  _store.dispatch(emailApp.actions.folder.fetchFolders()), 1000);
      }
      return folders;
    }
  }
}
