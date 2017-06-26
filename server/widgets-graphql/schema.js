import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

export const schema = new GraphQLSchema({

  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World!',
      }
    }),
  }),

});