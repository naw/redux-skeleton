import uid from 'uid'
import Faker from 'faker'
import _ from 'lodash'
window.Faker = Faker;
// This is just the fake API so we don't
// need a server-application running

let folders = [
                { id: '1', name: 'Inbox' },
                { id: '2', name: "Work" },
                { id: '3', name: "Personal" },
                { id: '4', name: 'Archive' }
             ]


const fakeEmail = function(folders) {
  return {
    id: uid(),
    sender: Faker.name.findName(),
    subject: Faker.internet.domainWord(),
    body: Faker.lorem.paragraphs(),
    folderId: _.sample(folders.map((folder) => folder.id))
  }
}

let emails = [];
for(let x = 1; x < 8; x++) {
  emails.push(fakeEmail(folders))
}

class Api {

  constructor() {
    this.emails = emails;
    this.folders = folders;

    setInterval(() => {
      if(this.folders.length > 0) {
        this.emails.push(fakeEmail(this.folders))
      }
    }, 30000);
  }

  addFolder(name) {
    this.folders = this.folders.concat({ id: uid(), name: name });
  }

  removeFolder(folderId) {
    this.emails = this.emails.filter((email) => email.folderId !== folderId);
    this.folders = this.folders.filter((folder) => folder.id !== folderId);
  }

  removeEmail(emailId) {
    this.emails = this.emails.filter((email) => email.id !== emailId);
  }

  moveEmailToFolder(emailId, folderId) {
    const email = this.emails.find((email) => email.id === emailId);
    email.folderId = folderId;
  }

  fetchEmails() {
    return [this.emails, Date.now()];
  }

  fetchFolders() {
    return [this.folders, Date.now()];
  }
}

export const api = new Api();

