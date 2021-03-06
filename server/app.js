require('dotenv').config();
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const configure    = require('./config/passport.js');
const passport     = require('passport');
const logger       = require('morgan');
const path         = require('path');
const cors = require('cors');
require('dotenv').config();




DBURL=process.env.MONGODB_URI;


mongoose.Promise = Promise;
mongoose
  .connect(DBURL, {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();
app.use(session({
  secret: "ayto-rozas-app",
  resave: true,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 60000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

//Middleware...
const whitelist = [
  'http://localhost:4200',
]

const corsOptions = {
  origin: (origin, cb) => {
    var originIsWhiteListed = whitelist.indexOf(origin) !== -1;
    cb(null, originIsWhiteListed);
  },
  credentials: true
}

app.use(cors(corsOptions));



// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

configure(passport);

app.use(passport.initialize());
app.use(passport.session());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'rozas.png')));



// default value for title local
app.locals.title = 'Ayto-Rozas-App';



const index = require('./routes/index');
app.use('/', index);


module.exports = app;
