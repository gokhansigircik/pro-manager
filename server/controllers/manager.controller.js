const Manager = require('../models/manager.model');

const title = (req, res) => {
  res.json({
    // title:"Hello World",
  });
};

const create = (req, res) => {
  Manager.create(req.body)
    .then(manager => res.status(201).json(manager))
    .catch(err => res.status(400).json(err))
};

const findAll = (req, res) => {
  Manager.find()
  .then(managers => res.status(201).json(managers))
  .catch(err => res.status(400).json(err))
};

const findOne = (req, res) => {
  const { id } = req.params;
  Manager.findById(id)
  .then(manager => res.status(201).json(manager))
  .catch(err => res.status(400).json(err))
};

const updateOne = (req, res) => {
  const { id } = req.params;
  Manager.findByIdAndUpdate(id, req.body)
    .then(manager => res.status(200).json(manager))
    .catch(err => res.status(400).json(err)) 
}

const deleteOne = (req, res) => {
  const { id } = req.params;
  Manager.findByIdAndDelete(id)
    .then(manager => res.status(200).json(manager))
    .catch(err => res.status(400).json(err))
}

module.exports = { title, create, findAll, findOne, updateOne, deleteOne };  

