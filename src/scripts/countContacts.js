import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Toplam ${contacts.length} iletişim bilgisi var.`);
};

countContacts();
