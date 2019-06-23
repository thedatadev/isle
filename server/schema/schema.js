// Dependencies - node_modules
const  _ = require("lodash");
const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLFloat, 
    GraphQLList, 
    GraphQLID,
    GraphQLSchema, 
} = graphql;


// Dependencies - internal libs
const models = require('../db/models');
const rooms = require('../db/rooms');


// Schemas

const ModelType = new GraphQLObjectType({

    name: 'Model',

    fields: () => ({

        id:       { type: GraphQLID },
        name:     { type: GraphQLString },
        uri:      { type: GraphQLString },
        position: { type: Vector3DType },
        rotation: { type: Vector3DType },
        scale:    { type: Vector3DType }


    })

});


const Vector3DType = new GraphQLObjectType({

    name: 'Vector3D',

    fields: () => ({

        x: { type: GraphQLFloat }, 
        y: { type: GraphQLFloat }, 
        z: { type: GraphQLFloat } 

    })

});


const RoomType = new GraphQLObjectType({

    name: 'Room',

    fields: () => ({

        id:         { type: GraphQLID },
        name:       { type: GraphQLString },
        modelIDs:   { type: GraphQLList( GraphQLID ) },
        modelObjects: {
            type: GraphQLList( ModelType ),
            resolve( parent, args ) {
                return parent.modelIDs.map( modelID => {
                    return _.find( models, { id: modelID } );
                });
            }
        },


    })

});


// Root Query

const RootQuery = new GraphQLObjectType({

    name: 'RootQueryType',

    fields: {


        room: {
            type: RoomType,
            args: { id: { type: GraphQLID } },
            resolve( parent, args ) {
                return _.find( rooms, { id: args.id } ); 
            }
        },


        rooms: {
            type: GraphQLList( RoomType ),
            resolve( parent, args ) {
                return rooms;
            }
        },


        model: {
            type: ModelType,
            args: { id: { type: GraphQLID } },
            resolve( parent, args ) {
                return _.find( models, { id: args.id } );
            }
        },


        models: {
            type: GraphQLList( ModelType ),
            resolve( parent, args ) {
                return models;
            }
        },



    }

});



module.exports = new GraphQLSchema({

    query: RootQuery

});