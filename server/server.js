import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import { typeDefs, resolvers } from '/imports/api/schema';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({
    schema,
});
