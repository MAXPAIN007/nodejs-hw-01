import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  try {
    const currentData = await readContacts();
    return currentData;
  } catch (error) {
    console.error('An error with getting all contacts:', error);
  }
};

console.log(await getAllContacts());
