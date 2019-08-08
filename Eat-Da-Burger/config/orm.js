var connection = require('./connection');

//he methods you will need to use in order to retrieve and store data in your database.
// * `selectAll()`
// * `insertOne()`ll
// * `updateOne()



var orm = {
    selectAll: function(tableInput,cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) {
            throw err;
          }
          cb(result);
   
      });
    },


    insertOne: function(whatToSelect, table, orderCol) {
      var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
      console.log(queryString);
      connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    
    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
      var queryString =
        "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
      connection.query(
        queryString,
        [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };



module.exports = orm;