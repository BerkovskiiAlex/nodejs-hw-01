/** @format */

import * as contactsService from "./db/contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "contacts":
      const allContacts = await contactsService.getContacts();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contactsService.getContactById(id);
      return console.log(oneContact);
    case "addContact":
      const newContact = await contactsService.addContact(name, email, phone);
      return console.log(newContact);
    case "removeContactById":
      const deleteContact = await contactsService.removeContact(id);
      return console.log(deleteContact);
  }
};

// invokeAction({ action: "contacts" });
// invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "addContact",
//   name: "Fedya",
//   email: "FedyaForever@gmail.com",
//   phone: "(692) 802-2213949",
// });
// invokeAction({ action: "removeContactById", id: "z8pMhUzdYGKcgkFMJtlXK" });
