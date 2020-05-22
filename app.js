const express = require('express');
const pgp = require('pg-promise')();
const PORT = process.env.PORT || 3000;

const app = express();
const config = {
    host: 'localhost', 
    port: 5432,
    database: 'restaurant2', 
    user: 'postgres',
    password: 'postgress'
}
const db = pgp(config);


app.get('/api/restaurant2', (req, res) => {
    db.query('SELECT * FROM restaurant2').then((results) => {
        res.json(results);
        console.log(results);
    });
});

app.listen(PORT, () => console.log(`Running: http://localhost${PORT}`))
