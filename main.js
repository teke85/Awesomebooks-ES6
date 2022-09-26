const bookListEl = document.querySelector('#book-list');
const addBtn = document.querySelector('.btn');
const titleEl = document.querySelector('#title');
const authorEl = document.querySelector('#author');
const listMenu = document.querySelector('#book-list');
const Link = document.querySelector('#link');
const contactEl = document.querySelector('#contact-link');
const formMenu = document.querySelector('#form-wrapper');
const contactMenu = document.querySelector('#contact');
const formLink = document.querySelector('#add-link');
const date = document.querySelector('.date');
const heading = document.querySelector('#heading-h1');

// display date & time dynamically
const timeDate = () => {
  const newDate = new Date();
  date.innerHTML = `${newDate.toDateString()}, ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}pm `;
  setTimeout(timeDate, 1000);
};
window.onload = timeDate();

const refresh = () => {
  contactMenu.style.display = 'none';
  formMenu.style.display = 'none';
  listMenu.style.display = 'block';
  heading.style.display = 'block';
};
window.onload = refresh();

contactEl.addEventListener('click', () => {
  contactMenu.style.display = 'block';
  formMenu.style.display = 'none';
  listMenu.style.display = 'none';
  heading.style.display = 'none';
  Link.style.color = '#000';
  contactEl.style.color = 'blue';
  formLink.style.color = '#000';
});

Link.addEventListener('click', () => {
  contactMenu.style.display = 'none';
  formMenu.style.display = 'none';
  listMenu.style.display = 'block';
  heading.style.display = 'block';
  Link.style.color = 'blue';
  contactEl.style.color = '#000';
  formLink.style.color = '#000';
});

formLink.addEventListener('click', () => {
  contactMenu.style.display = 'none';
  formMenu.style.display = 'block';
  listMenu.style.display = 'none';
  heading.style.display = 'none';
  Link.style.color = '#000';
  contactEl.style.color = '#000';
  formLink.style.color = 'blue';
});

const bookList = JSON.parse(localStorage.getItem('storedBooks')) || [];

class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    addBtn.addEventListener('click', () => {
      const title = titleEl.value;
      const author = authorEl.value;
      if (title && author) {
        const addNewBook = {
          title,
          author,
        };
        bookList.push(addNewBook);
        localStorage.setItem('storedBooks', JSON.stringify(bookList));
        this.renderBooks();
        // form.reset();
        titleEl.value = '';
        authorEl.value = '';
      }
    });
  }

  renderBooks() {
    if (!bookList.length) {
      bookListEl.innerHTML = 'Hey There👋, Please add a book';
      bookListEl.style.textAlign = 'center';
      bookListEl.style.fontWeight = '700';
    } else {
      let empty = '';
      bookList.forEach((each, index) => {
        empty += `
        <div class="library-book">
        <div class="library-collection">
        <p class="book-title">"${each.title}"</p> 
        <p>by</p>
        <p class="book-author">${each.author}</p>  </div>  
        <button type="button" class="remove-btn gradient-style" id=${index}>Remove</button>
    </div>`;
      });
      bookListEl.innerHTML = empty;
    }

    const removeBook = () => {
      const removeBtn = [...document.getElementsByClassName('remove-btn')];
      removeBtn.forEach((item) => {
        item.addEventListener('click', (e) => {
          bookList.splice(e.target.id, 1);
          localStorage.setItem('storedBooks', JSON.stringify(bookList));
          this.renderBooks();
        });
      });
    };
    removeBook();
  }
}
const displayBooks = new Library();

displayBooks.addBook();
displayBooks.renderBooks();
// toggleWindow();
