import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    const existingContacts = await readContacts();
    await writeContacts([...existingContacts, newContact]);
    console.log('A contact was added to the list.');
  } catch (error) {
    console.error('An error with adding a contact:', error);
  }
};

addOneContact();
