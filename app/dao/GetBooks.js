"use strict";
let book = require('../dao/Book');
module.exports = class GetBooks {
  constructor(books){
    this.ListXml = books;
  }
  toArray() {
    let Books = [];
    this.ListXml.catalog.book.forEach (book=>{
      Books.push(this.xmlToBook(book));
    })
    return Books;
  }

  xmlToBook(XMLBook) {
      return new book(XMLBook.$.id, XMLBook.title[0], XMLBook.author[0], XMLBook.genre[0], XMLBook.price[0], XMLBook.publish_date[0], XMLBook.description[0]);
  }
  deleteBook(id){
    let position = this.bookPostitionById(id);
    this.ListXml.catalog.book.splice(position,1);
  }
  bookPostitionById(id){
    let i=0;
    for(i=0;i<this.ListXml.catalog.book.length;i++){
      if (this.ListXml.catalog.book[i].$.id === id){
        return i;
      }
    }
  }
};
