const express = require('express'),
  bodyParser = require('body-parser'),
  petugas = require('./routes/petugasRoutes'),
  sekolah = require('./routes/sekolahRoutes'),
  bukti = require('./routes/buktiRoutes'),
  cors = require('cors'),
  morgan = require('morgan'),
  multer = require('multer');

  require('dotenv').config();

const app = express()

app.use(express.json());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const options = {
  'Access-Control-Allow-Methods': 'PATCH,GET,PUT,POST,DELETE',
  'Access-Control-Allow-Origin': '*'
}

app.use(cors(options))

app.use('/petugas', petugas)
app.use('/sekolah', sekolah)
app.use('/bukti', bukti)


app.use('/', (req,res) => {
  res.send("its working !"+ process.env.TOKEN_SECRET)
})


app.listen(process.env.PORT || `3000`, () => {

  console.log(`Server is running on port: ${process.env.PORT || `3000`}`)

})