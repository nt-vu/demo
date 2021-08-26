const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');

db.connect()

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// app.get('/news', (req, res) => {
//     res.render('news')
// })
// app.get('/', (req, res) =>{
//     res.render('home')
// });

route(app)
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));