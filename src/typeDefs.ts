
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        id: ID
        name: String
        email: String
        password: String
    }

    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }

    input UserFields {
        name: String
        email: String 
        password: String
    }

    type Mutation {
        createUser(user: UserFields!): User
        deleteUser(id: ID!): String
        updateUser(id: ID!, user: UserFields): User
    }

`;

export default typeDefs;