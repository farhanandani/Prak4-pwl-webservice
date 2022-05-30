const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/koneksi');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// set cors
app.use(cors());

app.post("/comment", (req, res) => {
    const data = {...req.body};
    koneksi.query('INSERT INTO messages SET ?', data, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(result);
        }
    }
    );
});

app.get("/comment", (req, res) => {
    koneksi.query('SELECT * FROM messages', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));