// Write your "projects" router here!
const express = require('express');

const Actions = require('../actions/actions-model');
const Projects = require('./projects-model');

const router = express.Router();



// DELETE THESE THREE BEFORE YOU START //
Actions; 
Projects;
router;


/* This file needs: 
- [ ] Inside `api/projects/projects-router.js` build endpoints for performing CRUD operations on _projects_:
  - [] `[GET] /api/projects` sends an array of projects (or an empty array) as the body of the response.
  - [] `[GET] /api/projects/:id` sends a project with the given `id` as the body of the _response_.
  - [] `[POST] /api/projects` sends the newly created project as the body of the _response_.
  - [] `[PUT] /api/projects` sends the updated project as the body of the _response_.
  - [] `[DELETE] /api/projects` sends no _response_ body.

AND: 
- [ ] Inside `api/projects/projects-router.js` add an endpoint for retrieving the list of actions for a project:
  - [] `[GET] /api/projects/:id/actions` sends an array of actions (or an empty array) as the body of the response.
*/