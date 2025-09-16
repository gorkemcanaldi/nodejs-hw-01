import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const existingContacts = await readContacts();
  const newContacts = createFakeContact();
  const allContacts = existingContacts.concat(newContacts);
  await writeContacts(allContacts);
  console.log('1 adet yeni iletişim bilgisi eklendi.');
};

addOneContact();
