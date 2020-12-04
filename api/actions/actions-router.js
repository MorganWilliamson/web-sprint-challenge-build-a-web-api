// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model');

const router = express.Router();

///// ENDPOINTS /////
router.get('/api/actions/', (req, res) => {
  Actions.get(req.query)
    .then((actions) => {
      res.status(200).json(actions)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Error retrieving actions." })
    })
});

router.get('/api/actions/:id', (req, res) => {
  Actions.get(req.params.id)
    .then((action) => {
      res.status(200).json(action)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Error retrieving action with the specified ID." })
    })
});

router.post('/api/actions/', (req, res) => {
  Actions.insert({...req.body, id: req.params.id})
    .then((action) => {
      res.status(201).json(action)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Error during POST request." })
    })
});

router.put('/api/actions/:id', (req, res) => {
  Actions.update(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ data: req.body })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "Error updating resource." })
    })
});

router.delete('/api/actions/:id', (req, res) => {
  Actions.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Successfully deleted resource." })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: "This resource cannot be deleted." })
    })
});

///// CATCH-ALL /////
router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
  next();
});


module.exports = router;

/* This file needs: 
- [*] Inside `api/actions/actions-router.js` build endpoints for performing CRUD operations on _actions_:
  - [*] `[GET] /api/actions` sends an array of actions (or an empty array) as the body of the _response_.
  - [*] `[GET] /api/actions/:id` sends an action with the given `id` as the body of the _response_.
  - [*] `[POST] /api/actions` sends the newly created action as the body of the _response_.
  - [*] `[PUT] /api/actions/:id` sends the updated action as the body of the _response_.
  - [*] `[DELETE] /api/actions/:id` sends no _response_ body.
*/