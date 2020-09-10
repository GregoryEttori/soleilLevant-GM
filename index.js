let app = require('express')();
let http = require('http').createServer(app);
const bodyParser = require('body-parser');
const sqlite = require('sqlite3').verbose();
let path = require('path');
let cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://192.168.1.13:8080',
    optionsSuccessStatus: 200
}

const db_name = path.join(__dirname, "data", "SoleilLevant.db");
console.log(db_name);
const db = new sqlite.Database(db_name, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successful connection to the database");
});

const sql_create = `CREATE TABLE IF NOT EXISTS Hint (
  Message_ID INTEGER PRIMARY KEY AUTOINCREMENT,
  Message VARCHAR(1000),
  CreatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)`

db.run(sql_create, err => {
    if(err){
        return console.error( "Create: " +err.message);
    }
    console.log("successful creation of the 'Hint' table");
})

app.get('/', cors(corsOptions), (req, res) => {
    const sql = "SELECT Message FROM Hint ORDER BY CreatedAt DESC LIMIT 1"
    db.all(sql, [], (err, rows) => {
        if(err){
            return console.error(err.message);
        }
        res.send(rows[0]?.Message ?? '')
    })
});

app.post('/newhint', cors(corsOptions), (req, res) => {
    const sql_insert = `INSERT INTO Hint (Message) VALUES (?)`;
    const hint = [Object.keys(req.body)[0]];

    db.run(sql_insert, hint, err => {
        if(err){
            return console.error( "Insert: " +err.message);
        }
        console.log("Successful message creation")
    });

    res.send('OK');
});

app.post('/clear', cors(corsOptions), (req, res) => {
    const sql_clear = `DELETE FROM Hint`;

    db.run(sql_clear, err => {
        if(err){
            return console.error( "Clear: " +err.message);
        }
        console.log("Cleared")
    });

    res.send('OK');
});

http.listen(3000, () => {
    console.log("connected to port 3000");

});