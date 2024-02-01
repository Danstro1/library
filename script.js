
class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get bookTitle() {
        return this.title;
    }

    get bookAuthor() {
        return this.author;
    }

    get bookPages() {
        return this.pages;
    }

    get bookRead() {
        return this.read;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
        this.count = 0;
    }

    addBook(title, author, pages, read){
        this.myLibrary.push(new Book(title.value, author.value, pages.value, read.checked));
        this.count++;
    }

    displayBook(){
        const cards = document.querySelector('.cards');
        const newDiv = document.createElement('div');
        const cardTitle = document.createElement('div');
        const cardAuthor = document.createElement('div');
        const cardPages = document.createElement('div');
        const cardRead = document.createElement('button');
        const cardRem = document.createElement('button');

        cardTitle.textContent = this.myLibrary[this.count - 1].bookTitle;
        cardAuthor.textContent = this.myLibrary[this.count - 1].bookAuthor;
        cardPages.textContent = this.myLibrary[this.count - 1].bookPages;
        cardRem.textContent = 'Remove'
    
        cardTitle.classList.add('row-book');
        cardAuthor.classList.add('row-book');
        cardPages.classList.add('row-book');
        cardRem.classList.add('but-rem');
        newDiv.classList.add('card');
    
    
        cards.appendChild(newDiv);
        newDiv.appendChild(cardTitle);
        newDiv.appendChild(cardAuthor);
        newDiv.appendChild(cardPages);
        newDiv.appendChild(cardRead);
        if(read.checked){
            cardRead.textContent = 'Read';
            cardRead.classList.add('but-yes');
        }else{
            cardRead.textContent = 'Not Read';
            cardRead.classList.add('but-no');  
        }
        newDiv.appendChild(cardRem);
    
        cardRead.addEventListener('click', () =>{
            if(cardRead.classList.contains('but-yes')){
              cardRead.classList.remove('but-yes');
              cardRead.classList.add('but-no');
              cardRead.textContent = 'Not Read';
            }
            else{
              cardRead.classList.remove('but-no');
              cardRead.classList.add('but-yes');
              cardRead.textContent = 'Read';
            }
       });
    
       cardRem.addEventListener('click', () =>{
            cards.removeChild(newDiv);
       })
    }
}

const submit = document.querySelector('.submit-button');
const dialog = document.querySelector('#dlg');
const dlgButton = document.querySelector('.add-book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const body = document.querySelector('body');

const lib = new Library();

dlgButton.addEventListener('click', () => {dialog.showModal();});

submit.addEventListener('click', e => {
    if(title.value !== "" && author.value !== "" && pages.value !== ""){
        e.preventDefault();
        lib.addBook(title, author, pages, read);
        lib.displayBook();
        title.value = "";
        author.value = "";
        pages.value = "";
        read.checked = false;
        dialog.close();
    }
});

pages.addEventListener('input', e =>{
    e.target.value = e.target.value > +e.target.max ? +e.target.max : e.target.value
})
