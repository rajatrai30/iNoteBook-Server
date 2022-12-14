const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();


// connectToMongo();
const app = express();
let DB = "mongodb+srv://rajatrai30:Rajat%402023@cluster0.advq3sf.mongodb.net/iNotebook?retryWrites=true&w=majority";
const port = 5000;
var cors = require('cors')

mongoose.connect(DB, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
}).then(() => {
  console.log('connection successfull');
}).catch((err) => console.log(err));

app.use(cors())
app.use(express.json())

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(5000, () => {
  console.log(`iNoteBook listening on port http://localhost:${port}`)
})

