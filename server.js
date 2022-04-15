const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `./config.env` });
const app = require('./app');

const db = process.env.DATABASE

mongoose.connect(db)
    .then((result) => {
        console.log('connected to mongodb');
    }).catch((err) => {
        console.log('error mongodb');
    });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server on port:${port}`);
})

