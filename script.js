let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const display = document.querySelector(".display");

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  display.innerHTML = "";
  view();
}

function view() {
  for (let book of myLibrary) {
    const div = document.createElement("div");

    const button = document.createElement("button");
    button.textContent = "Remove";
    button.classList.add("remove-button");
    button.dataset.id = book.id;

    const title = document.createElement("p");
    title.textContent = "Title : " + book.title;
    div.appendChild(title);

    const author = document.createElement("p");
    author.textContent = "Author : " + book.author;
    div.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = "Pages : " + book.pages;
    div.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = "Have Read : " + (book.read == true ? "Yes" : "No");
    div.appendChild(read);

    const toggle_button = document.createElement("button");
    toggle_button.classList.add("toggle-button");
    toggle_button.textContent = "toggle";
    toggle_button.dataset.id = book.id;
    div.appendChild(toggle_button);

    div.appendChild(button);
    display.appendChild(div);
  }
}

const modal = document.querySelector(".modal");
const addBook = document.querySelector(".add-new-book");

addBook.addEventListener("click", () => {
  modal.showModal();
});

const authorInput = document.querySelector("#author");
authorInput.addEventListener("input", () => authorInput.setCustomValidity(""));

const form_submit_button = document.querySelector(".form-submit-button");
form_submit_button.addEventListener("click", (e) => {
  e.preventDefault();
  if (authorInput.validity.valueMissing) {
    authorInput.setCustomValidity("The author name must be filled!");
    authorInput.reportValidity();
  } else {
    authorInput.setCustomValidity("");
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    addBookToLibrary(title.value, author.value, pages.value, read.checked);

    const form = document.querySelector("form");
    form.reset();
    modal.close();
  }
});

display.addEventListener("click", (e) => {
  if (e.target.matches(".remove-button")) {
    myLibrary = myLibrary.filter((book) => {
      return e.target.dataset.id != book.id;
    });
    display.innerHTML = "";
    view();
  }
  if (e.target.matches(".toggle-button")) {
    for (let book of myLibrary) {
      if (e.target.dataset.id == book.id) {
        book.toggle();
        break;
      }
    }
    display.innerHTML = "";
    view();
  }
});

Book.prototype.toggle = function () {
  this.read = !this.read;
};
