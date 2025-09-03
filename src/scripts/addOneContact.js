import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    await writeContacts(newContact);
    console.log('A contact was added to the list.');
  } catch (error) {
    console.error('An error with adding a contact:', error);
  }
};

addOneContact();
