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


const distPath = process.env.NODE_ENV === 'production' ? '../client/build' : '../client/public';

app.use( express.static( path.join( __dirname, distPath )));   

app.get('*', function( _, response ) {

    response.sendfile( path.join( __dirname, `${distPath}/index.html` )); 

});





// Response Middleware
// ...


// Listen and Serve
const port = process.env.port || 4000;
app.listen(port, function() {
    console.log(`[ isle-server ] - Now listening on http://127.0.0.1:${port}/`);
});