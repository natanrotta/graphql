const { GraphQLServer } = require('graphql-yoga');
const path = require('path');

const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://natan:1Lazzeri@@cluster0-aloxh.mongodb.net/graphql?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();