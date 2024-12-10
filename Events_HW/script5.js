const books = document.querySelectorAll('#book-list li');
books.forEach(book => {
    book.addEventListener('click', () => {
        books.forEach(b => b.style.backgroundColor = '');
        book.style.backgroundColor = 'orange';
    });
});