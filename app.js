const express = require('express');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const config = {
    host: 'localhost', 
    port: 5432,
    database: 'restaurant2', 
    user: 'postgres',
    password: 'postgress'
}
const db = pgp(config);


app.get('./api/restaurant2', (req, res) => {
    db.query('SELECT * FROM restaurant2')
    .then((results) => {
        res.json(results); 
    });
});

app.get('./api/restaurant2/:id', (req, res) => {
    db.oneOrNone('SELECT * FROM restaurant2 WHERE restaurant2.id = $1', req.params.id)
    .then(result => {
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({});
        }
    })
    .catch((e) => {
        res.status(500).json ({
            error: 'Database Error'
        }) 
    });
});

app.post('./api/restaurant2', (req, res) => {

})

app.listen(PORT, () => console.log(`Running: http://localhost${PORT}`))
