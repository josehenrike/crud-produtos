const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
        if (req.body.id && typeof req.body.id === 'string') {
            req.body.id = parseInt(req.body.id, 10);
        }
    }
    next();
});

server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});