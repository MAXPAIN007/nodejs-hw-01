import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentData = await readContacts();
    if (currentData.length === 0) {
      console.log('Array is empty');
      return [];
    }
    currentData.pop();
    await writeContacts(currentData);
    console.log(`The last contact was deleted. Left: ${currentData.length}`);
  } catch (error) {
    console.error('An error with deleting last contact:', error);
  }
};

removeLastContact();
