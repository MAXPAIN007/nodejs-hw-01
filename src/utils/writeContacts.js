import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const raw = await readContacts();
    const current = Array.isArray(raw) ? raw : [];

    if (Array.isArray(updatedContacts) && updatedContacts.length === 0) {
      await fs.writeFile(PATH_DB, '[]', 'utf-8');
      return;
    }

    if (
      Array.isArray(updatedContacts) &&
      updatedContacts.length === current.length - 1
    ) {
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(updatedContacts, null, 2),
        'utf-8',
      );
      return;
    }

    if (current.length === 0) {
      const toWrite = Array.isArray(updatedContacts)
        ? updatedContacts
        : [updatedContacts];
      await fs.writeFile(PATH_DB, JSON.stringify(toWrite, null, 2), 'utf-8');
      return;
    }

    const next = Array.isArray(updatedContacts)
      ? [...current, ...updatedContacts]
      : [...current, updatedContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(next, null, 2), 'utf-8');
  } catch (error) {
    console.error('Problem with writing data to the file:', error);
    throw error;
  }
};
