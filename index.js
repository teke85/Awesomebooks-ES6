/* eslint-disable no-unused-vars */

import Library from './modules/classLibrary.js';
import { DateTime } from './modules/luxon.js';
import refresh, {
  listMenu,
  Link,
  contactEl,
  formMenu,
  contactMenu,
  formLink,
  heading,
} from './modules/display.js' // eslint-disable-line

const displayBooks = new Library();

displayBooks.addBook();
displayBooks.renderBooks();

const timeDate = document.getElementById('date');
const displayDateAndTime = () => {
  const dt = DateTime.now();
  timeDate.textContent = dt
    .setLocale('en-US')
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
setInterval(displayDateAndTime, 1000);
