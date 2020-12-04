// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model');
const Projects = require('../projects/projects-model');

const router = express.Router();



// DELETE THESE THREE BEFORE YOU START //
Actions; 
Projects;
router;

/* This file needs: 
- [ ] Inside `api/actions/actions-router.js` build endpoints for performing CRUD operations on _actions_:
  - [] `[GET] /api/actions` sends an array of actions (or an empty array) as the body of the _response_.
  - [] `[GET] /api/actions/:id` sends an action with the given `id` as the body of the _response_.
  - [] `[POST] /api/actions` sends the newly created action as the body of the _response_.
  - [] `[PUT] /api/actions` sends the updated action as the body of the _response_.
  - [] `[DELETE] /api/actions` sends no _response_ body.
*/