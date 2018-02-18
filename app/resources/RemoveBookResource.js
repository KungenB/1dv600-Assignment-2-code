(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (id, callback) {
      LibraryDAO.readXMLFile(function (getBooks){
        getBooks.deleteBook(id);
        callback(LibraryDAO.writeXMLFile(getBooks));
      });
    };

}());
