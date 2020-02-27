const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection(
  {
   host: "localhost",
   user: 'luke',
   password: 'bootcamp',
   database: 'peer_up_db'
  }
 );
}

connection.connect(err => {
 if (err) throw err;

 console.log("Connection established. Thread ID " + connection.threadId);
});

module.exports = connection;
