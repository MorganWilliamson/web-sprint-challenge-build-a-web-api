// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

///// ENDPOINTS /////
router.get('/api/projects/', (req, res) => {
  Projects.get()
    .then((project) => {
      res.status(200).json(project)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})

router.get('/api/projects/:id', (req, res) => {
  Projects.get(req.params.id)
    .then((project) => {
      res.status(200).json(project)
    })
    .catch((err) => {
      console.timeLog(err)
      res.status(500).json({ message: err.message })
    })
})

router.post('/api/projects/', (req, res) => {
  Projects.insert(req.body)
    .then((project) => {
      res.status(201).json(project)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})

router.put('/api/projects/:id', (req, res) => {
  Projects.update(req.params.id, req.body)
    .then((id) => {
      if (id) {
        res.status(200).json(id)
      } else {
        res.status(400).json({ message: "Project with that ID cannot be found." })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})

router.delete('/api/projects/:id', (req, res) => {
  Projects.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Project successfully deleted." })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})

router.get('/api/projects/:id/actions', (req, res) => {
  Projects.getProjectActions(req.project.id)
    .then((actions) => {
      res.status(200).json(actions)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})


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