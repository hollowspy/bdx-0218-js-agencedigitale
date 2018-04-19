var express = require('express');
var router = express.Router();

const connection = require('../controllers/config');
const querySQL = 'SELECT * FROM blog ';

const jsonsTmp = [{
  id: 1,
  pathImage: "./images/blog_image1.jpg",
  keyword: "toto",
  date: "12/04/2018",
  author: "James Bond",
  title: "mon titre",
  description: "ma description",
  content: "mqlsjdf mlkqsdj fklmqsj dflmkqj sdfmlkqjs dfmlqjk sdmflkj qsmdlfkj sqdfmlkjs d"
},
{
  id: 2,
  pathImage: "./images/blog_image2.jpg",
  keyword: "tata",
  date: "22/04/2018",
  author: "James Blonde",
  title: "mon titre 2",
  description: "ma description 2",
  content: "mqlsjdf mlkqsdj fklmqsj dflmkqj sdfmlkqjs dfmlqjk qsfd:jqmsdkfj qlksdjfqlksmdsdmflkj qsmdlfkj sqdfmlkjs d"
}]

/* GET blog page. */
router.get('/', (req, res, next) => {

  connection.query(querySQL, function (err, rows, fields) {

    res.render('blog', { title: 'Blog WNY', 'blogs': jsonsTmp });
  }
});


module.exports = router;