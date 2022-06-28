const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path : './config.env'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.DB_CON, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected 👍"))
.catch ( err => console.log(err) )

// mongodb+srv://MdAmir_Db:admin1234@cluster0.oag5gb9.mongodb.net/blog-management?retryWrites=true&w=majority


app.use('/', route)


app.listen(process.env.PORT, function () {
    console.log('Express app running on port 🎧 ' + (process.env.PORT || 3000))
});


