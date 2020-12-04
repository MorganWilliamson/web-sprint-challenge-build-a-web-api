// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

//// Local Middleware ////
const checkProjectID = (req, res, next) => {
  Projects.get(req.params.id)
    .then((project) => {
      if (project) {
        req.project = project;
        next();
      } else {
        next();
      }
    })
    .catch((err) => {
      console.log(err)
      next();
    })
}



///// ENDPOINTS /////
// - [*] `[GET] /api/projects` sends an array of projects (or an empty array) as the body of the response.
router.get('/', (req, res) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})

// - [*] `[GET] /api/projects/:id` sends a project with the given `id` as the body of the _response_.
router.get('/:id', (req, res) => {
  Projects.get(req.params.id)
    .then((project) => {
      res.status(200).json(project)
    })
    .catch((err) => {
      console.timeLog(err)
      res.status(500).json({ message: err.message })
    })
})

// - [*] `[POST] /api/projects` sends the newly created project as the body of the _response_.
router.post('/', (req, res) => {
  Projects.insert(req.body)
    .then((project) => {
      res.status(201).json(project)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})

// - [*] `[PUT] /api/projects` sends the updated project as the body of the _response_.
router.put('/:id', checkProjectID, (req, res) => {
  Projects.update(req.project.id, req.body)
    .then((project) => {
      res.status(200).json(project)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})

// - [*] `[DELETE] /api/projects` sends no _response_ body.
router.delete('/:id', checkProjectID, (req, res) => {
  Projects.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Project successfully deleted." })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})

// - [*] `[GET] /api/projects/:id/actions` sends an array of actions (or an empty array) as the body of the response.
router.get('/:id/actions', checkProjectID, (req, res) => {
  Projects.getProjectActions(req.project.id)
    .then((actions) => {
      res.status(200).json(actions)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})

///// CATCH-ALL /////
router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
  next();
});

module.exports = router;

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