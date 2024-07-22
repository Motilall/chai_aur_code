// +++++++++++++++++++++ Activity 1 +++++++++++++++++++++++

// task 1 

// let books = {
//     title: 'Harry Potter',
//     author: 'J.K. Rowling',
//     year: 1997,

//     // this is task 3 
//     details: function(){
//         console.log(`the title of the book is ${this.title}, the author of this book is ${this.author} and the release date of this book is ${this.year}`);
//     },

//     // method to update the year
//     updateYear: function(newYear){
//         this.year = newYear;
//     }

// };
// console.log(books);

// task 2

// console.log(books.title);
// console.log(books.author);
// console.log(books.year);







// ++++++++++++++++++++++ Activity 2 ++++++++++++++++++++++++++++++++

// task 3

// books.details();

// task 4

// books.updateYear(2000);
// console.log(books.year);
// books.details();





// +++++++++++++++++++++++ Activity 3 ++++++++++++++++++++++++++++++++++

// task 5

const library = {
    name: "Fantsy library",
    books: [
        {
            title: "The Little Prince", 
            author: "Antoine de Saint-Exupéry",
            year: 1943
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            year: 1954
        },
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            year: 1997
        },
    ],
};
console.log(library);

// taks  6 
// access the name of the library
console.log(library.name);
// access all the books names

const newBook = library.books.map((book) => book.title);
console.log(newBook);
