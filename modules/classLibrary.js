const bookList = JSON.parse(localStorage.getItem('storedBooks')) || [];

export default class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const addBtn = document.querySelector('.btn');
    const titleEl = document.querySelector('#title');
    const authorEl = document.querySelector('#author');
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
    const bookListEl = document.querySelector('#book-list');

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
      const bookListEl = document.querySelector('#book-list');
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
