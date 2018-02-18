/**
* Function to return a book object that will ensure that
* their will have all the differetn information and builds
* that might be needed in the program
*/
"use strict";
module.exports = function Book(id, title, author, genre, price, publishDate, description){

    let book = {
      id: id,
      title: title,
      author: author,
      genre: genre,
      price: price,
      publishDate: publishDate,
      description: description
    }
    return book;

}
