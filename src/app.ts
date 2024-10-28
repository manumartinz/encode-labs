const express = require('express');
const { ApolloServer } = require('apollo-server-express');

import resolvers from './resolvers';
import typeDefs from './typeDefs';

import connectDB from './db';

const app = express();
connectDB();

module.exports = app;


async function start() {
    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app: app });


    app.listen(3000, () => {
        console.log('Server on port', 3000);
    })
}

start();