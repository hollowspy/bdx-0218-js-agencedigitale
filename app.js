const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const index = require('./routes/index');
const users = require('./routes/users');
const recruteur = require('./routes/recruteur');
const admin = require('./routes/admin');
const blog = require('./routes/blog');
const emploi = require('./routes/emploi');
const login = require('./routes/login');
const concept = require('./routes/concept');
// const footer = require('./routes/footer');
const router = express.Router();
const app = express();
const fs = require('fs');
const multer = require('multer');
const upload = multer({
    dest: 'tmp/',
    limits: {
        fileSize: 3145728
    },
    fileFilter: (req, file, callback)=> {
        let ext = path.extname(file.originalname);
        if (ext !== '.png') {
            return callback(new Error('Sorry, only images are allowed'))
        }
        callback(null, true)
    }
});



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

// Start Upload
// app.put('/contact/:id', upload.single('monfichier'), (req, res, next) => {
//             fs.rename(req.file.path, 'public/images/' + req.file.originalname, (err) => {
//                 if (err) {
//                     res.send('Error during moving');
//                 } else {
//                     console.log('Upload ok');
//                 }
//             });
//             res.end(`ok`)       
//     }),


// End Upload

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(methodOverride('_method'));

app.use('/', index);
app.use('/users', users);
app.use('/recruteur', recruteur);
app.use('/login', login);
app.use('/admin', admin);
app.use('/blog', blog);
app.use('/concept', concept);
app.use('/emploi', emploi);
// app.use('/footer', footer);

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
