require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/Graphql/schema');
const resolvers = require('./src/Graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
