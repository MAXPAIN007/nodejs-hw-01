import { createFakeContact } from '../utils/createFakeContact';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    const existingContacts = await readContacts();
    await writeContacts([...existingContacts, newContact]);
  } catch (error) {
    console.error('An error with adding a contact:', error);
  }
};

addOneContact();
