const myLibrary = [];
let count = 0;

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    myLibrary.push(new Book(title.value, author.value, pages.value, read.value));

    const cards = document.querySelector('.cards');
    const newDiv = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardPages = document.createElement('div');
    const cardRead = document.createElement('button');
    const cardRem = document.createElement('button');

    cardTitle.textContent = myLibrary[count].title;
    cardAuthor.textContent = myLibrary[count].author;
    cardPages.textContent = myLibrary[count].pages;
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

    title.value = null;
    author.value = null;
    pages.value = null;

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

    count++;
}

const submit = document.querySelector('.submit-button');
const dialog = document.querySelector('#dlg');
const dlgButton = document.querySelector('.add-book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const body = document.querySelector('body');


dlgButton.addEventListener('click', () => {dialog.showModal();});

submit.addEventListener('click', e => {
    if(title.value !== "" && author.value !== "" && pages.value !== ""){
        e.preventDefault();
        addBookToLibrary();
        dialog.close();
    }
});

pages.addEventListener('input', e =>{
    e.target.value = e.target.value > +e.target.max ? +e.target.max : e.target.value
})
