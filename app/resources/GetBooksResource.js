(function () {
    "use strict";
    // Geting conection to the other classes enables to use theire functions
    let LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
      //console.log(booksJson); // writes out the json object array as in the terminal
      //console.log(books) //writse out the books as an array in the terminal running vagrant
      // We are getting the callback function from the parameter the returning the expected json object.
      LibraryDAO.readXMLFile(function (getBooks){
        callback(JSON.stringify(getBooks.toArray()));
      });
    };

}());
