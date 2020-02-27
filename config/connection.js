const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "aldrdnsj7kbvooca",
    password: "meu1gdhfmdvxgqjp",
    database: "jajf6v9y8hrtiu3g"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;