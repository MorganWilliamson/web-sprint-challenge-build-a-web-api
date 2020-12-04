const express = require('express');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!

const actionsRouter = require('./actions/actions-router.js')
const projectsRouter = require('./projects/projects-router.js')

const middleware = (req, res, next) => {
    console.log(`Ping at: ${req.query}`)
    next();
};


server.use(express.json());
server.use('/api/actions', middleware, actionsRouter);
server.use('/api/projects', middleware, projectsRouter);


server.get('/', (_, res) => {
    res.send(`
        <h2>Hello from the API!</h2>
        `)
});

// server.get('*', (req, res) => {
//     res.status(404).json({ message: "The requested resource could not be found." })
// });

server.use((error, req, res, next) => {
    res.status(500).json({ message: error.message })
    next();
})

module.exports = server;
