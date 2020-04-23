const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const path = require('path');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//require uri from keys file
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose.connect(String(db),{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo Connected'))
    .catch(err => console.log(err));


//Use routes. Use items file for /api/items path

app.use('/api/items/', items);


//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// either use heroku's port or 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
