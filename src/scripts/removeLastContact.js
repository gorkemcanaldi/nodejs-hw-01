import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('Silinecek contact yok.');
    return;
  }
  contacts.pop();
  await writeContacts(contacts);
  console.log('Son iletişim bilgisi silindi.');
};

removeLastContact();
