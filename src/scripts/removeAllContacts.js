import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
  console.log('Tüm iletişim bilgileri silindi.');
};

removeAllContacts();
