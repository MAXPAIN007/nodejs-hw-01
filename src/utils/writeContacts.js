import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const currentData = await readContacts();
    if (currentData.length === 0) {
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(updatedContacts, null, 2),
        'utf-8',
      );
    } else {
      currentData.push(updatedContacts);
      await fs.writeFile(PATH_DB, JSON.stringify(currentData, null, 2), {
        encoding: 'utf-8',
      });
    }
  } catch (error) {
    console.error('Problem with writing data to the file:', error);
    throw error;
  }
};
