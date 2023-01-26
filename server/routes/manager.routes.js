// const PersonController = require('../controllers/person.controller');
const { 
  title,
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne } = require('../controllers/manager.controller');

const express = require('express');
// const { updateOne } = require('../models/manager.model');
// const { create } = require('../models/manager.model');
const managerRouter = express.Router();

// module.exports = function(app){
//     app.get('/api', PersonController.index);
// }

managerRouter
  .route('/')
  .get(title); 

managerRouter
  .route('/managers')
  .post(create)
  .get(findAll);

managerRouter
  .route('/managers/:id')
  .get(findOne)
  .put(updateOne)
  .delete(deleteOne);
  
module.exports = managerRouter;