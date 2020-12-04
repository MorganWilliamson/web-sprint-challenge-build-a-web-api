const express = require('express');
const server = express();
const helmet = require('helmet');

// Complete your server here!
// Do NOT `server.listen()` inside this file!

/////// UNCOMMENT THIS //////// 
// const actionsRouter = require('./actions/actions-router')
// const projectsRouter = require('./projects/projects-router')

server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => {
    res.send(`
        <h2>Hello from the API!</h2>
        `)
});

server.get('*', (req, res) => {
    res.status(404).json({ message: "The requested resource could not be found." })
});

// server.use((error, req, res, next) => {
//     res.status(500).json({ message: error.message })
// })

module.exports = server;
