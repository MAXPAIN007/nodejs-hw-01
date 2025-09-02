import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentData = await readContacts();
    for (let i = 0; i < number; i++) {
      const contacts = createFakeContact();
      currentData.push(contacts);
    }
    await writeContacts(currentData);
    console.log(`${number} contacts were created and added to the list.`);
  } catch (error) {
    console.error('Error with generating contacts:', error);
    throw error;
  }
};

generateContacts(5);
