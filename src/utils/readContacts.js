import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    if (!contacts.trim()) return [];
    return JSON.parse(contacts);
  } catch (error) {
    console.error('Reading error:', error);
    throw error;
  }
};
