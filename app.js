let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let index = require('./routes/index');
let users = require('./routes/users');
let recruteur = require('./routes/recruteur');
let admin = require('./routes/admin');
let blog = require('./routes/blog');
let emploi = require('./routes/emploi');
let login = require('./routes/login');
let concept = require('./routes/concept');
// let footer = require('./routes/footer');

const router = express.Router();
const multer = require('multer');
const upload = multer({dest : 'tmp/'})

let app = express();

// upload de fichier sur le site

// app.post('/emploi', upload.single('monfichier'), function (req, res, next) {
//   fs.rename(req.file.path, 'public/images/' + req.file.originalname, function(err){
//     if (err) {
//         res.send('problème durant le déplacement');
//     } else {
//         res.send('Fichier uploadé avec succès');
//     }
//   });
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(methodOverride('_method'));

app.use('/', index);
app.use('/users', users);
app.use('/recruteur', recruteur);
app.use('/login', login);
app.use('/admin', admin);
app.use('/login', login);
app.use('/blog', blog);
app.use('/concept', concept);
app.use('/emploi', emploi);
// app.use('/footer', footer);
// app.use('/validation', validation);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
