import emailApp from '../emailApp'

export default function generatePageLoaders(dispatch) {

  return {

    appShow: function() {
      dispatch(emailApp.actions.folder.fetchFolders());
    },

    emailsIndex: function() {
      dispatch(emailApp.actions.email.fetchEmails());
    },

    foldersIndex: function() {
      dispatch(emailApp.actions.folder.fetchFolders());
    },

    folderShow: function() {
      dispatch(emailApp.actions.email.fetchEmails());
    }
  }
}
