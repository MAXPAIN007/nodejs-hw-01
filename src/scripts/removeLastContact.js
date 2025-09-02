import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

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
    console.error('An error wist deleting last contact:', error);
  }
};

removeLastContact();
