const express = require('express');
const { ApolloServer } = require('apollo-server-express');

import resolvers from './src/resolvers';
import typeDefs from './src/typeDefs';

import connectDB from './src/db';

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