/* eslint-disable no-unused-vars */
import { timeDate, date } from './modules/displayTime.js';
import Library from './modules/classLibrary.js';
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
