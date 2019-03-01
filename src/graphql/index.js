const { ApolloServer, gql } = require('apollo-server-fastify');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: async () => 'world',
  },
};
export default new ApolloServer({
  typeDefs,
  resolvers,
});
