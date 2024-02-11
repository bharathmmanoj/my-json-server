// import json-server package and store it in a 
//variable
const jsonServer = require('json-server');
// create a json server
const mediaPlayerServer = jsonServer.create()
// createa a connection to db.json file
const router = jsonServer.router('db.json');
// createa a middleware :intermidate function
// inorderr to use all the created object
const middleware = jsonServer.defaults();
// use the middleware
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

const port = 5000;
mediaPlayerServer.listen(port,()=>{
    console.log(`json server is up and running in port ${port}`)
})

