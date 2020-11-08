require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/Graphql/schema');
const resolvers = require('./src/Graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
if (process.env.NODE_ENV !== 'test') {
  server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
      console.log(`🚀 app running at ${url}`)
    });
}

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
