const route = require('express').Router() //using this we create different routes
const controller = require('../controller/controller');
const store = require('../middleware/multer')
//routes
route.get('/',controller.home);
route.post('/uploadmultiple', store.array('images', 12),controller.uploads) //array for multiple image adding


module.exports = route;
