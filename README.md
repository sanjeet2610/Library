# Library App

A simple JavaScript Library app built as part of The Odin Project.  
Users can add books, remove them, and toggle their read status. The project focuses on DOM manipulation, constructor functions, event delegation, and dynamic UI rendering.

---

## Live Demo

https://sanjeet2610.github.io/Library/

## Repository

https://github.com/sanjeet2610/Library

---

## Features

- Add books using a modal form (title, author, pages, read)
- Unique ID for each book using crypto.randomUUID()
- Dynamic rendering through a view() function
- Remove books from the library
- Toggle read status (Yes / No)
- Event delegation for handling remove and toggle buttons
- Automatic form reset and clean UI updates

---

## Built With

- HTML5
- CSS3
- JavaScript (ES6)
- `<dialog>` modal element

---

## How It Works

- Books are stored in an array called `myLibrary`
- `addBookToLibrary()` creates a new Book object and adds it to the array
- `view()` rebuilds the entire UI from the array data to keep everything in sync
- Remove and toggle buttons use event delegation and book IDs via `data-id`
- `Book.prototype.toggle()` flips the read status (Yes/No)
