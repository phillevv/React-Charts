const express = require('express');
const app = express();
const port = 3000;  
var mysql  = require('mysql');  

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'pass',
    database : 'test'
});

app.get('/users', (req, res) => {
    connection.connect();
    connection.query('SELECT * from users', function(err, rows, fields) {
        if (!err) {
            res.send(JSON.stringify(rows));
        } else {
            console.log('Error while performing Query.');
        }
    });
    connection.end();
});

app.listen(port, () => console.log(`Server started on port ${port}`));