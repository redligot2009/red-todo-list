var express = require('express');
var router = express.Router();

listItems = [
    {
        id: 1,
        title: 'This is a Title',
        description: "Hello!"
      },
      {
        id: 2,
        title: 'This is also a Title',
        description: "How Are You?"
      },
      {
        id: 3,
        title: 'This is not a Title',
        description: "How Well Are You?"
      }
];

router.get('/', function (req,res,next) {
    res.json(listItems);
});

module.exports = router;