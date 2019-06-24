// Dependencies - node_modules
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const path = require('path');


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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



// Response Middleware
// ...


// Listen and Serve
const port = process.env.port || 4000;
app.listen(port, function() {
    console.log(`[ isle-server ] - Now listening on http://127.0.0.1:${port}/`);
});