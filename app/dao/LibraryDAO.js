(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');

    //catalog ret
    var getBooks = require('../dao/GetBooks');
    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
          var parser = new xml2js.Parser();
          fs.readFile(__dirname + '/books.xml', function(err, data) {
            parser.parseString(data, function (err, result) {
              if(err){
                console.log('Could not load/read the xml file error:'+err);
              }else{
                callback(new getBooks(result));
              }
            });
          });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {
          var builder = new xml2js.Builder();
          var xml = builder.buildObject(data.ListXml);
          fs.writeFile(__dirname + '/books.xml', xml, function(err) {
            if(err){
              console.log('Error did not write the xml file properly');
            }else{
              console.log('writing xml file completed');
            }
          });
        }
    };

    module.exports = LibraryDAO;
}());
