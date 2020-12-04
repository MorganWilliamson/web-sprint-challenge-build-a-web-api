const express = require('express');
const server = express();
const helmet = require('helmet');

// Complete your server here!
// Do NOT `server.listen()` inside this file!

// const actionsRouter = require('./actions/actions-router.js')
// const projectsRouter = require('./projects/projects-router')

server.use(express.json());
server.use(helmet());
// server.use('/api/actions', actionsRouter);
// server.use('/api/projects', projectsRouter);


server.get('/', (req, res) => {
    res.send(`
        <h2>Hello from the API!</h2>
        `)
});

server.get('*', (req, res) => {
    res.status(404).json({ message: "The requested resource could not be found." })
});


module.exports = server;
