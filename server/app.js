// Dependencies - node_modules
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');


// Dependencies - internal libs
const schema = require('./schema/schema');


// App Server
const app = express();


// Request Middleware
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


// Route Handlers
// ...


// Response Middleware
// ...


// Listen and Serve
const port = process.env.port || 4000;
app.listen(port, function() {
    console.log(`[ isle-server ] - Now listening on http://127.0.0.1:${port}/`);
});