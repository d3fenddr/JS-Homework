const books = document.querySelectorAll('#book-list li');
    let lastSelected = null;

    books.forEach(book => {
      book.addEventListener('click', (e) => {
        if (e.ctrlKey) {
          book.classList.toggle('selected');
        } else if (e.shiftKey && lastSelected) {
          let start = Math.min(Array.from(books).indexOf(lastSelected), Array.from(books).indexOf(book));
          let end = Math.max(Array.from(books).indexOf(lastSelected), Array.from(books).indexOf(book));
          for (let i = start; i <= end; i++) {
            books[i].classList.add('selected');
          }
        } else {
          books.forEach(b => b.classList.remove('selected'));
          book.classList.add('selected');
        }
        lastSelected = book;
      });
    });