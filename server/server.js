const express = require('express'),
  bodyParser = require('body-parser'),
  user = require('./routes/userRoutes'),
  sekolah = require('./routes/sekolahRoutes'),
  bukti = require('./routes/buktiRoutes'),
  cors = require('cors'),
  upload = require('express-fileupload');

  require('dotenv').config();

const app = express()

app.use(express.json());
app.use(upload());

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const options = {
  'Access-Control-Allow-Methods': 'PATCH,GET,PUT,POST,DELETE',
  'Access-Control-Allow-Origin': '*'
}

app.use(cors(options))

app.use('/user', user)
app.use('/sekolah', sekolah)
app.use('/bukti', bukti)

app.use('/', (req,res) => {
  res.send("its working !")
})


app.listen(process.env.PORT || `3000`, () => {

  console.log(`Server is running on port: ${process.env.PORT || `3000`}`)

})